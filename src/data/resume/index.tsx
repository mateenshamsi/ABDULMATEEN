import { Icons } from "@/components/Icons";
import { Github, HomeIcon } from "lucide-react";

export const DATA = {
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "AWS",
    "C++",
    "Shopify",
    "Framer",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "matinshamsi16@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/mateenshamsi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/abdulmateen-shamsi",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/matin_shamsi",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "devx",
      href: "https://devxcommerce.com/",
      badges: ["SDE-1"],
      location: "Surat, Gujarat India",
      title: "Software Development Engineer",
      companyLogo: "/images/DevxLogo.png",
      start: "August 2024",
      end: "February 2025",
      description:
        "Built scalable, production-ready systems for both D2C brands and enterprise clients. My work focused on full-stack development with a strong emphasis on backend & cloud technologies. Designed and implemented cloud-native architectures using AWS services such as SAM, Lambda, API Gateway, and DynamoDB. I also contributed to AI-integrated features, internal tooling, and continuously improved development practices around testing, deployment automation, and observability.",
    },
   
  ],
  // certifications: [
  //   {
  //     title: "AWS Certified Cloud Practitioner",
  //     issuer: "Amazon Web Services",
  //     href: "https://www.credly.com/badges/c2bd98f0-a8ac-4359-b309-f0fe8cb28bc1/public_url",
  //     logoUrl: "/certifications/cloud-practitioner.png",
  //     date: "March 2025",
  //     credentialId: "AWS-CLF-C02",
  //     description:
  //       "Validates foundational understanding of AWS Cloud concepts, services, and security. Able to identify essential AWS services necessary to set up AWS-focused projects.",
  //   },
  //   {
  //     title: "AWS Certified AI Practitioner",
  //     issuer: "Amazon Web Services",
  //     href: "https://www.credly.com/badges/85fa2592-f065-437e-9c4d-3b1d83391947/public_url",
  //     logoUrl: "/certifications/ai-practitioner.png",
  //     date: "August 2025",
  //     credentialId: "AWS-AIF-C01",
  //     description:
  //       "Determine the correct types of AI/ML technologies to apply to specific use cases and know how to use AI, ML, and generative AI technologies responsibly.",
  //   },
  // ],
  projects: [
    //res.cloudinary.com/ratishjaininc/video/upload/v1757696514/appgen-1755346121329_plroew.mp4",
    {
      title: "NeuraHire",
      href: "https://neurahire.vercel.app/",
      description:
        "AI-powered interview assistant that conducts automated interviews and provides real-time feedback, helping recruiters evaluate candidates efficiently and candidates understand their performance.",
        technologies: [
          { name: "Next.js", icon: Icons.nextjs },
          { name: "React", icon: Icons.react },
          { name: "Tailwind CSS", icon: Icons.tailwindcss },
          { name: "Supabase", icon: Icons.supabase },
          { name: "PostgreSQL", icon: Icons.postgresql },
          { name: "OpenAI", icon: Icons.openai },
          { name: "VAPI", icon: Icons.vapi },
          { name: "OAuth", icon: Icons.oauth },
        ],
        
      links: [
        {
          type: "Website",
          href: "https://neurahire.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mateenshamsi/NeuraHire",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dywep7wkz/image/upload/v1768683307/Screenshot_2026-01-18_022323_ifu0fp.png",
      video: null,
    }
,    
    {
      title: "LeetCode Helper",
      href: "https://github.com/ratishjain12/lc-helper",
      description:
        "lc-helper is a browser extension designed to streamline and enhance the LeetCode problem-solving experience. It adds useful helper features and UI improvements to make practicing coding puzzles more efficient and user-friendly.",
      technologies: [{ name: "Javascript", icon: null }, { name: "Gemini", icon: null }],
      links: [
        // {
        //   type: "Website",
        //   href: "https://www.appgen-cli.com/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/lc-helper",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1757696349/appgen-ss_v4fldm.png",
      video:
        "https://res.cloudinary.com/ratishjaininc/video/upload/v1757697142/leetcode-helper-1755431637398_orc79n.mp4",
    },
    {
      title: "Notely.ai",
      href: "https://notely-ai.vercel.app/",
      description:
        "Transform your PDFs into interactive knowledge. Ask questions, get instant answers, and unlock insights with Notely.ai.",
      technologies: [
        { name: "Next.js", icon: Icons.nextjs },
        { name: "Typescript", icon: Icons.typescript },
        { name: "Convex DB", icon: null },
        { name: "Langchain", icon: null },
        { name: "Clerk", icon: null },
        { name: "TailwindCSS", icon: Icons.tailwindcss },
        { name: "Stripe", icon: null },
        { name: "Shadcn UI", icon: null },
      ],
      links: [
        {
          type: "Website",
          href: "https://www.notely-ai.ratishfolio.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/Notely.ai",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/samples/people/notely.ai_gnat8v.png",
      video: null,
    },
    {
      title: "Coldmail.io",
      href: "https://coldmail-io.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      description:
        "Generate highly personalized email templates for your cold outreach campaigns. Save, copy, and send your emails directly from our app, with options to edit and delete—all in one place.",
      technologies: [
        { name: "Next.js", icon: Icons.nextjs },
        { name: "Typescript", icon: Icons.typescript },
        { name: "Mongo DB", icon: null },
        { name: "Better Auth", icon: null },
        { name: "TailwindCSS", icon: Icons.tailwindcss },
        { name: "Razorpay Payment", icon: null },
        { name: "Shadcn UI", icon: null },
        { name: "Groq AI", icon: null },
      ],
      links: [
        {
          type: "Website",
          href: "https://coldmail-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ratishjain12/coldmail.io",
          icon: <Github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/ratishjaininc/image/upload/v1732793719/samples/people/coldmail_ivzkkf.png",
      video: null,
    },
  ],
} as const;