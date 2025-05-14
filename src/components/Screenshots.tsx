import { useEffect, useRef, useState } from "react";

const screenshotData = [
  {
    title: "Dashboard Overview",
    description: "Track your typing goals and progress at a glance.",
    image: "/assets/images/screenshots/dashboard.webp",
  },
  {
    title: "Practice Mode: Words",
    description: "Sharpen your typing skills with word-based exercises and real-time feedback.",
    image: "/assets/images/screenshots/practice-words.webp",
  },
  {
    title: "Practice Mode: Paragraphs",
    description: "Improve flow and accuracy with paragraph-level practice.",
    image: "/assets/images/screenshots/practice-paragraph.webp",
  },
  {
    title: "Performance Stats",
    description: "View detailed analytics of your typing performance.",
    image: "assets/images/screenshots/performance-history.webp",
  },
  {
    title: "Auto Update Check",
    description: "Stay up to date effortlessly with a single click.",
    image: "/assets/images/screenshots/check-update.webp",
  },
  {
    title: "Update Status Panel",
    description: "Monitor update progress and version info with ease.",
    image: "/assets/images/screenshots/update-status.webp",
  },
];

const Screenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshotData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshotData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" ref={sectionRef} className="section-padding relative opacity-0">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">App Screenshots</h2>
          <p className="section-subtitle">
            Take a closer look at TypeBlitz's elegant and functional design
          </p>
        </div>

        <div className="relative">
          <div className="glass rounded-2xl p-1 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                src={screenshotData[activeIndex].image}
                alt={screenshotData[activeIndex].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 glass p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {screenshotData[activeIndex].title}
                </h3>
                <p className="text-muted-foreground">{screenshotData[activeIndex].description}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 transform -translate-y-1/2 left-4 md:left-8 glass-card p-2 md:p-3 rounded-full z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 transform -translate-y-1/2 right-4 md:right-8 glass-card p-2 md:p-3 rounded-full z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 space-x-3">
            {screenshotData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-neon" : "bg-white/20 hover:bg-white/40"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Screenshot {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
