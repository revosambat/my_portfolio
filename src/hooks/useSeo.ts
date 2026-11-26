import { useEffect } from 'react';

const BASE_TITLE = 'Sambat Das — Software Engineer & Backend-Focused Full Stack Developer';
const BASE_DESCRIPTION = 'Sambat Das — software engineer and backend-focused full-stack developer building reliable APIs, cloud systems, and mobile products.';

const sections = [
  {
    id: 'top',
    title: 'About',
    description: 'Sambat Das is a software engineer focused on backend architecture, secure APIs, and reliable cloud delivery.',
  },
  {
    id: 'work',
    title: 'Selected work',
    description: 'Selected projects by Sambat Das: environmental monitoring, property tax appeals, offline-first fleet tools, and business platforms.',
  },
  {
    id: 'experience',
    title: 'Experience',
    description: 'Nearly five years of software engineering experience across freelance work, Web Friend, Dormo Solutions, Wolfmatrix, and Incwell.',
  },
  {
    id: 'stack',
    title: 'Stack',
    description: 'The backend, frontend, mobile, cloud, and integration tools Sambat Das uses to build and maintain production software.',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    description: 'Explore the system patterns behind offline-first mobile apps, multi-tenant platforms, sensor data, and API-driven business systems.',
  },
  {
    id: 'impact',
    title: 'Impact',
    description: 'Measured outcomes from Sambat Das\'s work: fewer support tickets, lower cloud costs, and faster delivery cycles.',
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Get in touch with Sambat Das about backend engineering, architecture, and full-stack product work.',
  },
] as const;

export function useSeo() {
  useEffect(() => {
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    let frame = 0;

    const applySection = (id: string) => {
      const section = sections.find((item) => item.id === id);

      if (!section || section.id === 'top') {
        document.title = BASE_TITLE;
        if (descriptionMeta) descriptionMeta.content = BASE_DESCRIPTION;
        return;
      }

      document.title = `${section.title} | Sambat Das`;
      if (descriptionMeta) descriptionMeta.content = section.description;
    };

    const update = () => {
      frame = 0;
      const line = 140;
      let active: string = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= line) active = section.id;
      });

      applySection(active);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.title = BASE_TITLE;
      if (descriptionMeta) descriptionMeta.content = BASE_DESCRIPTION;
    };
  }, []);
}
