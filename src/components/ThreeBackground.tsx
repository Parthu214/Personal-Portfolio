import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mass: number;
}

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const particleGeometryRef = useRef<THREE.BufferGeometry | null>(null);
  const linesGeometryRef = useRef<THREE.BufferGeometry | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a1a);
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.z = 100;
    cameraRef.current = camera;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a1a, 1);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Particle System
    const particleCount = 200;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 300,
          (Math.random() - 0.5) * 300,
          (Math.random() - 0.5) * 300
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5
        ),
        mass: Math.random() * 0.5 + 0.5,
      });
    }
    particlesRef.current = particles;

    // Create Particle Geometry
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const neonColors = [
      { r: 0, g: 1, b: 0.6 }, // cyan
      { r: 0, g: 1, b: 0.2 }, // green
      { r: 0.8, g: 0, b: 1 }, // purple
      { r: 0, g: 0.8, b: 1 }, // bright cyan
      { r: 0.4, g: 1, b: 0 }, // lime green
    ];

    particles.forEach((particle, i) => {
      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;

      const color = neonColors[i % neonColors.length];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    });

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
    particleGeometryRef.current = particleGeometry;

    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Create Lines Geometry
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometryRef.current = linesGeometry;

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.3,
    });

    const lineSystem = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineSystem);

    // Animation Loop
    let time = 0;
    const maxDistance = 80;

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      time += 0.001;

      const positions = particleGeometry.attributes.position.array as Float32Array;

      // Update particle positions
      particles.forEach((particle, i) => {
        // Apply velocity
        particle.position.add(particle.velocity);

        // Boundary wrapping
        const boundarySize = 150;
        if (Math.abs(particle.position.x) > boundarySize)
          particle.position.x *= -0.95;
        if (Math.abs(particle.position.y) > boundarySize)
          particle.position.y *= -0.95;
        if (Math.abs(particle.position.z) > boundarySize)
          particle.position.z *= -0.95;

        // Apply wave motion
        particle.position.y +=
          Math.sin(time * 0.5 + i * 0.1) * 0.02 -
          Math.cos(time * 0.3 + i * 0.15) * 0.02;

        positions[i * 3] = particle.position.x;
        positions[i * 3 + 1] = particle.position.y;
        positions[i * 3 + 2] = particle.position.z;
      });

      (particleGeometry.attributes.position as THREE.BufferAttribute).needsUpdate =
        true;

      // Create connection lines
      const linePositions: number[] = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = particles[i].position.distanceTo(
            particles[j].position
          );

          if (distance < maxDistance) {
            linePositions.push(
              particles[i].position.x,
              particles[i].position.y,
              particles[i].position.z,
              particles[j].position.x,
              particles[j].position.y,
              particles[j].position.z
            );
          }
        }
      }

      linesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(linePositions), 3)
      );

      // Camera movement
      camera.position.x = Math.sin(time * 0.05) * 30;
      camera.position.y = Math.cos(time * 0.07) * 30;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Pause animation on tab visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
      particleGeometry.dispose();
      linesGeometry.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="three-background" />;
};

export default ThreeBackground;
