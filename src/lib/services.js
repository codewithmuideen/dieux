import { Rocket, Calculator, Wallet, ReceiptText, ShieldCheck, Briefcase, Lightbulb, PieChart, PiggyBank, Umbrella, TrendingDown } from "lucide-react";
import { SERVICE_IMAGES } from "./images";

export const SERVICES = [
  {
    slug: "business-startups",
    number: "01",
    icon: Rocket,
    title: "Business Start-ups",
    short: "From idea to incorporation, structured to grow.",
    description:
      "We guide founders through every decision that shapes a company's first chapter — structure, registration, funding readiness and the financial systems that let you scale without scrambling later.",
    features: [
      "Company formation & structuring",
      "Founder & shareholder agreements",
      "Financial forecasting & funding readiness",
      "Systems set-up: bookkeeping, payroll, invoicing",
    ],
    image: SERVICE_IMAGES["business-startups"],
  },
  {
    slug: "accounting",
    number: "02",
    icon: Calculator,
    title: "Accounting",
    short: "Clean books. Clear numbers. Every month.",
    description:
      "Accurate, timely accounting is the foundation everything else stands on. We handle the detail so your numbers are always ready — for decisions, for lenders, for year end.",
    features: [
      "Monthly management accounts",
      "Bookkeeping & reconciliation",
      "Year-end statutory accounts",
      "Cloud accounting migration & training",
    ],
    image: SERVICE_IMAGES["accounting"],
  },
  {
    slug: "payroll",
    number: "03",
    icon: Wallet,
    title: "Payroll",
    short: "Your people paid right, right on time.",
    description:
      "Payroll errors erode trust fast. We run precise, compliant payroll for teams of any size, so every payslip lands correctly and every deadline is met without a second thought.",
    features: [
      "Weekly & monthly payroll processing",
      "PAYE, pensions & auto-enrolment",
      "Payslips, P60s & P45s",
      "HMRC submissions handled end-to-end",
    ],
    image: SERVICE_IMAGES["payroll"],
  },
  {
    slug: "tax",
    number: "04",
    icon: ReceiptText,
    title: "Tax",
    short: "Planned ahead, never left to guesswork.",
    description:
      "Tax shouldn't be a once-a-year scramble. We build ongoing strategies that keep you compliant, minimise liability, and remove the anxiety of deadlines.",
    features: [
      "Corporation & personal tax returns",
      "VAT preparation & filing",
      "Tax planning & efficiency strategy",
      "HMRC enquiries & representation",
    ],
    image: SERVICE_IMAGES["tax"],
  },
  {
    slug: "compliance",
    number: "05",
    icon: ShieldCheck,
    title: "Compliance",
    short: "Every regulation, quietly handled.",
    description:
      "Regulatory requirements shift constantly. We keep your business ahead of them — filings, statutory duties and governance, managed proactively so nothing is ever left to chance.",
    features: [
      "Companies House filings",
      "Statutory registers & governance",
      "Anti-money laundering compliance",
      "Ongoing regulatory monitoring",
    ],
    image: SERVICE_IMAGES["compliance"],
  },
  {
    slug: "business-management",
    number: "06",
    icon: Briefcase,
    title: "Business Management",
    short: "Structure and oversight that keeps operations running smoothly.",
    description:
      "From governance to day-to-day operational decisions, we help you build the management structure that lets a growing business scale without losing control of the details.",
    features: [
      "Operational structure & governance",
      "KPI tracking & reporting cadence",
      "Management information systems",
      "Board & stakeholder reporting",
    ],
  },
  {
    slug: "advisory",
    number: "07",
    icon: Lightbulb,
    title: "Advisory",
    short: "Strategic guidance for the decisions that matter most.",
    description:
      "Beyond the numbers, we act as a sounding board for the calls that shape where your business goes next — funding, structure, growth, exit.",
    features: [
      "Strategic planning sessions",
      "Funding & investment readiness",
      "Growth & scaling strategy",
      "Exit & succession planning",
    ],
  },
  {
    slug: "portfolio-management",
    number: "08",
    icon: PieChart,
    title: "Portfolio & Asset Management",
    short: "Your business assets, actively managed and optimised.",
    description:
      "We help growing businesses track, protect and grow the assets on their balance sheet — from cash reserves to equipment to investments.",
    features: [
      "Asset register & valuation tracking",
      "Investment strategy alignment",
      "Depreciation & capital planning",
      "Portfolio performance reporting",
    ],
  },
  {
    slug: "cash-flow-planning",
    number: "09",
    icon: PiggyBank,
    title: "Cash Flow & Expense Planning",
    short: "Know what's coming in, what's going out, and when.",
    description:
      "Cash flow surprises sink otherwise-healthy businesses. We build rolling forecasts and expense controls so you always know where you stand.",
    features: [
      "Rolling cash flow forecasts",
      "Expense policy & controls",
      "Working capital optimisation",
      "Scenario & runway planning",
    ],
  },
  {
    slug: "insurance-risk",
    number: "10",
    icon: Umbrella,
    title: "Insurance & Risk Management",
    short: "Protection built around the risks your business actually faces.",
    description:
      "We assess where your business is exposed and help you put the right cover and controls in place — so one bad event doesn't become an existential one.",
    features: [
      "Risk assessment & mapping",
      "Business insurance review",
      "Key person & liability cover",
      "Business continuity planning",
    ],
  },
  {
    slug: "debt-management",
    number: "11",
    icon: TrendingDown,
    title: "Debt Reduction & Management",
    short: "A clear, structured path to paying down what you owe.",
    description:
      "Whether it's a funding round gone the wrong direction or historic debt weighing on decisions, we build a realistic plan to bring it under control.",
    features: [
      "Debt structure review",
      "Repayment & consolidation planning",
      "Lender & creditor negotiation support",
      "Credit position monitoring",
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
