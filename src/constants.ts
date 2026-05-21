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
    live: 'https://taskflow-livid-mu.vercel.app',
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
    live: 'https://devblog-three-ochre.vercel.app',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Portfolio Febri',
    category: 'Portfolio',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
    description: 'Personal portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, and Tailwind CSS with smooth animations and responsive design.',
    tier: 'S',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
    github: 'https://github.com/febrits/febrits.github.io',
    live: 'https://portfolio-febri.vercel.app',
    status: 'completed'
  },

  // ===== A-TIER: ADVANCED PROJECTS =====
  {
    id: '4',
    title: 'AuthKit',
    category: 'Authentication',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200',
    description: 'Authentication toolkit with OAuth, JWT, session management, and role-based access control. Secure and scalable auth solution for modern web apps.',
    tier: 'A',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'JWT', 'Vite'],
    github: 'https://github.com/febrits/authkit',
    live: 'https://authkit-sepia.vercel.app',
    status: 'completed'
  },
  {
    id: '5',
    title: 'DataLens',
    category: 'Data Analytics',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    description: 'Data analytics dashboard with interactive charts, real-time metrics, and customizable widgets. Visualize and analyze data with a clean, intuitive interface.',
    tier: 'A',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Chart.js', 'Vite'],
    github: 'https://github.com/febrits/datalens',
    live: 'https://datalens-one.vercel.app',
    status: 'completed'
  },
  {
    id: '6',
    title: 'SnapURL',
    category: 'URL Shortener',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    description: 'URL shortener with analytics dashboard. Generate short URLs, track clicks, view creation dates, and manage all links from a clean dashboard interface.',
    tier: 'A',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/snapurl',
    live: 'https://snapurl-five.vercel.app',
    status: 'completed'
  },
  {
    id: '7',
    title: 'InvoiceKit',
    category: 'Invoice Generator',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    description: 'Freelance invoice generator with line items, auto-calculations, tax support, professional preview, and print functionality. Manage paid/unpaid status.',
    tier: 'A',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/invoicekit',
    live: 'https://invoicekit-olive.vercel.app',
    status: 'completed'
  },

  // ===== B-TIER: SOLID PROJECTS =====
  {
    id: '8',
    title: 'FileVault',
    category: 'File Storage',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    description: 'Secure file storage and management system with upload, preview, and sharing capabilities. Organize files with folders and tags.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/filevault',
    live: 'https://filevault-amber.vercel.app',
    status: 'completed'
  },
  {
    id: '9',
    title: 'DeployBot',
    category: 'DevOps',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1200',
    description: 'Automated deployment bot with CI/CD pipeline integration, build monitoring, and rollback support. Streamline your deployment workflow.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/deploybot',
    live: 'https://deploybot.vercel.app',
    status: 'completed'
  },
  {
    id: '10',
    title: 'HabitGrid',
    category: 'Habit Tracker',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1200',
    description: 'Habit tracker with GitHub-style contribution grid, streak tracking, completion statistics, and daily toggle. Visual calendar shows your consistency over time.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/habitgrid',
    live: 'https://habitgrid-eight.vercel.app',
    status: 'completed'
  },
  {
    id: '11',
    title: 'ChatVault',
    category: 'Real-time Chat',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=1200',
    description: 'Real-time chat application with multiple rooms, message history, and clean responsive interface. Supports instant messaging with room-based organization.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/chatvault',
    live: 'https://chatvault-nine.vercel.app',
    status: 'completed'
  },
  {
    id: '12',
    title: 'NotePad',
    category: 'Note Taking',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1200',
    description: 'Note taking app with folders, tags, and full-text search. Organize notes in nested folders, filter by tags, and find anything instantly.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/notepad',
    live: 'https://notepad-one-beta.vercel.app',
    status: 'completed'
  },
  {
    id: '13',
    title: 'CalendarHub',
    category: 'Event Scheduler',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200',
    description: 'Event scheduler with monthly calendar view, event creation, and date navigation. Add, view, and manage events with an intuitive calendar interface.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/calendarhub',
    live: 'https://calendarhub-indol.vercel.app',
    status: 'completed'
  },
  {
    id: '14',
    title: 'ProductCatalog',
    category: 'E-Commerce',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    description: 'E-commerce product catalog with shopping cart, product grid, and checkout flow. Browse products, add to cart, and complete purchases.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/productcatalog',
    live: 'https://productcatalog-phi.vercel.app',
    status: 'completed'
  },
  {
    id: '15',
    title: 'GameSnake',
    category: 'Browser Game',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=1200',
    description: 'Classic Snake browser game with smooth controls, score tracking, and retro aesthetics. Eat, grow, and avoid hitting the walls!',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Canvas API', 'Vite'],
    github: 'https://github.com/febrits/gamesnake',
    live: 'https://gamesnake-two.vercel.app',
    status: 'completed'
  },
  {
    id: '16',
    title: 'APIForge',
    category: 'API Builder',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200',
    description: 'API builder and testing tool with request builder, response viewer, and collection management. Design, test, and document APIs effortlessly.',
    tier: 'B',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite'],
    github: 'https://github.com/febrits/apiforge',
    live: 'https://apiforge-nu.vercel.app',
    status: 'completed'
  }
];
