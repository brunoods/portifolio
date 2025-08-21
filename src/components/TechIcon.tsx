// src/components/TechIcon.tsx
import {
  SiReact, SiTypescript, SiNodedotjs, SiPostgresql,
  SiVite, SiTailwindcss, SiFramer, SiNextdotjs,
  SiGraphql, SiMarkdown
} from 'react-icons/si';

interface TechIconProps {
  tech: string;
}

export default function TechIcon({ tech }: TechIconProps) {
  const iconProps = {
    size: 24,
    className: "text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-blue-500",
    title: tech,
  };

  switch (tech) {
    case 'React':
      return <SiReact {...iconProps} />;
    case 'TypeScript':
      return <SiTypescript {...iconProps} />;
    case 'Node.js':
      return <SiNodedotjs {...iconProps} />;
    case 'PostgreSQL':
      return <SiPostgresql {...iconProps} />;
    case 'Vite':
      return <SiVite {...iconProps} />;
    case 'Tailwind CSS':
      return <SiTailwindcss {...iconProps} />;
    case 'Framer Motion':
      return <SiFramer {...iconProps} />;
    case 'Next.js':
      return <SiNextdotjs {...iconProps} />;
    case 'GraphQL':
      return <SiGraphql {...iconProps} />;
    case 'Markdown':
      return <SiMarkdown {...iconProps} />;
    default:
      return <span className="font-sans text-sm font-semibold text-accent">{tech}</span>;
  }
}