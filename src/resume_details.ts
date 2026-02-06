export const FIRST_NAME = "My";
export const FULL_NAME = "My Name";
export const TAGLINE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim sagittis tristique.";
export const TAGLINE_SUB = "Mauris ultrices volutpat convallis. Curabitur ac euismod erat.";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/placeholder/",
  github: "https://github.com/placeholder",
};

export const ABOUT = [
  "In in aliquet ipsum, et egestas nunc. Donec non lorem tristique, bibendum felis quis, tempus ante. Fusce rhoncus diam non porttitor blandit. Suspendisse sed elit pharetra, lacinia mauris sit amet, convallis ligula.",
  "Proin vel leo non nibh dictum posuere. Mauris feugiat erat sit amet est faucibus hendrerit et vitae tellus. Donec lobortis auctor molestie.",
];

export interface Job {
  title: string;
  company: string;
  location: string;
  date?: string; // Optional because the Intern role didn't have one in your snippet
  description: string;
}

export const EXPERIENCE: Job[] = [
  {
    title: "Job Position 1",
    company: "Company 1",
    location: "Location 1",
    date: "June 2018 - Present",
    description:
      "Morbi porta mauris vel magna porta, nec viverra augue posuere.",
  },
  {
    title: "Job Position 2",
    company: "Company 2",
    location: "Location 2",
    date: "June 2014 - June 2018",
    description:
      "Sed eleifend, velit ut tincidunt posuere, metus lacus semper velit.",
  },
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
    details: "Minors in Cybersecurity and Math",
  },
];

export const SKILLS = [
  "Python",
  "Test & Evaluation",
  "C++",
  "Web Scraping",
];

export interface Project {
  title: string;
  tags: string;
  description: string;
  link?: string; // Optional link if you want to click through to a repo
}

export const PROJECTS: Project[] = [
  {
    title: "Project #1",
    tags: "Python, Web Scraping",
    description:
      "Donec sit amet luctus lacus. Nam sodales nibh eros, sed porta felis pulvinar vitae.",
  },
    {
    title: "Project #2",
    tags: "CUDA",
    description:
      "Aenean accumsan ex id ex fringilla tristique. Nullam varius elit in pulvinar ultrices.",
  },  
  {
    title: "Project #3",
    tags: "Pascal, Docker, Java",
    description:
      "Vivamus dictum, quam vitae venenatis viverra, mauris urna congue risus, vel bibendum velit ipsum et felis.",
  },  
  {
    title: "Project #4",
    tags: "C++",
    description:
      "Etiam imperdiet nibh et metus ullamcorper posuere.",
  },
];