
import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LATEST_VERSION = "v1.2-stable";  // Updated version
const LATEST_VERSION_DISPLAY = "v1.2";  // Updated version
const RELEASE_DATE = "May 12, 2025";

const olderVersions = [
  { version: "v1.2-beta", label: "Version 1.2 (Beta)" },
  // Add additional versions as needed
];

const Download = () => {
  const [showOlderVersions, setShowOlderVersions] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimatedRef = useRef(false);
  const { toast } = useToast();

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          sectionEl.classList.add("animate-fade-in");
          hasAnimatedRef.current = true;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDownload = useCallback(
    (version: string) => {
      const isLatest = version === LATEST_VERSION;
      const fileName = `TypeBlitz-${version}.zip`;
      const path = isLatest ? `./production/latest/${fileName}` : `./production/files/${fileName}`;

      toast({
        title: "Download started",
        description: `TypeBlitz ${version} is being downloaded. Thank you for choosing TypeBlitz!`,
        duration: 5000,
      });

      setTimeout(() => {
        const link = document.createElement("a");
        link.href = path;
        link.download = fileName;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 1000);
    },
    [toast]
  );

  return (
    <section
      id="download"
      ref={sectionRef}
      className="section-padding bg-gradient-radial from-black via-dark to-black relative opacity-0"
    >
      {/* Decorative Borders */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Download TypeBlitz</h2>
          <p className="section-subtitle">
            Get started with TypeBlitz and transform your typing experience today
          </p>
        </div>

        <div className="max-w-lg mx-auto glass rounded-2xl p-8 border border-neon/20 hover-lift">
          <div className="mb-10">
            <div className="flex items-center justify-center mb-5">
              <div className="w-20 h-20 rounded-2xl bg-neon flex items-center justify-center">
                <span className="text-black font-bold text-3xl">TB</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">
              TypeBlitz {LATEST_VERSION_DISPLAY}
            </h3>
            <p className="text-center text-muted-foreground mb-1">
              Latest Release • {RELEASE_DATE}
            </p>
            <p className="text-center text-sm text-neon">100% Free | No Ads | No Subscription</p>
          </div>

          <div className="space-y-4">
            <Button
              className="w-full bg-neon text-dark hover:bg-neon/90 py-6 text-lg flex items-center justify-center gap-2"
              onClick={() => handleDownload(LATEST_VERSION)}
            >
              <DownloadIcon className="w-5 h-5" />
              Download Latest
            </Button>

            <div className="pt-2">
              <p className="text-center text-sm text-muted-foreground mb-2">
                Download older versions of TypeBlitz
              </p>
              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-white hover:bg-white/5 flex items-center justify-center gap-2"
                onClick={() => setShowOlderVersions((prev) => !prev)}
              >
                Older Versions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showOlderVersions ? "rotate-180" : ""}`}
                />
              </Button>

              {showOlderVersions && (
                <div className="mt-4 space-y-3 animate-fade-in">
                  {olderVersions.map(({ version, label }) => (
                    <div key={version} className="glass-card rounded-lg p-3 flex justify-between">
                      <span>{label}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-neon hover:text-neon/70"
                        onClick={() => handleDownload(version)}
                      >
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
