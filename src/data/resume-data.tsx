import {
  LivUpLogo,
  AndelaLogo,
  CreditasLogo,
  PostgrainLogo,
  BuyttleLogo, 
  DuitLogo,
  TempestLogo,
  IpSolutionsLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Abel Neto",
  initials: "AN",
  location: "São Paulo - SP, Brazil",
  locationLink: "https://google.com/maps/place/S%C3%A3o%20Paulo",
  about:
    "Senior Software Engineering Manager focused on digital product development in startups",
  summary:
    "",
  avatarUrl: "/profile.jpg",
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
      logo: AndelaLogo,
      roles: [
        {
          title: "Senior Software Engineering Manager",
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
        }
      ],
    },
    {
      company: "Liv Up",
      link: "https://livup.com.br",
      badges: ["Remote"],
      logo: LivUpLogo,
      roles: [
        {
          title: "Senior Software Engineering Manager",
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
        }
      ],
    },
    {
      company: "Creditas",
      link: "https://creditas.com/",
      badges: [],
      logo: CreditasLogo,
      roles: [
        {
          title: "Engineering Tribe Lead",
          start: "2020",
          end: "2021",
          description: {
            paragraphs:[
              "Creditas is a financial solutions platform that helps people achieve their goals by providing access to credit in a simple and integrated way.",
              "As an engineering tribe lead for Creditas’ Auto Equity product, I was responsible for coordinating the work of six squads, managing the leaders of those squads, working on the strategic and tactical plans for the tribe and coordinating the execution.",
              "Some of my responsibilities were:",
            ],
          },
          bulletList: {
            items: [
              "Direct management of engineering leads;",
              "Defining and tracking objectives for the tribe and squads in collaboration with the lead product manager and squad members;",
              "Defining and tracking the execution of the tribe's technical strategy in collaboration with the principal engineer and specialist engineers;",
              "Defining the tribe's organizational structure (division into squads);",
              "Coordinating the tribe's performance review process (engineering);",
              "Building and maintaining an environment of psychological safety and inclusion in the tribe;",
              "Structuring the tribe's rituals;",
              "Organizing processes and rituals for the tribe's leadership team (product, tech and design);",
              "Guiding process changes and definitions in the squads;",
              "Building the roadmap in collaboration with the lead PM, engineering leads and PMs;",
              "Alignment with business stakeholders;",
              "Alignment with other tribes and products;",
              "Keep communication flowing between the strategic and operational layers, in both directions;",
              "Skip-level 1:1's with software engineers;",
              "Hiring management for the tribe.",
            ]
          },
        },
        {
          title: "Software Engineering Lead",
          start: "2019",
          end: "2020",
          description: {
            paragraphs:[
              "As an Engineering Lead, I was responsible for coordinating two squads, managing developers directly, improving processes, tracking metrics and ensuring continuous delivery.",
              "Some of my responsibilities were:"
            ],
          },
          bulletList: {
            items: [
              "Direct management of the developers (1: 1’s, IDP, performance review);",
              "Defining and tracking squad objectives, in collaboration with the product manager;",
              "Defining and improving squad processes, in collaboration with the squad members;",
              "Planning large initiatives into small value deliverables, in collaboration with the team;",
              "Roadmap building, in collaboration with the product manager;",
              "Alignment with business stakeholders;",
              "Alignment with other squads.",
            ]
          },
        },
        {
          title: "Agile Coach",
          start: "2018",
          end: "2019",
          description: {
            paragraphs:[
              "As an Agile Coach, I was responsible for 3 squads. My role was to promote continuous improvement of those teams, influencing them to adhere to the principles and values of the Manifesto for Agile Software Development.",
              "Some of my responsibilities were:"
            ],
          },
          bulletList: {
            items: [
              "Doing the value stream mapping of the squads;", 
              "Proposing process improvements;", 
              "Defining, in collaboration with the squads, their processes, tools and rituals;", 
              "Agile development coaching with engineering leads and product managers;", 
              "Agile development coaching with developers;", 
              "Tracking team metrics;", 
              "Facilitation (when necessary) of team rituals;", 
              "Facilitation of Story Mappings and guidance on breaking large projects into small deliverables.", 
            ]
          },
        },
      ],
    },
    {
      company: "Postgrain",
      link: "https://postgrain.com",
      badges: [],
      logo: PostgrainLogo,
      roles: [
        {
          title: "Chief Technology Officer",
          start: "2017",
          end: "2018",
          description: {
            paragraphs:[
              "Postgrain is a social media profile management tool for freelancers and advertising agencies that allows the administration of multiple accounts in one place, including replying to messages, publications calendar/scheduling, among other features.",
              "As CTO, I was responsible for the technology team (8 people), doing everything from developer management to strategic planning in collaboration with other company executives.",
              "Some of my responsibilities were:",
            ],
          },
          bulletList: {
            items: [
              "Definition of the company's vision, mission and values, in collaboration with the leadership team;",
              "Definition of the company's short, medium and long term goals, in collaboration with the leadership team;",
              "Definition and promotion of technology culture in the company;",
              "Definition of the technology strategy, in collaboration with the developers;",
              "Monitoring and maintaining the infrastructure of development and production environments, in collaboration with the developers;",
              "Hiring management;",
              "Building a career ladder for developers;",
              "Performance reviews of developers;",
              "Involvement in architectural discussions and review of some technical solutions.",
            ]
          },
        },
        {
          title: "Software Development Lead",
          start: "2016",
          end: "2017",
          description: {
            paragraphs:[
              "As a software development lead, I was responsible for leading developers and ensuring the team’s continuous delivery of value.",
              "Some of my responsibilities were:",
            ],
          },
          bulletList: {
            items: [
              "1:1's with developers;",
              "Performance reviews;",
              "Definition of the team's processes and rituals, in collaboration with the developers;",
              "Software development in Node.js and code-review of some features;",
              "Mentoring of interns and developers;",
              "Definition and monitoring of team and product KPIs.",
            ]
          },
        },
        {
          title: "Node.js Developer",
          start: "2016",
          end: "2016",
          description: {
            paragraphs:[
              "As a Node.js developer, I was responsible for implementing and maintaining a background job management system, responsible for executing the actions/interactions scheduled by the user through the web interface, by using the social media platforms APIs.",
              "I worked directly with:",
            ],
          },
          bulletList: {
            items: [
              "Node.js;",
              "RabbitMQ;",
              "Docker;",
              "PostgreSQL.",
            ]
          },
        }
      ],
    },
    {
      company: "Buyttle",
      link: "",
      badges: [],
      logo: BuyttleLogo,
      roles: [
        {
          title: "Game Developer",
          start: "2015",
          end: "2016",
          description: {
            paragraphs:[
              "Buyttle is a startup that develops a real-time multiplayer browser game (www.buyttle.com) in which people battle for prizes and discounts.",
              "As a game developer, I was responsible for the implementation and maintenance of the game itself (that is only a part of the whole thing), as well as the game architecture design (under the supervision/orientation of the company's CTO).",
              "I have worked directly with:"
            ],
          },
          bulletList: {
            items: [
              "Javascript/Node.js (client and server sides of the game);",
              "WebSockets;",
              "HTML5 Canvas;",
              "Isogenic Game Engine;",
              "Docker;",
              "Clean Code",
              "Test-driven Development;",
              "Entity Component System Architecture.",
            ]
          },
        }
      ],
    },
    {
      company: "duit",
      link: "https://duit.works",
      badges: [],
      logo: DuitLogo,
      roles: [
        {
          title: "Software Developer",
          start: "2014",
          end: "2015",
          description: {
            paragraphs:[
              "Duit is a startup in which I worked on two projects: CoteAqui, a marketplace for construction companies and suppliers, and Platinum, an ERP for orthopedic prosthesis distributors.",
              "For these projects, I've worked with:",
            ],
          },
          bulletList: {
            items: [
              "JavaScript/Node.js;",
              "HTML/CSS;",
              "jQuery;",
              "Bootstrap;",
              "Java/Play Framework."
            ]
          },
        }
      ],
    },
    {
      company: "Tempest Security Intelligence",
      link: "https://tempest.com.br/",
      badges: [],
      logo: TempestLogo,
      roles: [
        {
          title: "Information Security Analyst",
          start: "2011",
          end: "2014",
          description: {
            paragraphs:[
              "At Tempest, I worked in a Security Operations Center, where I was responsible for monitoring event logs from many network devices from our customers' networks. My role was to detect threats and attack patterns, as well as anomalous behaviors that could put the company at risk."
            ],
          },
          bulletList: {
            items: []
          },
        }
      ],
    },
    {
      company: "IP Solutions",
      link: "https://ipsolutions.net.br",
      badges: [],
      logo: IpSolutionsLogo,
      roles: [
        {
          title: "Systems Administrator",
          start: "2008",
          end: "2011",
          description: {
            paragraphs:[
              "As a System Administrator, I was responsible for the configuration and implantation of services and tools like Microsoft Active Directory, Squid, SNMPc Network Manager, Kiwi Syslog Daemon."
            ],
          },
          bulletList: {
            items: []
          },
        }
      ],
    },
  ],
  skills: [
    "Engineering Management",
    "People Management",
    "Organizational Design",
    "Team Topologies",
    "Agile Software Development",
    "DevOps",
    "Technical Leadership",
    "Software Architecture",
    "Domain Driven Design",
    "Backend Software Development",
    "Web Application Development",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
} as const;
