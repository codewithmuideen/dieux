import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import { fadeUp } from "../lib/motion";
import { CONTACT } from "../lib/contact";

const SECTIONS = [
  {
    title: "Information we collect",
    body: "We collect information you give us directly — such as your name, email address and enquiry details when you contact us — along with information collected automatically through cookies and similar technologies, including pages visited, time on site, and general location and device data.",
  },
  {
    title: "Cookies & tracking",
    body: "We use third-party cookies that help us analyse how you use this website, remember your preferences, and provide content that's relevant to you. We also share information about your use of our site with select analytics and advertising partners. You can manage or withdraw your cookie preferences at any time from the cookie banner.",
  },
  {
    title: "How we use your data",
    body: "We use the information we collect to respond to enquiries, operate and improve this website, understand how visitors use our services, and — where you've agreed to it — share relevant updates about Dieux.",
  },
  {
    title: "Your rights",
    body: "You can ask us what data we hold about you, request a correction or deletion, or withdraw consent for marketing communications at any time by contacting us using the details below.",
  },
  {
    title: "Contact us",
    body: `If you have any questions about this policy or how your data is handled, email us at ${CONTACT.email}.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <Reveal variants={fadeUp} className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
          Legal
        </span>
      </Reveal>
      <TextReveal
        as="h1"
        text="Privacy Policy."
        className="text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl"
      />
      <Reveal variants={fadeUp} delay={0.2} className="mt-6 max-w-xl text-lg leading-relaxed text-navy/60">
        This policy explains what data Dieux collects, why, and the choices
        you have around it.
      </Reveal>

      <div className="mt-14 flex flex-col gap-10">
        {SECTIONS.map(({ title, body }) => (
          <Reveal key={title} variants={fadeUp} className="border-t border-stone-dark/60 pt-8">
            <h2 className="text-xl font-bold text-navy">{title}</h2>
            <p className="mt-3 leading-relaxed text-navy/65">{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
