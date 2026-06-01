export const portfolioData = {
  about: {
    name: 'Umang Saxena',
    email: 'umang.saxena@example.com',
    githublink: 'https://github.com/umang-saxena',
    linkedinlink: 'https://www.linkedin.com/in/umang-saxena-9b5632331/',
    leetcodelink: 'https://leetcode.com/u/umang-saxena/',
    resumedrivelink: 'https://drive.google.com/',
    phone: '+91 00000 00000',
    address: 'India',
    image: '/images/profile.jpg',
    description:
      'I build responsive, practical web apps with a focus on clean interfaces, reliable behavior, and simple user flows.',
    tagline:
      'I craft modern web experiences with cutting-edge technologies. Turning complex problems into elegant solutions.',
  },
  projects: [
    {
      id: 'portfolio-site',
      title: 'Portfolio Website',
      description:
        'A personal portfolio that showcases projects, experience, and skills with a polished responsive layout.',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      githublink: 'https://github.com/umang-saxena/portfolio',
      demolink: 'https://portfolio.example.com',
    },
    {
      id: 'task-manager',
      title: 'Task Manager',
      description:
        'A task tracking interface with quick filtering, progress visibility, and a clean productivity-focused design.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githublink: 'https://github.com/umang-saxena/task-manager',
      demolink: 'https://task-manager.example.com',
    },
    {
      id: 'learning-dashboard',
      title: 'Learning Dashboard',
      description:
        'A dashboard for tracking study goals, resources, and weekly progress in one lightweight interface.',
      technologies: ['Next.js', 'Chart.js', 'CSS'],
      githublink: 'https://github.com/umang-saxena/learning-dashboard',
      demolink: 'https://learning-dashboard.example.com',
    },
  ],
  blogs: [
    {
      title: 'Building better UI with component-driven design',
      link: 'https://medium.com/',
      pubDate: '2025-05-12T00:00:00.000Z',
      content:
        'A short note on keeping interfaces maintainable by splitting pages into focused, reusable pieces.',
      category: ['UI', 'React', 'Frontend'],
    },
    {
      title: 'What I learned from shipping a portfolio redesign',
      link: 'https://medium.com/',
      pubDate: '2025-03-04T00:00:00.000Z',
      content:
        'A reflection on simplifying page structure, improving typography, and making a portfolio feel intentional.',
      category: ['Design', 'Portfolio'],
    },
    {
      title: 'Keeping state local when the problem is simple',
      link: 'https://medium.com/',
      pubDate: '2024-12-18T00:00:00.000Z',
      content:
        'Why some screens are easier to maintain when the data lives in the component tree instead of a backend round-trip.',
      category: ['React', 'State Management'],
    },
  ],
  experience: [
    {
      id: 'freelance-1',
      company: 'Independent / Freelance',
      role: 'Full Stack Developer',
      startDate: '2024-01-01T00:00:00.000Z',
      endDate: 'Present',
      description:
        'Built and refined small portfolio-style applications with a focus on UX, responsiveness, and maintainable code.',
    },
    {
      id: 'student-1',
      company: 'Self-directed Learning',
      role: 'Frontend Developer',
      startDate: '2022-06-01T00:00:00.000Z',
      endDate: '2023-12-31T00:00:00.000Z',
      description:
        'Worked through web fundamentals, component patterns, and project builds while sharpening practical UI skills.',
    },
  ],
  skills: [
    { id: 'react', name: 'React' },
    { id: 'nextjs', name: 'Next.js' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'nodejs', name: 'Node.js' },
    { id: 'python', name: 'Python' },
    { id: 'mongodb', name: 'MongoDB' },
    { id: 'tailwind', name: 'Tailwind CSS' },
    { id: 'docker', name: 'Docker' },
    { id: 'firebase', name: 'Firebase' },
    { id: 'postman', name: 'Postman' },
    { id: 'jira', name: 'Jira' },
    { id: 'cpp', name: 'C++' },
    { id: 'c', name: 'C' },
    { id: 'git', name: 'Git' },
    { id: 'mysql', name: 'MySQL' },
    { id: 'github-actions', name: 'CI/CD (GitHub Actions)' },
  ],
};
