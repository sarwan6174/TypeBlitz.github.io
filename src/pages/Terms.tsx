import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Terms of Use</h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">1. Agreement to Terms</h2>
            <p>
              By accessing and using TypeBlitz, you agree to be bound by these Terms of Use and all
              applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">2. Use License</h2>
            <p>
              TypeBlitz grants you a personal, non-transferable, non-exclusive license to use the
              application for personal, non-commercial purposes. This license does not include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Modifying or copying application materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>
                Attempting to decompile or reverse engineer any software contained in TypeBlitz
              </li>
              <li>Removing any copyright or proprietary notations</li>
              <li>
                Transferring the materials to another person or "mirroring" the materials on any
                other server
              </li>
            </ul>
            <p className="mt-2">
              This license shall automatically terminate if you violate any of these restrictions
              and may be terminated at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">3. Disclaimer</h2>
            <p>
              The materials on TypeBlitz are provided "as is". We make no warranties, expressed or
              implied, and hereby disclaim and negate all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">4. Limitations</h2>
            <p>
              In no event shall TypeBlitz or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use TypeBlitz, even if we or an
              authorized representative has been notified orally or in writing of the possibility of
              such damage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">5. Revisions and Errata</h2>
            <p>
              The materials appearing in TypeBlitz could include technical, typographical, or
              photographic errors. We do not warrant that any of the materials are accurate,
              complete, or current. We may make changes to the materials at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              6. Modifications to Terms of Use
            </h2>
            <p>
              We may revise these terms of use at any time without notice. By using TypeBlitz you
              are agreeing to be bound by the then current version of these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws
              and you irrevocably submit to the exclusive jurisdiction of the courts in that
              location.
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

export default Terms;
