export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

export const SKILLS = [
  { name: 'React', level: 95, color: 'bg-blue-500', icon: '⚛️' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-600', icon: '📘' },
  { name: 'JavaScript', level: 95, color: 'bg-yellow-500', icon: '📜' },
  { name: 'Next.js', level: 85, color: 'bg-gray-800', icon: '⚡' },
  { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500', icon: '🎨' },
  { name: 'Node.js', level: 80, color: 'bg-green-600', icon: '🟢' },
  { name: 'GraphQL', level: 75, color: 'bg-pink-600', icon: '🔷' },
  { name: 'AWS', level: 70, color: 'bg-orange-500', icon: '☁️' }
];

export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Real-time Dashboard',
    description: 'Analytics dashboard with real-time data visualization',
    tags: ['React', 'D3.js', 'WebSocket', 'Express'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w-800&auto=format&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Secure banking application with biometric authentication',
    tags: ['React Native', 'Firebase', 'Redux', 'Jest'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Design System',
    description: 'Comprehensive design system for enterprise applications',
    tags: ['React', 'Storybook', 'Styled Components', 'Figma'],
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&auto=format&fit=crop',
    link: '#',
    github: '#'
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    company: 'Tech Corp Inc.',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    description: 'Lead frontend development for multiple enterprise applications',
    achievements: [
      'Improved application performance by 40% through code splitting and lazy loading',
      'Implemented design system used by 50+ developers across organization',
      'Mentored 5 junior developers and conducted code reviews'
    ]
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Startup XYZ',
    location: 'Remote',
    duration: '2020 - 2022',
    description: 'Built customer-facing web applications from scratch',
    achievements: [
      'Developed 3 major product features serving 10k+ monthly users',
      'Reduced bundle size by 30% through tree shaking and optimization',
      'Implemented comprehensive testing suite with 95% coverage'
    ]
  },
  {
    id: 3,
    role: 'Junior Web Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    duration: '2019 - 2020',
    description: 'Built responsive websites and web applications for various clients',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Improved website loading speed by 50% on average',
      'Collaborated with designers to implement pixel-perfect UIs'
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
    color: 'hover:bg-gray-900 hover:text-white'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
    color: 'hover:bg-blue-700 hover:text-white'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
    color: 'hover:bg-blue-400 hover:text-white'
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: 'mail',
    color: 'hover:bg-red-500 hover:text-white'
  }
];

export const CONTACT_INFO = {
  email: 'hello@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Available for freelance work'
};

export const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Stanford University',
    duration: '2015 - 2019',
    gpa: '3.8/4.0'
  },
  {
    degree: 'Frontend Masters Courses',
    institution: 'Online Platform',
    duration: '2020 - 2022',
    description: 'Advanced React, TypeScript, and Web Performance'
  }
];