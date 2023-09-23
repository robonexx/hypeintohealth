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
      title: 'exercises',
      path: '/exercises',
      id: 2,
    },
    {
      title: 'inspiration',
      path: '/inspo',
      id: 3,
    },
    {
      title: 'foods',
      path: '/foods',
      id: 4,
    },
  ];