import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ExternalLink } from "lucide-react";

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = "Hello";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    setGreeting(greeting);
  }, []);

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download");
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neon/20 rounded-full filter blur-[100px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon/10 rounded-full filter blur-[120px] animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-72 h-72 bg-neon/15 rounded-full filter blur-[80px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10 text-center">
        <div className="mb-4 inline-block glass px-4 py-2 rounded-full">
          <p className="text-sm font-medium text-neon">{greeting}, Explorer</p>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          Welcome to <span className="text-gradient">TypeBlitz</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Elevate Your Typing Speed and Accuracy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-neon text-dark hover:bg-neon/90 btn-glow px-8 py-6 text-lg flex items-center gap-2"
            onClick={scrollToDownload}
          >
            <DownloadIcon className="w-5 h-5" />
            Download Now
          </Button>

          <Button
            variant="outline"
            className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg flex items-center gap-2"
            onClick={() => window.open("https://ellowdigitals.me", "_blank")}
          >
            <ExternalLink className="w-4 h-4" />
            Visit EllowDigital
          </Button>
        </div>

        <div className="mt-16 relative">
          <div className="max-w-sm md:max-w-lg mx-auto glass p-2 rounded-xl overflow-hidden border border-neon/20">
            <div className="rounded-lg bg-dark overflow-hidden">
              <div className="flex items-center bg-black/40 px-4 py-2 space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-gray-400">TypeBlitz Dashboard</div>
              </div>
              <div className="p-6 text-left">
                <div className="typing-container">
                  <p className="typing-text typing-cursor">
                    Your journey to faster typing starts here...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-neon/30 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-neon/20 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-neon">
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
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
