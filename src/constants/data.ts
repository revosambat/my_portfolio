export interface Project {
  id: number;
  period: string;
  subtitle: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SkillGroup {
  index: string;
  title: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    period: '11/2025 — current',
    subtitle: 'Environmental data platform',
    title: 'Tribal Air Clean',
    description: 'A cross-platform web and mobile product connecting AirGradient sensors with community air-quality data, learning, news, and events. Built around role-based access and real-time data workflows.',
    tags: ['Next.js', 'React Native', 'AWS', 'MongoDB'],
    link: '',
  },
  {
    id: 2,
    period: '09/2025 — 11/2025',
    subtitle: 'Property tax appeal platform',
    title: 'Low Property Tax',
    description: 'A multi-tenant platform helping property owners navigate tax appeals. Secure workflows connect users, moderators, and admins with document management, notifications, and payment integrations.',
    tags: ['TypeScript', 'AWS Amplify', 'Cognito', 'Square'],
    link: 'https://www.lowproptax.com/',
  },
  {
    id: 3,
    period: '2021 — 2024',
    subtitle: 'Fleet operations / Offline-first mobile',
    title: 'Manage Vehicle',
    description: 'A fleet management ecosystem for heavy vehicles: job allocation, compliance reporting, driver activity, tracking, and fault, fuel, and incident reporting—even when connectivity is limited.',
    tags: ['React Native', 'Symfony', 'AWS', 'Offline sync'],
    link: 'https://fleet.managevehicle.com/',
  },
];

export const skillGroups: SkillGroup[] = [
  { index: '01', title: 'Backend & architecture', items: ['NestJS', 'Node.js', 'TypeScript', 'Django', 'REST APIs', 'CQRS', 'DDD', 'JWT / RBAC'] },
  { index: '02', title: 'Frontend & mobile', items: ['React.js', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Material UI'] },
  { index: '03', title: 'Cloud & delivery', items: ['AWS Lambda', 'Cognito', 'API Gateway', 'SQS / SES', 'Amplify Gen 2', 'Docker', 'CI/CD'] },
  { index: '04', title: 'Data & integrations', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Stripe', 'Square', 'Celery', 'OpenAI API'] },
];
