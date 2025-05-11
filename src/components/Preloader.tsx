import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark transition-opacity duration-700">
      <div className="relative w-32 h-32 mb-6">
        {/* ✅ Add your GIF here */}
        <img
          src="/assets/TypeBlitz-gif.gif"
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-white text-lg animate-pulse">Launching TypeBlitz Experience...</p>
    </div>
  );
};

export default Preloader;
