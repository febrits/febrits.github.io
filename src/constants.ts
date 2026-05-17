export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vox-Aura AI',
    category: 'Audio Synthesis',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1200',
    description: 'Neural text-to-speech engine with emotional inflection and ultra-low latency sub-50ms inference.'
  },
  {
    id: '2',
    title: 'Visceral-Gen',
    category: 'Generative Media',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    description: 'Advanced text-to-video pipeline utilizing latent diffusion for cinematic storytelling and dynamic scene control.'
  },
  {
    id: '3',
    title: 'Recon-Daemon',
    category: 'Pentest Toolset',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200',
    description: 'Automated OSINT and vulnerability scanner designed for red-team operations and edge security auditing.'
  },
  {
    id: '4',
    title: 'Synthetix Agents',
    category: 'AI Orchestration',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    description: 'Framework for deploying autonomous AI agents that can self-reason and execute complex multi-step workflows.'
  },
  {
    id: '5',
    title: 'Kernel-Sentinel',
    category: 'Kernel Security',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    description: 'AI-driven driver isolation and runtime verification for NT and Linux kernels.'
  },
  {
    id: '6',
    title: 'Quantum-Gate',
    category: 'Cryptography',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    description: 'Implementation of post-quantum cryptographic primitives (Dilithium, Kyber) for secure IoT communication.'
  }
];
