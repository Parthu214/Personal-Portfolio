import { useEffect, useState } from "react";

const CalmBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState({ y: 0 });
  const [aboutSectionY, setAboutSectionY] = useState(0);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // Get About section position on mount
  useEffect(() => {
    const getAboutPosition = () => {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        setAboutSectionY(aboutSection.getBoundingClientRect().top + window.scrollY);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(getAboutPosition, 500);
    window.addEventListener("resize", getAboutPosition);
    return () => window.removeEventListener("resize", getAboutPosition);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX - window.innerWidth / 2) * 0.005, 
        y: (e.clientY - window.innerHeight / 2) * 0.005 
      });
    };

    let throttleTime = 0;
    const handleMouseMoveThrottled = (e: MouseEvent) => {
      const now = Date.now();
      if (now - throttleTime > 50) {
        handleMouseMove(e);
        throttleTime = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMoveThrottled);
    return () => window.removeEventListener("mousemove", handleMouseMoveThrottled);
  }, []);

  // Scroll parallax effect + trigger floating squares
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPos({ y: scrollY * 0.5 });
      
      // Trigger squares when scrolled to About section (with 100px buffer)
      setIsAboutVisible(scrollY >= aboutSectionY - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [aboutSectionY]);

  // Generate floating squares with random properties
  const floatingSquares = Array(12).fill(0).map((_, i) => ({
    id: i,
    left: Math.random() * 85 + 5, // 5-90% random horizontal
    top: Math.random() * 80 + 10, // 10-90% random vertical start
    size: 20 + Math.random() * 50, // 20-70px random size
    duration: 15 + Math.random() * 10, // 15-25s random duration
    delay: i * 0.15, // 0.15s stagger between squares
    randomRotation: Math.random() * 20 - 10, // -10 to 10 degrees
  }));

  return (
    <div className="calm-background fixed inset-0 overflow-visible z-0 pointer-events-none min-h-screen">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      {/* Floating Blobs with mouse + scroll parallax */}
      
      {/* Blob 1 - Cyan accent */}
      <div
        className="blob blob-1"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y + scrollPos.y * 0.3}px)`,
          transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Blob 2 - Purple accent */}
      <div
        className="blob blob-2"
        style={{
          transform: `translate(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8 + scrollPos.y * 0.2}px)`,
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Blob 3 - Blue accent */}
      <div
        className="blob blob-3"
        style={{
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6 + scrollPos.y * 0.4}px)`,
          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* 3D FLOATING SQUARES - Appear from About section */}
      <div className="floating-squares-container fixed inset-0 z-[-1] pointer-events-none overflow-visible">
        {floatingSquares.map((square) => (
          <div
            key={square.id}
            className={`floating-square ${isAboutVisible ? 'active' : 'inactive'}`}
            style={{
              left: `${square.left}%`,
              top: `${square.top + (isAboutVisible ? scrollPos.y * 0.05 : 0)}px`,
              width: `${square.size}px`,
              height: `${square.size}px`,
              '--fade-delay': `${isAboutVisible ? square.delay : 0}s`,
              '--float-duration': `${square.duration}s`,
              '--float-delay': `${isAboutVisible ? square.delay + 0.6 : 0}s`,
            } as React.CSSProperties & { '--fade-delay': string; '--float-duration': string; '--float-delay': string }}
          />
        ))}
      </div>

      {/* Soft overlay fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-[0.008]" />

      {/* Ambient lighting effect from edges */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
    </div>
  );
};

export default CalmBackground;
