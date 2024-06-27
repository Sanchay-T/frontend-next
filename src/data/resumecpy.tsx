import { Icons } from "@/components/icons";


export const DATA = {
  name: "Sanchay S. Thalnerkar",
  initials: "ST",
  url: "https://sanchaythalnerkar.com", // Replace with your actual website if you have one
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/Mumbai",
  description: "Final year engineering student specializing in AI and Data Science with a robust foundation in Blockchain. Aspiring to leverage expertise in Machine Learning and Deep Learning to solve complex problems and drive innovation in the tech industry.",
  summary: "A passionate final engineering student specializing in AI and Data Science with a robust foundation in Blockchain. Aspiring to leverage expertise in Machine Learning and Deep Learning to solve complex problems and drive innovation in the tech industry.",
  avatarUrl: "/me.png", // Replace with your actual avatar image path
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
        url: "https://www.linkedin.com/in/sanchay-thalnerkar/", // Replace with your actual LinkedIn URL
        icon: Icons.linkedin,
      },
      X: {
        url: "https://twitter.com/YourTwitterHandle", // Replace with your actual Twitter URL if you have one
        icon: Icons.x,
      },
    },
  },
  work: [
    {
      company: "Creative Finserve Pvt. Ltd.",
      href: "https://creativefinserve.com", // Replace with actual company website
      badges: [],
      location: "Mumbai, India",
      title: "Data Science Intern",
      logoUrl: "/creative-finserve.png", // Replace with actual logo path
      start: "December 2022",
      end: "Present",
      description: "Utilized deep learning techniques to extract insights from complex data sets and drive decision-making. Engaged in Data Analysis and Machine Learning, expanding skill set in additional areas.",
    },
    {
      company: "Intel Corporation",
      href: "https://www.intel.com",
      badges: [],
      location: "Remote",
      title: "Artificial Intelligence Intern",
      logoUrl: "/intel.png", // Replace with actual logo path
      start: "June 2023",
      end: "October 2023",
      description: "Worked on a variety of projects spanning Computer Vision to Natural Language Processing.",
    },
    {
      company: "IBM",
      href: "https://www.ibm.com",
      badges: [],
      location: "Remote",
      title: "Computer Vision and AI Intern",
      logoUrl: "/ibm.png", // Replace with actual logo path
      start: "December 2022",
      end: "February 2023",
      description: "Contributed to the development of an Advanced Driver Assistance System (ADAS). Gained experience in Machine Learning, Leadership, and additional skills.",
    },
    {
      company: "Acmegrade",
      href: "https://www.acmegrade.com", // Replace with actual company website
      badges: [],
      location: "Remote",
      title: "Machine Learning Intern",
      logoUrl: "/acmegrade.png", // Replace with actual logo path
      start: "April 2022",
      end: "June 2022",
      description: "Supported the data science team with data cleaning, wrangling, modeling, and analysis. Proficient in PyTorch, Deep Learning, and additional skills.",
    },
    {
      company: "DotMinds LLP",
      href: "https://dotminds.com", // Replace with actual company website
      badges: [],
      location: "Remote",
      title: "React and React Native Development Intern",
      logoUrl: "/dotminds.png", // Replace with actual logo path
      start: "March 2022",
      end: "May 2022",
      description: "Assisted development team with front-end web and app development in React and React Native. Completed the internship with responsibilities in development and support.",
    },
  ],
  education: [
    {
      school: "Shah and Anchor Kutchhi Engineering College",
      href: "https://www.shahandanchor.com",
      degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
      logoUrl: "/sakec.png", // Replace with actual logo path
      start: "2020",
      end: "2024 (Expected)",
    },
  ],
  projects: [
    {
      title: "AutoDubbing",
      href: "https://github.com/YourGitHubUsername/AutoDubbing", // Replace with actual project link
      dates: "January 2023 - December 2023",
      description: "Developed a tool for automatic synchronization of dubbed audio with video content, using signal processing and machine learning techniques.",
      technologies: ["Python", "Machine Learning", "Signal Processing"],
      image: "", // Replace with actual image path
      video: "",
      links: [],
    },
    {
      title: "BrowsingAgent",
      href: "https://github.com/YourGitHubUsername/BrowsingAgent", // Replace with actual project link
      dates: "February 2023 - April 2023",
      description: "Created an automated browsing agent using LLM models and selenium to automatically navigate the system.",
      technologies: ["Python", "LLM", "Selenium"],
      image: "", // Replace with actual image path
      video: "",
      links: [],
    },
    {
      title: "ECHO - Customer Service Top Agents",
      href: "https://github.com/YourGitHubUsername/ECHO", // Replace with actual project link
      dates: "December 2023 - February 2024",
      description: "Designed a recognition system to identify top-performing customer service agents based on performance metrics.",
      technologies: ["Machine Learning", "Data Analysis"],
      image: "", // Replace with actual image path
      video: "",
      links: [],
    },
  ],
  hackathons: [], // You can add hackathon experiences here if you have any
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