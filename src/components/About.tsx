import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding relative opacity-0">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gradient">
              About TypeBlitz
            </h2>

            <p className="text-lg text-muted-foreground">
              TypeBlitz is a free, offline typing app designed to accelerate your speed and
              precision through smart exercises, AI feedback, and minimal distractions.
            </p>

            <p className="text-lg text-muted-foreground">
              Whether you're a professional looking to boost productivity or a beginner aiming to
              master typing, TypeBlitz adapts to your skill level and provides personalized feedback
              to help you improve quickly.
            </p>

            <div className="inline-flex glass px-4 py-2 rounded-full items-center gap-2">
              <span>Crafted with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>by EllowDigital</span>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-2xl p-1 relative z-10 transform rotate-1 hover-lift">
              <div className="bg-dark rounded-xl overflow-hidden">
                <div className="flex items-center bg-black/40 px-4 py-2 space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-xs text-gray-400">TypeBlitz App</div>
                </div>
                <div className="p-4">
                  <div className="border-b border-white/10 pb-3 mb-3">
                    <h3 className="text-neon font-medium">Your Stats</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="glass-card rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">78</div>
                      <div className="text-xs text-gray-400">WPM</div>
                    </div>
                    <div className="glass-card rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">97%</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                    <div className="glass-card rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">14</div>
                      <div className="text-xs text-gray-400">Days</div>
                    </div>
                  </div>
                  <div className="glass-card rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-2">Typing Progress</div>
                    <div className="h-2 bg-dark rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neon to-green-400 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-neon/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
