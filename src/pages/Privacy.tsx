import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Privacy Policy</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">1. Introduction</h2>
            <p>
              Welcome to TypeBlitz. We respect your privacy and are committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              2. Information We Collect
            </h2>
            <p>We collect minimal information to provide you with a better experience:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Usage statistics: We anonymously collect information about how you use TypeBlitz,
                including typing speed, accuracy, and frequency.
              </li>
              <li>
                Device information: Basic information about your operating system and device
                specifications.
              </li>
              <li>
                Settings and preferences: Your application settings and customization preferences.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>To provide and maintain TypeBlitz functionality</li>
              <li>To personalize your experience based on your usage patterns</li>
              <li>To improve our application based on user feedback and statistics</li>
              <li>To detect and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">4. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your information to third parties.
              Anonymous usage statistics may be used internally for product improvement purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">5. Data Security</h2>
            <p>
              We implement reasonable security measures to maintain the safety of your personal
              information. However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              6. Updates to This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              privacy@typeblitz.com.
            </p>
          </section>

          <div className="pt-4 border-t border-white/10 text-sm">Last updated: May 10, 2025</div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Privacy;
