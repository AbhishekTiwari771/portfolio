export type Project = {
  slug: string;
  title: string;
  year: string;
  stack: string;
  summary: string;
  href?: string;
  status: "live" | "archived" | "in-progress";
};

export const projects: Project[] = [
  {
    slug: "tesla-resale-dashboard",
    title: "Tesla Resale Value Dashboard",
    year: "2025",
    stack: "Power BI, Excel, DAX",
    summary:
      "An interactive dashboard modeling Tesla resale value trends across model, year, and mileage, built as a relational data model with a custom Power BI theme.",
    status: "live",
  },
  {
    slug: "ai-resume-builder",
    title: "AI Resume Builder",
    year: "2025",
    stack: "Python, LLM APIs",
    summary:
      "A tool that generates and refines ATS-friendly resumes from a person's raw experience, with section-by-section scoring and rewrite suggestions.",
    status: "live",
  },
  {
    slug: "kitype",
    title: "KiType",
    year: "2024",
    stack: "JavaScript",
    summary:
      "A typing practice application focused on speed and accuracy tracking over time.",
    status: "live",
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio (v1)",
    year: "2024",
    stack: "HTML, CSS, JS",
    summary:
      "An earlier version of this site — a single-page portfolio listing projects and contact details.",
    status: "archived",
  },
];
