import { useEffect, useRef } from "react";
import { Check, Layout, LineChart, Package } from "lucide-react";

const featureData = [
  {
    icon: <Check className="w-8 h-8 text-neon" />,
    title: "Effortless Typing Improvement",
    description:
      "Our smart algorithm adapts to your skill level, providing progressive challenges that steadily enhance your typing speed and accuracy.",
  },
  {
    icon: <Layout className="w-8 h-8 text-neon" />,
    title: "User-Friendly Interface",
    description:
      "Clean, distraction-free design helps you focus on what matters most—improving your typing skills without complexity.",
  },
  {
    icon: <Package className="w-8 h-8 text-neon" />,
    title: "Compact Size",
    description:
      "TypeBlitz is lightweight, using minimal system resources while delivering maximum performance on any desktop computer.",
  },
  {
    icon: <LineChart className="w-8 h-8 text-neon" />,
    title: "Progress Tracking with Visual Charts",
    description:
      "Monitor your improvement with detailed analytics and visual representations of your typing speed, accuracy, and consistency.",
  },
];

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-black to-dark relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-neon/10 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-1/2 right-1/4 w-80 h-80 bg-neon/5 rounded-full filter blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            TypeBlitz combines advanced technology with simplicity to deliver the ultimate typing
            improvement experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="neumorph p-6 rounded-xl flex flex-col items-center text-center opacity-0 hover-lift"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 glass rounded-full p-3 border border-neon/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
