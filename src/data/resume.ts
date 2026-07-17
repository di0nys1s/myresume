export const site = {
  name: "Burak Seyhan",
  firstName: "Burak",
  lastName: "Seyhan",
  title: "Senior Software Engineer",
  location: "Amsterdam, Netherlands",
  email: "seyhanburak9@gmail.com",
  phone: "+31 6 27 47 6868",
  phoneHref: "tel:+31627476868",
  url: "https://www.seyhanburak.com",
} as const;

export const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/burakjseyhan/",
  },
  {
    label: "GitHub",
    href: "https://github.com/di0nys1s",
  },
] as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "interests", label: "Interests" },
  { id: "awards", label: "Awards" },
] as const;

export const about = {
  lead: "Experienced Senior Software Engineer with strong frontend depth and solid full-stack range — designing, building and shipping complex product at scale.",
  bio: "I specialise in modern web platforms: architecture, delivery and quality across React, TypeScript and Node. I thrive in fast-paced product teams, turn ambiguous problems into clear technical direction, and communicate effectively with engineers, designers and stakeholders. My background spans streaming media, education products, and earlier work in quality engineering and business analysis — which gives me a practical end-to-end view of how software gets built and run.",
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Vue",
      "React Native",
      "HTML5",
      "CSS / Sass",
      "Storybook",
      "GraphQL",
      "REST APIs",
      "Web performance",
      "Core Web Vitals",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST & GraphQL services",
      "Kafka",
      "SQL / PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Authentication & sessions",
      "API design",
    ],
  },
  {
    title: "DevOps & tools",
    items: [
      "Git / GitHub",
      "CI/CD pipelines",
      "Docker",
      "AWS",
      "Azure",
      "Netlify",
      "npm / Yarn",
      "Grafana",
      "Loki",
      "Tempo",
      "Snowplow analytics",
    ],
  },
  {
    title: "Quality & practices",
    items: [
      "Jest",
      "React Testing Library",
      "Playwright / Puppeteer",
      "Selenium",
      "Accessibility (a11y)",
      "Performance & SEO",
      "Observability & debugging",
      "Agile / Scrum",
      "Code review & mentoring",
    ],
  },
];

export const keySkills = [
  "Senior-level frontend architecture with React, TypeScript and Next.js in production systems",
  "Full-stack delivery with Node.js services, REST/GraphQL APIs, Kafka and relational/NoSQL data stores",
  "Web performance optimisation with a focus on Core Web Vitals and measurable UX quality",
  "Debugging and observability with Grafana, Loki and Tempo across logs, metrics and traces",
  "Product analytics and log analysis with Snowplow in the DPG Media environment",
  "Comfortable across DevOps fundamentals: CI/CD, cloud hosting, containers and release workflows",
  "Strong testing culture — unit, integration and UI automation with modern tooling",
  "Experienced collaborating in Agile teams, leading reviews and raising engineering quality",
] as const;

export type ExperienceItem = {
  role: string;
  company: string;
  href: string;
  dates: string;
  subtitle?: string;
  summary?: string;
  bullets?: string[];
  achievements?: string[];
  creditHref?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "DPG Media",
    href: "https://www.dpgmedia.nl",
    subtitle: "Videoland · RTL",
    dates: "January 2023 – Present",
    summary:
      "Senior Software Engineer on the Videoland team at DPG Media. After RTL was acquired by DPG Media, I continued in the Videoland organisation — building and shipping frontend experiences for one of the Netherlands’ leading video-on-demand platforms. I contribute to modern React/TypeScript product surfaces, collaborate across platform and product teams, and help deliver reliable streaming features at media scale.",
    bullets: [
      "Build and maintain frontend features for Videoland’s streaming web experiences",
      "Work in a large-scale media engineering environment spanning broadcast heritage and digital VOD",
      "Partner with product, design and platform teams to ship high-quality releases under strict deadlines",
      "Apply strong engineering practices around TypeScript, testing, accessibility and performance",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Netfront",
    href: "https://netfront.com.au",
    dates: "April 2021 – April 2023",
    summary:
      "Led frontend work on Netfront’s education platforms spanning web and mobile. Owned feature delivery end to end with product and design, strengthened component quality and consistency, and helped the team ship reliable learning experiences for educators and students.",
  },
  {
    role: "Full Stack Developer",
    company: "iGenius Group",
    href: "https://www.igeniusgroup.com",
    dates: "January 2020 – April 2021",
    summary:
      "Delivered client web applications with full-stack JavaScript in an Agile team. Designed, implemented, tested and refactored complex features; upheld engineering standards; and actively reviewed peers’ work while inviting rigorous review of my own.",
  },
  {
    role: "Software Developer (Volunteer)",
    company: "theCrag.com",
    href: "https://www.thecrag.com",
    dates: "September 2019 – March 2020",
    summary:
      "Volunteer software developer contributing to theCrag — a global climbing guidebook and community platform. Supported the product engineering team on features and improvements that help climbers discover and document crags worldwide.",
    creditHref: "https://www.thecrag.com/en/article/credit",
  },
  {
    role: "Frontend Developer",
    company: "AEFIS LLC",
    href: "https://www.aefis.com",
    dates: "December 2016 – December 2019",
    summary:
      "In the AEFIS agile development team, solving UI issues and developing new UI features across iterations.",
    bullets: [
      "Developed UI features using HTML5, CSS3 and JavaScript",
      "Detected and resolved frontend bugs",
      "Associate developer in the company’s transition to React, helping accelerate the process",
      "Analysed UI/UX design to improve usability",
      "Designed responsive UI features using Adobe XD",
      "Operated under Agile and Scrum frameworks to complete releases",
    ],
    achievements: [
      "Company’s transition to ReactJS completed 2 months before the estimated due date after my involvement",
      "6 months after owning UI issues, customer complaints decreased 20%",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "AEFIS LLC",
    href: "https://www.aefis.com",
    dates: "September 2015 – November 2016",
    summary:
      "Responsible for end-to-end testing, creating and maintaining automated test scripts, and tracking, detecting and reporting bugs.",
    bullets: [
      "Created automation scripts in Selenium WebDriver and Puppeteer using Java and JavaScript",
      "Tracked and reported bugs using Rollbar and XRebel",
      "Wrote complex SQL Server queries for efficient test cases",
      "Implemented and automated development workflows as a JIRA Admin",
      "Created state workflows and diagrams in planning to ease new product development",
      "As a member of the deployment team, sustained and approved production deployments",
    ],
    achievements: [
      "Automated 50% of the company’s user interface testing and significantly reduced manual UI testing hours",
    ],
  },
  {
    role: "IT Business Analyst",
    company: "hepsiburada.com",
    href: "https://www.hepsiburada.com",
    dates: "July 2014 – September 2015",
    summary:
      "Business analyst on the Checkout and Storefront Agile team for one of Turkey’s largest e-commerce platforms. Owned end-to-end analysis for customer-facing flows, translated requirements into actionable backlog items, and managed delivery tracking in Jira with engineering and product partners.",
  },
  {
    role: "IT Business Analyst",
    company: "Ciceksepeti.com",
    href: "https://www.ciceksepeti.com",
    dates: "July 2013 – July 2014",
    summary:
      "Business analyst in the IT data warehouse team, shaping BI solutions that supported executive decision-making. Gathered stakeholder needs, defined reporting requirements and helped deliver analytics systems used by senior leadership.",
  },
];

export type EducationItem = {
  school: string;
  faculty?: string;
  degree: string;
  dates?: string;
  location?: string;
  details?: string;
  skillsImproved?: string;
  courses?: string[];
  project?: {
    title: string;
    description: string;
    image: string;
    videoHref: string;
  };
};

export const education: EducationItem[] = [
  {
    school: "Monash University",
    faculty: "Faculty of Information Technology",
    degree: "Master of Information Technology — Web Development Track",
    dates: "July 2017 – July 2019",
    skillsImproved:
      "OOP with Java and C#, ASP.NET MVC, Unix Shell, RDBMS with SQL Server and NoSQL with MongoDB, Unit Testing, Python, HTML5, CSS3, JS, Android SDK, RESTful Web Services, Responsive UI/UX web and mobile design.",
    project: {
      title: "Project Demeter",
      description:
        "As a winner of Monash Industry Experience Expo 2019, Demeter is a comprehensive visual guide that helps refugee women decide on a suitable suburb to start a business based on their unique needs. We provide information on two aspects: business competition and family needs. Tech stack: Microsoft Stack including ASP.NET MVC for backend; HTML, CSS, JS and jQuery for frontend; Azure for deployment. Open data, R and Leaflet were used for data handling and mapping.",
      image: "/sa.png",
      videoHref: "https://www.youtube.com/watch?v=qY7jmfkxM60",
    },
    courses: [
      "Programming foundations in Java",
      "Introduction to databases",
      "Computer architecture and operating systems — Unix Commands",
      "Data communications",
      "Project management — Agile Software Development",
      "Mobile and distributed computing systems — Android App Development",
      "System validation and verification, quality and standards — Testing with Java",
      "Distributed databases and big data — Python and MongoDB",
      "Software engineering",
      "Internet Applications Development — ASP.NET MVC Web Application",
      "User interface design and usability",
      "Managing Multicultural Teams",
      "Business intelligence and data warehousing — BI Dashboard Design",
      "Industry experience studio project",
      "Professional practice",
    ],
  },
  {
    school: "Performance Education",
    degree: "ACS Professional Year — Information Technology",
    dates: "November 2019 – December 2020",
    location: "Melbourne, Australia",
    details:
      "Completed an ACS Professional Year in Information Technology focused on strengthening the professional skills of an IT practitioner. The program combined structured learning, professional development and a workplace internship — covering communication, collaboration, career readiness and applying technical skills in a real product environment.",
  },
  {
    school: "Bilge Adam Academy",
    degree: "Yazılım .NET Eğitim Programı — Full Stack Development Certificate",
    dates: "January 2015 – June 2015",
    details:
      "Intensive ~250-hour .NET software development program covering C# and object-oriented programming, ASP.NET / ASP.NET Core MVC, HTML5, CSS3, Bootstrap and JavaScript, Entity Framework Core, SOLID principles and design patterns, Web API / service architecture, and database programming with Microsoft SQL Server and PostgreSQL. Focused on building full-stack Microsoft stack applications from fundamentals through production-style web projects.",
  },
  {
    school: "Middle East Technical University",
    degree: "Bachelor of Science, Economics and Statistics",
    dates: "September 2007 – June 2011",
    details:
      "Quantitative foundation in economics and statistics, with coursework that strengthened analytical and programming-adjacent skills — including statistical programming, data analysis and modelling. That statistical and computational grounding still informs how I approach measurement, experimentation and data-driven engineering decisions today.",
  },
];

export const interests = [
  "Rock climbing is my passion. With 15 years of experience, I sport climb and boulder at crags around the world — including Australia, France, Spain, Turkey, Italy and beyond. I also teach climbing courses from basic to advanced levels and do route setting in climbing gyms.",
  "I have played acoustic guitar since childhood and performed in amateur bands.",
  "When indoors, I follow sci-fi and fantasy films and shows, and I spend a large amount of free time exploring the latest advancements in web development.",
  "I played basketball at amateur club level through primary school, secondary school, high school and university, and volunteered at the 2010 FIBA World Basketball Championship as a referee supervisor.",
] as const;

export type AwardItem = {
  title: string;
  href?: string;
};

export const awards: AwardItem[] = [
  {
    title: "Winner of Monash Industry Experience Expo with Project Demeter",
    href: "#education",
  },
  {
    title: "Web Developer — Microsoft Web Developer Certification",
  },
  {
    title:
      "Ranked top 500 in the university entrance exam in Turkey among 2 million competitors",
  },
];
