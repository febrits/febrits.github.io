export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tier: 'S' | 'A' | 'B';
  tech: string[];
  github?: string;
  live?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export const PROJECTS: Project[] = [
  // ===== S-TIER: FLAGSHIP PROJECTS =====
  {
    id: '1',
    title: 'AI Agent Command Center',
    category: 'AI Orchestration',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    description: 'Real-time AI agent orchestration dashboard. Create, manage, and monitor autonomous AI agents with Supabase Realtime, token analytics, and agent-to-agent communication visualization.',
    tier: 'S',
    tech: ['Next.js 15', 'Supabase', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/febrits/ai-agent-command-center',
    live: 'https://project-1-ai-agent-dashboard.vercel.app',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Neural Analytics Platform',
    category: 'Data Intelligence',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    description: 'AI-powered analytics platform with drag-and-drop data upload, auto-generated visualizations, natural language insights, and shareable dashboards.',
    tier: 'S',
    tech: ['Next.js 15', 'Supabase', 'Recharts', 'TypeScript', 'PapaParse'],
    github: 'https://github.com/febrits/neural-analytics',
    live: 'https://neural-analytics.vercel.app',
    status: 'completed'
  },

  // ===== A-TIER: ADVANCED PROJECTS =====
  {
    id: '3',
    title: 'ContentForge AI',
    category: 'AI SaaS',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&q=80&w=1200',
    description: 'Multi-platform AI content generation SaaS. Generate social media posts, blogs, and marketing copy with brand voice training and content scheduling.',
    tier: 'A',
    tech: ['Next.js 15', 'Supabase', 'Stripe', 'AI SDK', 'TypeScript'],
    github: 'https://github.com/febrits/contentforge-ai',
    live: 'https://contentforge-ai.vercel.app',
    status: 'completed'
  },
  {
    id: '4',
    title: 'CyberScan Pro',
    category: 'Security Tooling',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    description: 'Automated security scanning & vulnerability assessment. Real-time analysis of headers, SSL, DNS, CORS, CSP with PDF reporting and CI/CD integration.',
    tier: 'A',
    tech: ['Next.js 15', 'Supabase', 'Server Actions', 'TypeScript'],
    github: 'https://github.com/febrits/cyberscan-pro',
    live: 'https://cyberscan-pro.vercel.app',
    status: 'completed'
  },

  // ===== B-TIER: SOLID PROJECTS =====
  {
    id: '5',
    title: 'MicroCommerce',
    category: 'E-Commerce',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    description: 'Minimalist e-commerce platform for digital products. Stripe payments, seller dashboard, analytics, coupon system, and automated delivery.',
    tier: 'B',
    tech: ['Next.js 15', 'Supabase', 'Stripe', 'TypeScript'],
    github: 'https://github.com/febrits/microcommerce',
    live: 'https://microcommerce.vercel.app',
    status: 'completed'
  },
  {
    id: '6',
    title: 'DevFlow CLI',
    category: 'Developer Tools',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    description: 'Developer productivity CLI tool. Project scaffolding, one-command Vercel deployment, git workflow automation, env management, and Supabase migrations.',
    tier: 'B',
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Supabase'],
    github: 'https://github.com/febrits/devflow-cli',
    live: 'https://devflow-cli.vercel.app',
    status: 'completed'
  }
];
