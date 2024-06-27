import { Icons } from "@/components/icons";


type WorkItem = {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
  location: string;
  href?: string;  // Make href optional
  badges?: string[];  // Make badges optional
  type?: string[];  // Make type optional
};

export const DATA = {
  name: "Sanchay Thalnerkar",
  initials: "ST",
  url: "https://sanchaythalnerkar.com", // Replace with your actual website if you have one
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description: "Final year engineering student specializing in AI and Data Science with a robust foundation in Blockchain.",
  summary: "A passionate final engineering student specializing in AI and Data Science with a robust foundation in Blockchain. Aspiring to leverage expertise in Machine Learning and Deep Learning to solve complex problems and drive innovation in the tech industry.",
  avatarUrl: "/me3.png", // Replace with your actual avatar image path
  skills: [
    "Python", "Machine Learning", "Deep Learning", "Computer Vision",
    "Natural Language Processing", "Django", "React", "React Native",
    "PyTorch", "Git", "AWS", "Azure", "Docker", "Digital Ocean"
  ],
  contact: {
    email: "sanchaythalnerkar@gmail.com",
    tel: "+91 9136820958",
    social: {
      GitHub: {
        url: "https://github.com/Sanchay-T",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/sanchay-thalnerkar-0b8a47215",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/7anchay",
        icon: Icons.x,
      },
      Youtube: {
        url: "https://youtube.com/c/dillionverma",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "SAKEC",
      title: "Technical Secretary",
      logoUrl: "/aurum.png",
      start: "2022",
      end: "2023", // Or whenever your term ended
      description: "Led technical initiatives across the university, organized tech events, and fostered innovation among students.",
      location: "Mumbai",
      type: ["Leadership"]
    },
    {
      company: "SAKEC",
      title: "Entrepreneurship Cell Head",
      logoUrl: "/ecell.png",
      start: "2022",
      end: "2023", // Or whenever your term ended
      description: "Spearheaded entrepreneurship programs, mentored student startups, and organized workshops to promote business acumen.",
      location: "Mumbai",
      type: ["Leadership"]
    },
    {
      company: "Creative Finserve Pvt. Ltd.",
      href: "https://creativefinserve.com",
      badges: [],
      location: "Mumbai, India",
      title: "Data Science Intern",
      logoUrl: "/Creative Finserve.jpeg", // Add logo path
      start: "Dec 2022",
      end: "Present",
      description: "Utilizing deep learning techniques to extract insights from complex data sets and drive decision-making. Engaging in Data Analysis and Machine Learning, expanding skill set in additional areas.",
    },
    {
      company: "Intel Corporation",
      href: "https://www.intel.com",
      badges: [],
      location: "Remote",
      title: "Artificial Intelligence Intern",
      logoUrl: "/intel.jpeg", // Add logo path
      start: "Jun 2023",
      end: "Oct 2023",
      description: "Worked on various projects spanning Computer Vision to Natural Language Processing, contributing to cutting-edge AI technologies.",
    },
    {
      company: "IBM",
      href: "https://www.ibm.com",
      badges: [],
      location: "Remote",
      title: "Computer Vision and AI Intern",
      logoUrl: "/ibm.png", // Add logo path
      start: "Dec 2022",
      end: "Feb 2023",
      description: "Contributed to the development of an Advanced Driver Assistance System (ADAS). Developed ADAS-based systems for business process optimization and automation. Collaborated with cross-functional teams to implement AI solutions, gaining experience in Machine Learning and leadership.",
    },
    {
      company: "Acmegrade",
      href: "https://www.acmegrade.com",
      badges: [],
      location: "Remote",
      title: "Machine Learning Intern",
      logoUrl: "/acmegrade.png", // Add logo path
      start: "Apr 2022",
      end: "Jun 2022",
      description: "Supported the data science team with data cleaning, wrangling, modeling, and analysis. Developed proficiency in PyTorch and advanced Deep Learning techniques.",
    },
    {
      company: "DotMinds LLP",
      href: "https://dotminds.com",
      badges: [],
      location: "Remote",
      title: "React and React Native Development Intern",
      logoUrl: "/dotminds.jpeg", // Add logo path
      start: "Mar 2022",
      end: "May 2022",
      description: "Assisted development team with front-end web and mobile app development using React and React Native. Took on responsibilities in development and support, contributing to the successful completion of multiple projects.",
    },
  ] as WorkItem[],
  
  education: [
    {
      school: "Shah and Anchor Kutchhi Engineering College",
      href: "https://www.shahandanchor.com",
      degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
      website: "https://www.shahandanchor.com",
      logoUrl: "/Sakec logo (2).png", // Replace with actual logo path
      start: "2020",
      end: "2024 (Expected)",
      location: "Mumbai, India",
    },
    {
      school: "KBP",
      href: "https://wlu.ca",
      degree: "Junior College",
      website:'',
      logoUrl: "KBP.png",
      start: "2018",
      end: "2020",
      location: "Mumbai, India",
    },
    {
      school: "Lodha World School",
      href: "https://uwaterloo.ca",
      degree: "Middile School and High School",
      website: "https://www.lodhaworldschool.com",
      logoUrl: "/lwsp.jpeg",
      start: "2016",
      end: "2018",
      location: "Mumbai, India",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Unscript 2023 AI/ML",
      dates: "February 11th - 12th, 2023",
      location: "Mumbai",
      description:
        "We built a web app that analyzes document images for readability. It was challenging to implement the classification system, but seeing it accurately categorize handwritten and scanned docs was incredibly satisfying. Winning felt amazing and validated our hard work!",
      image: "/unscript.jpg",
      win: "Winner",
      links: [
        {
          title: "Project",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devfolio.co/projects/klearstack-734e",
        },
      ],
    },
    {
      title: "ChatGPT API & Whisper API Global Hackathon",
      dates: "March 24th - 26th, 2023",
      location: "Hybrid",
      description:
        "48 hours of pure adrenaline! We created a voice-controlled AI assistant that could transcribe, summarize, and respond to spoken queries. Integrating ChatGPT and Whisper APIs was tricky, but the end result was mind-blowing. Learned tons about API integration and speech processing.",
      image: "/chtandwhisper.png",
      links: [
        {
          title: "Event",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lablab.ai/event/chatgpt-api-and-whisper-api-global-hackathon",
        },
      ],
    },
    {
      title: "Anthropic AI Hackathon",
      dates: "May 26th - June 2nd, 2023",
      location: "Hybrid",
      description:
        "Spent a week diving deep into Anthropic's Claude API. We built an AI-powered writing coach that offers real-time feedback and suggestions. It was fascinating to see how the AI could understand context and nuance in writing. This experience really opened our eyes to the potential of large language models.",
      image: "/Anthropic.png",
      links: [
        {
          title: "Event",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lablab.ai/event/anthropic-ai-hackathon",
        },
      ],
    },
    {
      title: "Eleven Labs AI Hackathon",
      dates: "July 28th - 31st, 2023",
      location: "Hybrid",
      description:
        "We created a multilingual audiobook generator using Eleven Labs' voice AI. The challenge of maintaining emotional consistency across languages was tough but rewarding. Hearing our favorite books in different voices and languages was surreal. This project really showcased the power of AI in creative industries.",
      image: "/Eleven (2).png",
      links: [
        {
          title: "Event",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lablab.ai/event/eleven-labs-ai-hackathon",
        },
      ],
    },
    {
      title: "Autonomous Agents Hackathon",
      dates: "August 18th - 21st, 2023",
      location: "Hybrid",
      description:
        "We developed an AI-driven smart home system that learns and adapts to user behaviors. Balancing autonomy with user control was challenging but crucial. Seeing our agent make smart decisions about energy usage and comfort settings was incredibly cool. This hackathon really pushed our understanding of AI decision-making.",
      image: "/Agents (2).png",
      links: [
        {
          title: "Event",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lablab.ai/event/autonomous-agents-hackathon",
        },
      ],
    },
    {
      title: "Generative AI Hackathon",
      dates: "December 2nd - 4th, 2023",
      location: "Hybrid",
      description:
        "In just 48 hours, we built a generative AI tool that creates personalized workout plans. Integrating Cohere's AI with fitness principles was tough but exciting. Seeing the AI adapt plans based on user feedback was a game-changer. This hackathon showed us how AI can make a real difference in people's daily lives.",
      image: "/Generativeai.png",
      links: [
        {
          title: "Event",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lablab.ai/event/generative-ai-hackathon",
        },
      ],
    },
  ],
  publications: [
    {
      title: "Helix: Autonomous AI Agent",
      publisher: "International Journal for Research in Applied Science and Engineering Technology (IJRASET)",
      url: "https://www.ijraset.com/best-journal/helix-autonomous-ai-agent",
    },
    {
      title: "Enhancing Urban Traffic Flow: A Simulation-Based Approach Using Dynamic Signal Timing",
      publisher: "Journal of Emerging Technologies and Innovative Research (JETIR)",
      url: "https://www.jetir.org/view?paper=JETIR2404988",
    },
  ],
} as const;
