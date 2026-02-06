export const FIRST_NAME = "Chris";
export const FULL_NAME = "Chris Bridges";
export const TAGLINE = "Software & Systems Engineer";
export const TAGLINE_SUB = "8+ years of experience building scalable software, optimizing complex algorithms, and leading technical teams.";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/chrisbridges6",
  github: "https://github.com/CB9001",
};

export const ABOUT = [
  "👋 Hello world! I'm Chris, a passionate Software Engineer based in Northern Virginia. I specialize in bridging the gap between complex problems and clean, user-friendly solutions. Whether I'm optimizing low-level algorithms in C++ or architecting scalable cloud-ready microservices in Python, I love the challenge of making systems faster, more reliable, and easier to maintain.",
  "I believe that great software is built by great teams. In my recent roles, I've transitioned from individual contributor to technical lead, enjoying the opportunity to mentor junior engineers and drive architectural strategy. When I'm not coding, you can find me reverse-engineering retro games, playing volleyball, or experimenting with new recipes. I'm also an avid board gamer and logic puzzle enthusiast who loves exploring the world.",
];

export interface Job {
  title: string;
  company: string;
  location: string;
  date?: string;
  description: string;
}

export const EXPERIENCE: Job[] = [
  {
    title: "Lead Systems Engineer",
    company: "MITRE",
    location: "McLean, VA",
    date: "June 2018 - Present",
    description: "Lead Backend Architect for data-intensive software initiatives. Responsible for designing server-side infrastructure, transitioning legacy monoliths into distributed microservices, and implementing high-performance computing pipelines",
  },
  {
    title: "Android Developer",
    company: "Patron Technologies",
    location: "Washington, DC",
    date: "July 2017 - Jan 2018",
    description: "Sole Android developer for a consumer-facing mobile application. Owned the full development lifecycle, including UI/UX implementation, API integration, and release management",
  },
  {
    title: "Software Engineering Intern",
    company: "Wapack Labs",
    location: "New Boston, NH",
    date: "May 2017 - Aug 2017",
    description: "Built automated web scrapers to gather threat intelligence and refactored internal analysis tools for the security operations team",
  },
  {
    title: "STEM Tutor",
    company: "Student Success Center at Virginia Tech",
    location: "Blacksburg, VA",
    date: "Sep 2015 - May 2018",
    description: "Tutored undergraduate students in core technical subjects including Computer Science, Engineering, Calculus, and Physics. Helped peers master complex algorithmic concepts and improve academic performance",
  }
];

export interface School {
  degree: string;
  school: string;
  location: string;
  date: string;
  details: string;
}

export const EDUCATION: School[] = [
  {
    degree: "B.S. Computer Science",
    school: "Virginia Tech",
    location: "Blacksburg, VA",
    date: "2014 - 2018",
    details: "Minors in Cybersecurity and Math"
  }
];

export const SKILLS = [
  // Languages
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "SQL",
  "Bash/Shell",

  // Architecture & Systems
  "System Design",
  "Systems Engineering",
  "Microservices",
  "REST APIs",
  "UML/SysML",

  // DevOps & Tools
  "Docker",
  "Git",
  "CI/CD",
  "Linux",
  "Automation",

  // Specialized Domains
  "Cybersecurity",
  "Reverse Engineering",
  "Data Science",
  "Web Scraping",

  // Process & Leadership
  "Agile/Scrum",
  "Unit Testing",
  "Technical Writing",
  "Mentorship"
];

export interface Project {
  title: string;
  tags: string;
  description: string;
  link?: string; // Optional link if you want to click through to a repo
}

export const PROJECTS: Project[] = [
  // {
  //   title: "Project #1",
  //   tags: "Python, Web Scraping",
  //   description:
  //     "Donec sit amet luctus lacus. Nam sodales nibh eros, sed porta felis pulvinar vitae.",
  // },
  //   {
  //   title: "Project #2",
  //   tags: "CUDA",
  //   description:
  //     "Aenean accumsan ex id ex fringilla tristique. Nullam varius elit in pulvinar ultrices.",
  // },  
  // {
  //   title: "Project #3",
  //   tags: "Pascal, Docker, Java",
  //   description:
  //     "Vivamus dictum, quam vitae venenatis viverra, mauris urna congue risus, vel bibendum velit ipsum et felis.",
  // },  
  // {
  //   title: "Project #4",
  //   tags: "C++",
  //   description:
  //     "Etiam imperdiet nibh et metus ullamcorper posuere.",
  // },
];