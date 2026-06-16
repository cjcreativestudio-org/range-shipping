import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Range Shipping",
  description: "Cookie Policy for Range Shipping Ltd.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main className="pt-[88px] bg-[#001a36] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <p className="text-[10px] font-medium tracking-[0.35em] uppercase text-white/35 mb-4">
            Last updated: April 17, 2022
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight">
            Cookie Policy
          </h1>

          <div className="space-y-10 text-[14px] font-light leading-relaxed text-white/60">

            <p>
              This Cookie Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
            </p>
            <p>
              Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep Your personal data secure, see our{" "}
              <a href="/privacy-policy" className="text-white/60 underline underline-offset-2 hover:text-white transition-colors">
                Privacy Policy
              </a>.
            </p>
            <p>
              We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
            </p>

            <Section title="Interpretation and Definitions">
              <SubSection title="Interpretation">
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              </SubSection>
              <SubSection title="Definitions">
                <p className="mb-4">For the purposes of this Cookie Policy:</p>
                <ul className="space-y-3 list-none">
                  <DefItem term="Company">(referred to as either "the Company", "We", "Us" or "Our" in this Cookie Policy) refers to Range Shipping Ltd, Millbank Tower, 21-24 Millbank, 1st Floor, 1.5A, London, SW1P 4QP.</DefItem>
                  <DefItem term="Cookies">small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</DefItem>
                  <DefItem term="Website">Range Shipping Ltd, accessible from rangeshipping.com.</DefItem>
                  <DefItem term="You">the individual accessing or using the Website, or the company, or other legal entity on behalf of which such individual is accessing or using the Website, as applicable.</DefItem>
                </ul>
              </SubSection>
            </Section>

            <Section title="The Use of Cookies">
              <SubSection title="Type of Cookies We Use">
                <p className="mb-6">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.</p>
                <p className="mb-6">We use both Session and Persistent Cookies for the purposes set out below:</p>
                <div className="space-y-5">
                  <CookieItem type="Necessary / Essential Cookies" cookieType="Session Cookies" admin="Us">
                    These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                  </CookieItem>
                  <CookieItem type="Cookies Policy / Notice Acceptance Cookies" cookieType="Persistent Cookies" admin="Us">
                    These Cookies identify if users have accepted the use of cookies on the Website.
                  </CookieItem>
                  <CookieItem type="Functionality Cookies" cookieType="Persistent Cookies" admin="Us">
                    These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                  </CookieItem>
                  <CookieItem type="Analytics Cookies" cookieType="Persistent Cookies" admin="Third Parties">
                    These Cookies are used to collect information about traffic to the Website and how users use the Website. The information gathered does not identify any individual visitor. We use this information to help operate Our Service more efficiently, to gather broad demographic information and to monitor the level of activity on Our Service.
                  </CookieItem>
                </div>
              </SubSection>
            </Section>

            <Section title="Your Choices Regarding Cookies">
              <p className="mb-4">If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in Your browser and then delete the Cookies saved in Your browser associated with this website. You may use this option for preventing the use of Cookies at any time.</p>
              <p className="mb-4">If You do not accept Our Cookies, You may experience some inconvenience in Your use of the Website and some features may not function properly.</p>
              <p className="mb-4">If You'd like to delete Cookies or instruct Your web browser to delete or refuse Cookies, please visit the help pages of Your web browser:</p>
              <ul className="space-y-2 pl-4 list-disc list-outside marker:text-white/30 mb-4">
                <li>For the Chrome web browser, please visit this page from Google: <ExtLink href="https://support.google.com/accounts/answer/32050">support.google.com</ExtLink></li>
                <li>For the Internet Explorer web browser, please visit this page from Microsoft: <ExtLink href="https://support.microsoft.com/kb/278835">support.microsoft.com</ExtLink></li>
                <li>For the Firefox web browser, please visit this page from Mozilla: <ExtLink href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">support.mozilla.org</ExtLink></li>
                <li>For the Safari web browser, please visit this page from Apple: <ExtLink href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">support.apple.com</ExtLink></li>
              </ul>
              <p>For any other web browser, please visit your web browser's official web pages.</p>
            </Section>

            <Section title="More Information About Cookies">
              <p>
                You can learn more about cookies at the following third-party websites:{" "}
                <ExtLink href="https://www.allaboutcookies.org">allaboutcookies.org</ExtLink>.
              </p>
            </Section>

            <Section title="Changes to This Cookie Policy">
              <p className="mb-4">We may update Our Cookie Policy from time to time. We will notify You of any changes by posting the new Cookie Policy on this page.</p>
              <p>You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.</p>
            </Section>

            <Section title="Contact Us">
              <p className="mb-2">If you have any questions about this Cookie Policy, You can contact us:</p>
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

function CookieItem({ type, cookieType, admin, children }: { type: string; cookieType: string; admin: string; children: React.ReactNode }) {
  return (
    <div className="border-l border-white/10 pl-4">
      <p className="text-white/70 font-medium mb-1">{type}</p>
      <p className="text-[12px] text-white/35 mb-2">Type: {cookieType} · Administered by: {admin}</p>
      <p>{children}</p>
    </div>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/60 underline underline-offset-2 hover:text-white transition-colors">
      {children}
    </a>
  );
}
