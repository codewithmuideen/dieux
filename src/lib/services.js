import { Rocket, Calculator, Wallet, ReceiptText, ShieldCheck } from "lucide-react";
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
];

export const getServiceBySlug = (slug) => SERVICES.find((s) => s.slug === slug);
