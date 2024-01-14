import {
  LivUpLogo,
  AndelaLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abel Neto",
  initials: "AN",
  location: "São Paulo - SP, Brazil",
  locationLink: "https://google.com/maps/place/S%C3%A3o%20Paulo",
  about:
    "Senior Engineering Manager focused on digital product development in VC-backed startups",
  summary:
    "",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQGo24nJfkqTzA/profile-displayphoto-shrink_800_800/0/1683298564628?e=1710979200&v=beta&t=ExMP0S-0PhvWD9k9TbARxD5ceIw5IvaSJ7xQAYSvTA0",
  personalWebsiteUrl: "https://abel.sh",
  contact: {
    email: "neto@abel.sh",
    tel: "+55 81 99423-0287",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/netoabel",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abel-neto/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/_netoabel",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Federal de Educação, Ciência e Tecnologia",
      degree: "Bachelor of Technology (B.Tech.), Systems Analysis and Development",
      start: "2008",
      end: "2013",
    },
  ],
  work: [
    {
      company: "Andela",
      link: "https://andela.com",
      badges: ["Remote"],
      title: "Senior Engineering Manager",
      logo: AndelaLogo,
      start: "2023",
      end: "Present",
      description: {
        paragraphs:[
          ""
        ],
      },
      bulletList: {
        items: []
      },
    },
    {
      company: "Liv Up",
      link: "https://livup.com.br",
      badges: ["Remote"],
      title: "Senior Software Engineering Manager",
      logo: LivUpLogo,
      start: "2021",
      end: "2022",
      description: {
        paragraphs:[
          "Liv Up is a food company that delivers convenient, healthy and tasty food. Its main product is a line of frozen meals made with natural ingredients only, which are not ultra-processed and undergo a special deep-freezing process.",
          "As a senior engineering manager at Liv Up, I was responsible for the engineering teams that took care of the development and maintenance of all the operation's systems, from the relationship with raw material suppliers, through storage, processing of ingredients, production of recipes, to the stock of finished products and their distribution and delivery to the end customer.",
          "Some of my responsibilities were:",
        ],
      },
      bulletList: {
        items: [
          "Direct management of engineering managers;",
          "Defining and tracking OKR's for the tribe in collaboration with the group product manager and squad members;",
          "Conducting event storming sessions alongside with the tech leads to discover and define DDD based sub-domains inside the tribe;",
          "Defining the organizational structure of the tribe based on business sub-domains so it remains stable in the long run;",
          "Coordinating the tribe's performance review process for the engineering teams;",
          "Structuring and coordinating company-wide tech strategy meetings with tech leads and principal engineer;",
          "Structuring and coordinating company-wide software engineering all-hands meeting, for the purposes of team building, knowledge sharing and strategic follow-ups;",
          "Mapping values, principles and practices shared by most software engineering teams; ",
          "Writing documentation on software engineering leadership roles, engineering culture, tech strategy and rituals;",
          "Building and maintaining an environment of psychological safety and inclusion in the tribe;",
          "Structuring the tribe's rituals;",
          "Organizing processes and rituals for the tribe's engineering leadership team;",
          "Building the roadmap, in collaboration with the GPM, engineering leads and PMs;",
          "Skip-level 1:1's with software engineers;",
          "Hiring management for the tribe.",
        ]
      },
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: AndelaLogo,
      start: "2012",
      end: "2015",
      description: {
        paragraphs:[
          ""
        ],
      },
      bulletList: {
        items: []
      },
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: AndelaLogo,
      start: "2010",
      end: "2012",
      description: {
        paragraphs:[
          ""
        ],
      },
      bulletList: {
        items: []
      },
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
} as const;
