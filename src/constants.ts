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
    title: 'TaskFlow',
    category: 'Project Management',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200',
    description: 'Trello-inspired Kanban project management app with drag-and-drop boards, task priorities, custom columns, and real-time progress tracking. Built with React 19 and @dnd-kit.',
    tier: 'S',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', '@dnd-kit', 'Vite'],
    github: 'https://github.com/febrits/taskflow',
    live: 'https://taskflow-bangpeb.vercel.app',
    status: 'completed'
  },
  {
    id: '2',
    title: 'DevBlog',
    category: 'Blog Platform',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    description: 'Full-featured blog platform with post listing, individual post views, tag filtering, search functionality, and about page. Clean dark theme with responsive design.',
    tier: 'S',
    tech: ['React 19', 'TypeScript', 'React Router', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/devblog',
    live: 'https://devblog-bangpeb.vercel.app',
    status: 'completed'
  },

  // ===== A-TIER: ADVANCED PROJECTS =====
  {
    id: '3',
    title: 'SnapURL',
    category: 'URL Shortener',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    description: 'URL shortener with analytics dashboard. Generate short URLs, track clicks, view creation dates, and manage all links from a clean dashboard interface.',
    tier: 'A',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/snapurl',
    live: 'https://snapurl-bangpeb.vercel.app',
    status: 'completed'
  },
  {
    id: '4',
    title: 'InvoiceKit',
    category: 'Invoice Generator',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    description: 'Freelance invoice generator with line items, auto-calculations, tax support, professional preview, and print functionality. Manage paid/unpaid status.',
    tier: 'A',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/invoicekit',
    live: 'https://invoicekit-bangpeb.vercel.app',
    status: 'completed'
  },

  // ===== B-TIER: SOLID PROJECTS =====
  {
    id: '5',
    title: 'HabitGrid',
    category: 'Habit Tracker',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
    description: 'Habit tracker with GitHub-style contribution grid, streak tracking, completion statistics, and daily toggle. Visual calendar shows your consistency over time.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/habitgrid',
    live: 'https://habitgrid-bangpeb.vercel.app',
    status: 'completed'
  }
];
