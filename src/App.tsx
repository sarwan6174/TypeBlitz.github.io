// App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

// Create QueryClient outside of the component to avoid recreation on re-renders
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "TypeBlitz",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "Windows",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      downloadUrl: "https://typeblitz.tech/#download",
      author: {
        "@type": "Organization",
        name: "EllowDigital",
        url: "https://ellowdigitals.me",
      },
      description:
        "A free typing app designed to improve typing speed and accuracy with adaptive challenges.",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "124",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Sonner />
      <Outlet /> {/* This renders the active route content */}
    </QueryClientProvider>
  );
};

export default App;
