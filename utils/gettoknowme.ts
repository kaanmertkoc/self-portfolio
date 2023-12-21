import memoji from '../public/memoji.png';
import notebook from '../public/Notebook.png';
import techstack from '../public/TechStack.png';
import bookshelf from '../public/Bookshelf.png';

export const gettoknowme = [
  {
    title: 'About me',
    subtitle: 'Who I am and what I do',
    image: memoji,
    link: '/aboutme',
  },
  {
    title: 'Notebook',
    subtitle: 'My thoughts, insights and reflections',
    image: notebook,
    link: '/notebook',
  },
  {
    title: 'Bookshelf',
    subtitle: `Books and pieces of wisdom I've enjoyed reading`,
    image: bookshelf,
    link: '/bookshelf',
  },
  {
    title: 'Tech Stack',
    subtitle: 'The dev tools, apps, devices, and games I use and play.',
    image: techstack,
    link: '/techstack',
  },
];
