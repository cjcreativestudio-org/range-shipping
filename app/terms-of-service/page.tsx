import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Range Shipping",
  description: "Terms of Service for Range Shipping Ltd.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px] bg-[#001a36] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/35 mb-4">
            Last updated: April 17, 2022
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Terms of Service
          </h1>

          <div className="space-y-10 text-[14px] font-light leading-relaxed text-white/60">

            <p>
              Please read these Terms of Service carefully before using the Website operated by Range Shipping Ltd. By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these Terms, You may not access the Service.
            </p>

            <Section title="Interpretation and Definitions">
              <SubSection title="Interpretation">
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              </SubSection>
              <SubSection title="Definitions">
                <p className="mb-4">For the purposes of these Terms of Service:</p>
                <ul className="space-y-3 list-none">
                  <DefItem term="Company">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Range Shipping Ltd, Millbank Tower, 21-24 Millbank, 1st Floor, 1.5A, London, SW1P 4QP.</DefItem>
                  <DefItem term="Country">United Kingdom.</DefItem>
                  <DefItem term="Device">any device that can access the Service such as a computer, a cellphone or a digital tablet.</DefItem>
                  <DefItem term="Service">the Website.</DefItem>
                  <DefItem term="Terms of Service">(also referred to as "Terms") mean these Terms of Service that form the entire agreement between You and the Company regarding the use of the Service.</DefItem>
                  <DefItem term="Website">Range Shipping Ltd, accessible from rangeshipping.com.</DefItem>
                  <DefItem term="You">the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</DefItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="Acknowledgement">
              <p className="mb-4">These are the Terms of Service governing the use of this Service and the agreement that operates between You and the Company. These Terms set out the rights and obligations of all users regarding the use of the Service.</p>
              <p className="mb-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms of Service. These Terms apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms. If You disagree with any part of these Terms then You may not access the Service.</p>
            </Section>

            <Section title="Links to Other Websites">
              <p className="mb-4">Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
              <p className="mb-4">The Company has no control over and assumes no responsibility for the content, privacy policies, or practices of any third party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
              <p>We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
            </Section>

            <Section title="Termination">
              <p className="mb-4">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms of Service.</p>
              <p>Upon termination, Your right to use the Service will cease immediately.</p>
            </Section>

            <Section title="Limitation of Liability">
              <p className="mb-4">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, business interruption, personal injury, loss of privacy) arising out of or in any way related to the use of or inability to use the Service.</p>
              <p>Some jurisdictions do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means some of the above limitations may not apply. In these jurisdictions, each party's liability will be limited to the greatest extent permitted by law.</p>
            </Section>

            <Section title='"As Is" and "As Available" Disclaimer'>
              <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>
              <p>The foregoing disclaimer will not apply to the extent prohibited by applicable law.</p>
            </Section>

            <Section title="Governing Law">
              <p className="mb-4">The laws of the United Kingdom, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.</p>
              <p>Your use of the Service may also be subject to other local, state, national, or international laws.</p>
            </Section>

            <Section title="Disputes Resolution">
              <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company at <a href="mailto:info@rangeshipping.com" className="text-white/60 underline underline-offset-2 hover:text-white transition-colors">info@rangeshipping.com</a>.</p>
            </Section>

            <Section title="Severability and Waiver">
              <SubSection title="Severability">
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
              </SubSection>
              <SubSection title="Waiver">
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
              </SubSection>
            </Section>

            <Section title="Changes to These Terms of Service">
              <p className="mb-4">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.</p>
              <p className="mb-4">By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>
            </Section>

            <Section title="Contact Us">
              <p className="mb-2">If you have any questions about these Terms of Service, You can contact us:</p>
              <p>
                By email:{" "}
                <a href="mailto:info@rangeshipping.com" className="text-white/60 underline underline-offset-2 hover:text-white transition-colors">
                  info@rangeshipping.com
                </a>
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40 mb-5 border-t border-white/8 pt-8">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[13px] font-medium text-white/50 mb-3">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function DefItem({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <li>
      <span className="text-white/75 font-medium">{term}</span>
      {" means "}
      {children}
    </li>
  );
}
