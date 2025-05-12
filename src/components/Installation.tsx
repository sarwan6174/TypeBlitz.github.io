
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileUp, FilePlus, ShieldCheck, Check } from "lucide-react";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

const Installation = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="installation" ref={sectionRef} className="section-padding relative opacity-0">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Install TypeBlitz in 5 Easy Steps</h2>
          <p className="section-subtitle">
            Quickly set up and start using TypeBlitz in just a few clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Step 1 */}
          <Step
            icon={<Download className="w-5 h-5 text-neon" />}
            title="Step 1"
            description="Download the ZIP file from the link above."
          />

          {/* Step 2 */}
          <Step
            icon={<FileUp className="w-5 h-5 text-neon" />}
            title="Step 2"
            description="Extract the ZIP file to a folder on your computer."
          />

          {/* Step 3 */}
          <Step
            icon={<FilePlus className="w-5 h-5 text-neon" />}
            title="Step 3"
            description='Double-click "TypeBlitz.exe" to launch the app.'
          />

          {/* Step 4 */}
          <Step
            icon={<ShieldCheck className="w-5 h-5 text-neon" />}
            title="Step 4"
            description={
              <TooltipProvider>
                <>
                  If Windows shows a warning, click <strong>"More Info" → "Run Anyway"</strong>.
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        className="text-neon hover:text-neon/80 ml-1"
                        aria-label="Why this message appears"
                      >
                        ?
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="w-64 p-3">
                      Windows might warn you because the app isn't digitally signed. Don't worry —
                      TypeBlitz is 100% safe and clean.
                    </TooltipContent>
                  </Tooltip>
                </>
              </TooltipProvider>
            }
          />

          {/* Step 5 */}
          <Step
            icon={<Check className="w-5 h-5 text-neon" />}
            title="Step 5"
            description="You're all set — enjoy using TypeBlitz completely free!"
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Step component
const Step = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) => (
  <div className="neumorph rounded-xl p-6 text-center">
    <div className="w-12 h-12 rounded-full glass flex items-center justify-center mx-auto mb-4 border border-neon/20">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default Installation;
