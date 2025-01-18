import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Code2Icon } from "lucide-react";

export const DATA = {
  name: "Lakshminarayana",
  initials: "BG",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "ECE student skilled in web development and IIoT || Passionate about leveraging technology for innovation and impact.",
  summary:
    "Student at University BDT College of Engineering pusuing Engineering in Electronics and Communication, passionate about leveraging cutting-edge technologies to drive innovation. With Web Development and Industrial IoT expertise, I am expanding my knowledge in VLSI design and Cloud Computing. My goal is to contribute to impactful projects that bridge technology and real-world applications while continuously growing in the tech domain.",
  avatarUrl: "https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Tailwind",
    "Nest.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "MySQL",
    "MongoDB",
    "Docker",
    "IIoT",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: Code2Icon, label: "Projects" },
  ],
  contact: {
    email: "bgmanu2426@gmail.com",
    tel: "+919108670517",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bgmanu2426",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lnbg7795",
        icon: Icons.linkedin,
        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discordapp.com/users/624290824762425353",
        icon: Icons.discord,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bgmanu2426@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Carrer Development Break",
      href: "#",
      badges: [],
      location: "",
      title: "For Higher Education",
      logoUrl: "",
      start: "September 2023",
      end: "present",
      description:
        "Started my career development break to focus on my studies and to learn new technologies. I am currently working only on a few projects and also learning new technologies.",
    },
    {
      company: "Freelancing",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Freelance Developer",
      logoUrl: "",
      start: "April 2022",
      end: "September 2023",
      description:
        "A freelance developer who has worked with clients from all over the world. I have worked on a variety of projects ranging from web development to embedded systems and also have experience in IoT.",
    },
  ],
  education: [
    {
      school: "University BDT College of Engineering",
      href: "https://www.ubdtce.org/",
      degree: "BE in Electronics and Communication Engineering",
      logoUrl: "https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/ubdtce.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Govt. Polytechnic College",
      href: "https://gpt.karnataka.gov.in/gptharihara",
      degree: "Diploma in Electronics and Communication Engineering",
      logoUrl: "https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/gpt.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "FireChatz",
      href: "https://github.com/bgmanu2426/FireChatz",
      dates: "",
      active: true,
      description:
        "A React based application chatting application using the firebase as an BaaS and socket-io for real-time communication. It is a simple chat application where users can create rooms and chat with each other. It also has a feature to send images and emojis.",
      technologies: [
        "Next.js",
        "Firesbase",
        "TailwindCSS",
        "Socket-io"
      ],
      links: [
        {
          type: "Website",
          href: "https://firechatzz.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/bgmanu2426/FireChatz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "AskFlow",
      href: "https://magicui.design",
      dates: "",
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
      video: "",
    },
    {
      title: "RFID based Smart Attendance System",
      href: "https://ams-rfid.vercel.app/",
      dates: "",
      active: true,
      description:
        "An RFID based smart attendance system that uses RFID cards to mark attendance. It also has a feature to generate reports and send them to the respective emails.",
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
          href: "https://ams-rfid.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://pub-d600b57d450e41c7b0bd406a961f2e89.r2.dev/rfid-app.png",
      video: "",
    },
    {
      title: "E-LMS",
      href: "https://automatic.chat",
      dates: "",
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
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
  ],
} as const;
