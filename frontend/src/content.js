import {
  BriefcaseBusiness,
  ChartColumn,
  Cloud,
  Code2,
  Database,
  FolderKanban,
} from "lucide-react";

export const profile = {
  name: "Anshi Tyagi",
  headline: "Manual Testing | SQL | Jira | Postman | HTML & CSS | MS Excel",
  subheadline:
    "Detail-oriented early-career candidate focused on software quality, bug tracking, API validation, and basic web and data tooling.",
  summary:
    "I am seeking internships and entry-level opportunities where I can contribute to manual testing, software quality assurance, defect tracking, API testing, and basic SQL-driven validation. My goal is to join a team where I can improve product quality through careful testing, clear reporting, and consistent execution.",
  email: "anshityagi0405@gmail.com",
  phone: "+91-6397557374",
  location: "A-101 Shyam Park Ext., Sahibabad, Ghaziabad, U.P. 201005",
  linkedin: "",
  linkedinHandle: "",
  github: "https://github.com/adishityagi0304-gif",
  whatsapp: "",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { label: "Manual testing project", value: "1" },
  { label: "Core QA skill areas", value: "6" },
  { label: "Primary target roles", value: "5" },
];

export const roleTargets = [
  "Manual Testing Internship",
  "QA Internship",
  "Software Testing Trainee Role",
  "Junior QA Analyst Role",
  "Entry-Level Test Engineer Opportunity",
];

export const strengths = [
  {
    title: "Quality Mindset",
    text: "I focus on finding issues carefully, validating expected behavior, and improving the overall reliability of software products.",
    icon: FolderKanban,
  },
  {
    title: "Testing Toolkit",
    text: "My current toolkit includes manual testing, SQL basics, Jira, Postman, HTML & CSS basics, and MS Excel for reporting and validation work.",
    icon: Code2,
  },
  {
    title: "Career Readiness",
    text: "I am early in my career, but I communicate clearly, document findings well, and bring a disciplined approach that fits QA and testing teams.",
    icon: BriefcaseBusiness,
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: BriefcaseBusiness },
  { label: "Phone", href: `tel:${profile.phone}`, icon: Code2 },
];

export const skillGroups = [
  {
    title: "Testing Skills",
    caption: "Core QA foundations",
    icon: Code2,
    skills: ["Manual Testing", "Test Case Execution", "Bug Reporting", "Regression Testing"],
  },
  {
    title: "Database & API",
    caption: "Validation and verification basics",
    icon: FolderKanban,
    skills: ["SQL (Basic)", "Postman (Basic)", "API Testing Basics", "Data Validation"],
  },
  {
    title: "Tools",
    caption: "Issue tracking and reporting",
    icon: Database,
    skills: ["Jira (Basic)", "MS Excel", "Defect Logging", "Test Documentation"],
  },
  {
    title: "Web Basics",
    caption: "Helpful technical understanding",
    icon: Cloud,
    skills: ["HTML & CSS (Basic)", "UI Checking", "Form Validation", "Cross-Browser Awareness"],
  },
];

export const projectHighlights = [
  {
    title: "Online Examination System - Manual Testing Project",
    tone: "electric",
    previewLabel: "QA validation project",
    previewText:
      "A web-based online examination application tested manually to validate login flow, question display, submission behavior, and result generation.",
    summary:
      "This project aligns directly with a software testing profile. It demonstrates practical exposure to manual testing, test case thinking, defect reporting, and quality-focused validation of a real application workflow.",
    stack: ["Manual Testing", "Jira (Basic)", "MS Excel", "Test Case Design", "Defect Reporting"],
    features: [
      "Tested major user flows including login, exam access, question rendering, submission, and result behavior.",
      "Applied manual testing techniques to verify expected results and identify functional issues.",
      "Used structured documentation practices for test cases and defect reporting.",
    ],
    impact: [
      "Makes the portfolio directly relevant to QA, manual testing, and software testing internships.",
      "Gives recruiters a resume-matched proof point instead of unrelated development projects.",
      "Creates a clear interview discussion around bugs, test coverage, and reporting quality.",
    ],
    github: "https://github.com/adishityagi0304-gif/portfolio",
    liveDemo:
      "mailto:anshityagi0405@gmail.com?subject=Request%20details%20for%20Online%20Examination%20System%20Manual%20Testing%20Project",
    liveLabel: "Request Project Details",
  },
];

export const experience = [
  {
    role: "Fresher Software Testing Candidate",
    organization: "Entry-level QA and software testing preparation",
    period: "2025 - Present",
    points: [
      "Built practical familiarity with manual testing concepts, test case execution, and defect reporting.",
      "Worked on a manual testing project to understand application validation and issue identification.",
      "Focused on strengthening manual testing, SQL basics, bug reporting, API validation, and QA-oriented tools for internship readiness.",
    ],
  },
  {
    role: "Independent Learner",
    organization: "Software testing and QA upskilling",
    period: "Ongoing",
    points: [
      "Built familiarity with software quality workflows, structured validation, and entry-level QA tools.",
      "Explored manual testing, SQL, Postman, Jira, and reporting practices to stay aligned with testing and quality roles.",
      "Actively preparing for internships and entry-level roles through project work, skills practice, and portfolio improvement.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    school: "Raj Kumar Goel Institute of Technology and Management, AKTU",
    period: "July 2025",
    details:
      "A motivated Computer Science graduate seeking an entry-level software testing position where manual testing knowledge, test case design, and defect reporting can be applied in a professional environment.",
  },
];

export const certifications = [];

export const linkedinHighlights = [
  "Use LinkedIn to reinforce the same testing-focused headline, skills, and career direction shown in this portfolio.",
  "Highlight manual testing, SQL, Jira, Postman, HTML & CSS basics, and MS Excel in both the About and Skills sections.",
  "Add a concise summary focused on QA, software testing, and reliability rather than a broad developer-only positioning.",
];
