import { Wallet, Cloud, ReceiptText, Calendar, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import TextReveal from "../components/ui/TextReveal";
import Reveal from "../components/ui/Reveal";
import StaggerGroup from "../components/ui/StaggerGroup";
import Button from "../components/ui/Button";
import { fadeUp } from "../lib/motion";

const ARTICLES = [
  {
    icon: Wallet,
    category: "Cash Flow",
    title: "5 cash flow habits every growing business needs",
    excerpt: "The businesses that stay healthy through growth aren't the ones with the most cash — they're the ones who can see it coming.",
    readTime: "4 min read",
  },
  {
    icon: Cloud,
    category: "Accounting",
    title: "When to move from spreadsheets to cloud accounting",
    excerpt: "There's a specific point where a spreadsheet stops saving you time and starts costing you money. Here's how to spot it.",
    readTime: "5 min read",
  },
  {
    icon: ReceiptText,
    category: "Tax",
    title: "A founder's guide to R&D tax relief",
    excerpt: "More businesses qualify than realise. A practical walkthrough of what counts, what doesn't, and how to claim it properly.",
    readTime: "6 min read",
  },
  {
    icon: Calendar,
    category: "Payroll",
    title: "Payroll compliance: the deadlines you can't miss",
    excerpt: "PAYE, pensions, auto-enrolment — a running calendar of the dates that actually matter, and what happens if you miss them.",
    readTime: "3 min read",
  },
  {
    icon: TrendingUp,
    category: "Advisory",
    title: "Debt vs. equity: choosing the right funding mix",
    excerpt: "Both have a cost. Neither is automatically wrong. A framework for deciding which one fits where your business is right now.",
    readTime: "5 min read",
  },
  {
    icon: ShieldCheck,
    category: "Compliance",
    title: "Building a business that survives you",
    excerpt: "Governance and succession planning aren't just for big companies — they're what makes a business sellable, fundable, and stable.",
    readTime: "4 min read",
  },
];

export default function Insights() {
  return (
    <>
      <InsightsHero />
      <ArticleGrid />
      <CtaStrip />
    </>
  );
}

function InsightsHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:px-10 md:pb-20 md:pt-44">
      <Reveal variants={fadeUp} className="mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-navy/50">
          Insights
        </span>
      </Reveal>
      <TextReveal
        as="h1"
        text="Straight talk on money, growth and compliance."
        className="text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl"
      />
      <Reveal variants={fadeUp} delay={0.4} className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-navy/60">
        Practical thinking from the Dieux team — no jargon, no fluff, just what
        we'd tell a client over a call.
      </Reveal>
    </section>
  );
}

function ArticleGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
      <StaggerGroup stagger={0.1} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map(({ icon: Icon, category, title, excerpt, readTime }) => (
          <Reveal
            key={title}
            variants={fadeUp}
            className="group flex flex-col gap-5 rounded-3xl border border-stone-dark/60 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-stone text-navy transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">{category}</span>
            </div>
            <h3 className="text-lg font-bold leading-snug text-navy">{title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-navy/60">{excerpt}</p>
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-navy/45">
              <Clock className="h-3.5 w-3.5" /> {readTime}
            </span>
          </Reveal>
        ))}
      </StaggerGroup>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-stone via-stone-light to-cream px-8 py-20 text-center md:px-16">
        <TextReveal
          as="h2"
          text="Want thinking like this applied to your numbers?"
          className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-navy md:text-5xl"
        />
        <Reveal variants={fadeUp} delay={0.25} className="mt-9 flex justify-center">
          <Button to="/contact" variant="primary">
            Book a free call
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
