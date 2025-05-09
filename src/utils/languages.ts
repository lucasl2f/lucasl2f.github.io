export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  unity: {
    name: "Unity",
    iconName: "devicon:unity",
  },
  blender: {
    name: "Blender",
    iconName: "devicon:blender",
  },
  photoshop: {
    name: "Photoshop",
    iconName: "devicon:photoshop",
  },
  gimp: {
    name: "Gimp",
    iconName: "devicon:gimp",
  },
  csharp: {
    name: "C#",
    iconName: "devicon:csharp",
  },
  git: {
    name: "Git",
    iconName: "devicon:git",
  },
  premiere: {
    name: "Premiere",
    iconName: "skill-icons:premiere",
  },
  after: {
    name: "After Effects",
    iconName: "skill-icons:aftereffects",
  },
  linux: {
    name: "Linux",
    iconName: "devicon:linux",
  },
  astro: {
    name: "Astro",
    iconName: "devicon:astro",
  },
  html: {
    name: "HTML 5",
    iconName: "devicon:html5",
  },
  javascript: {
    name: "JavaScript",
    iconName: "devicon:javascript",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "devicon:tailwindcss",
  },
  figma: {
    name: "Figma",
    iconName: "devicon:figma",
  },
  markdown: {
    name: "Markdown",
    iconName: "devicon:markdown",
  },
  css: {
    name: "CSS",
    iconName: "devicon:css3",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "devicon:gatsby",
  },
  python: {
    name: "Python",
    iconName: "devicon:python",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};
