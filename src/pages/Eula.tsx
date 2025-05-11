import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Eula = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
          End User License Agreement (EULA)
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">1. Introduction</h2>
            <p>
              This End User License Agreement ("EULA") is a legal agreement between you (either an
              individual or a single entity) and TypeBlitz regarding your use of TypeBlitz's
              software applications, and associated documentation ("Software").
            </p>
            <p className="mt-2">
              By installing, copying, or otherwise using the Software, you agree to be bound by the
              terms of this EULA. If you do not agree to the terms of this EULA, do not install or
              use the Software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">2. License Grant</h2>
            <p>
              TypeBlitz hereby grants you a personal, non-transferable, non-exclusive license to use
              the Software on your personal computer device(s) in accordance with the terms of this
              EULA.
            </p>
            <p className="mt-2">You are permitted to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Install and use the Software for personal, non-commercial use</li>
              <li>Make one copy of the Software for backup purposes</li>
            </ul>
            <p className="mt-2">You are not permitted to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Distribute, sell, lease, rent, lend, or sublicense the Software</li>
              <li>
                Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source
                code of the Software
              </li>
              <li>
                Modify, adapt, translate, or create derivative works based upon the Software or any
                part thereof
              </li>
              <li>Remove, alter, or obscure any proprietary notices on the Software</li>
              <li>Use the Software for any commercial purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">3. Intellectual Property</h2>
            <p>
              The Software, including its code, documentation, structure, sequence, organization,
              and all improvements, enhancements, updates, and upgrades, is owned by TypeBlitz or
              its suppliers and is protected by copyright and other intellectual property laws. All
              title and intellectual property rights in and to the content that may be accessed
              through use of the Software is the property of the respective content owner and may be
              protected by applicable copyright or other intellectual property laws and treaties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">4. Term and Termination</h2>
            <p>
              This EULA remains in effect until terminated. TypeBlitz may terminate this EULA at any
              time without notice if you fail to comply with any term of this EULA. You may
              terminate this EULA at any time by uninstalling the Software and destroying all copies
              of the Software in your possession or control. Upon termination of this EULA, you must
              cease all use of the Software and destroy all copies, full or partial, of the
              Software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">5. Warranty Disclaimer</h2>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
              INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF
              CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE
              OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              6. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL TYPEBLITZ OR ITS
              SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES
              WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF BUSINESS PROFITS,
              BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS)
              ARISING OUT OF THE USE OF OR INABILITY TO USE THE SOFTWARE, EVEN IF TYPEBLITZ HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-foreground">7. Governing Law</h2>
            <p>
              This EULA shall be governed by and construed in accordance with the laws of the
              jurisdiction in which TypeBlitz operates, without regard to its conflict of law
              principles.
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

export default Eula;
