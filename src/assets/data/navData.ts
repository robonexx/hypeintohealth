export type Item = {
    id: number;
    title: string;
    path: string;
  };
  

export const navData: Item[] = [
    {
      title: 'home',
      path: '/',
      id: 1,
    },
    {
      title: 'planner',
      path: '/planner',
      id: 2,
    },
    {
      title: 'inspiration',
      path: '/inspiration',
      id: 3,
    },
    {
      title: 'contact',
      path: '/contact',
      id: 4,
    },
  ];