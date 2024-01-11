import { AiOutlineHome } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import { FiFileText } from 'react-icons/fi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { LuCalendarDays } from 'react-icons/lu';

export type Item = {
  name?: string;
  slug: string;
  description?: string;
  icon?: React.ReactNode;
};

export const links: { name?: string; items: Item[] }[] = [
  {
    items: [
      {
        icon: <AiOutlineHome size={'20px'} />,
        name: 'Dashboard',
        slug: 'dashboard',
        description: 'Dashboard',
      },
      {
        icon: <IoPeopleOutline size={'20px'} />,
        name: 'Favourites',
        slug: 'favourites',
        description: 'Favourites',
      },
      {
        icon: <FiFileText size={'20px'} />,
        name: 'Posts',
        slug: 'posts',
        description: 'Posts',
      },
      {
        icon: <AiOutlinePieChart size={'20px'} />,
        name: 'Analytics',
        slug: 'analytics',
        description: 'Analytics',
      },
      {
        icon: <AiOutlinePieChart size={'20px'} />,
        name: 'Project Analytics',
        slug: 'project-analytics',
        description: 'Analytics',
      },
      {
        icon: <AiOutlinePieChart size={'20px'} />,
        name: 'Influencer Analytics',
        slug: 'influencer-analytics',
        description: 'Analytics',
      },
      {
        icon: <LuCalendarDays size={'20px'} />,
        name: 'Campaign Creation',
        slug: 'campaign-creation',
        description: 'Campaign Creation',
      },
    ],
  },
];
