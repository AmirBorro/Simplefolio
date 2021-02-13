import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amir Borro | Front-end web developer', // e.g: 'Name | Developer'
  lang: 'en@', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Amir Borro',
  subtitle: "I'm a React developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:
    'After an extensive career in events management and production, I decided to shift to what really passionate me: programming!',
  paragraphTwo: 'I started by learning WordPress and quickly dived deeper into React.js',
  paragraphThree: "If you'd like to work with me, have a look at my resume and let's get in touch",
  resume: 'https://docdro.id/QdwXKJT', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'BoxingFactoryProject.jpeg',
    title: 'Boxing Factory',
    info: 'Website built using WordPress.',
    info2: 'E-commerce, multi-lingual, integration of a third-party booking software.',
    url: 'wwww.boxingfactory.be',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Prosurf.jpeg',
    title: 'Pro Surf Morocco',
    info: 'Website built using WordPress.',
    info2:
      'The challenge was to offer a solution for making bookings easy in 4 langages and implementing a blog.',
    url: 'https://www.prosurfmorocco.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hello@amirborro.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/amirborro',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AmirBorro',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
