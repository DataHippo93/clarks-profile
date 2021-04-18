import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Senior Data Engineer',
  name: 'Clark C. Maine',
  subtitle:
    '"I help companies transform information technology and data into strategic differentiators"',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Clark is a versatile IT Professional focused on building great data pipelines that become strategic differentiators. Clark currently lives and works in Shanghai, China.',
  paragraphTwo: 'Worked at Xerox and Clean Energy Associates',
  paragraphThree: '5+ years of experience in Data Engineering. 2+ Years in renewables',
  paragraphFour: `Holds Masters of Data Analytics, Clarkson University. MBA, Clarkson University. Bachelors of Economics, St. Lawrence University`,
  resume:
    'https://yccgeneralstore.blob.core.windows.net/clarksprofile/Clark%20Maine%20Senior%20Data%20Engineer.pdf?sp=r&st=2021-04-18T03:06:35Z&se=2025-04-18T11:06:35Z&spr=https&sv=2020-02-10&sr=b&sig=gGQZWEKElJsOf3UZnh0huezv5ZYseN1hEgI6pdgU%2BpI%3D', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-el.jpg',
    title: 'Automated EL Image Defect Detection',
    info: 'ML-based defect detection algorithm',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-cabin.jpg',
    title: 'Off-grid Cabin',
    info: 'Off-grid work from home ready AirBNB featuring Starlink',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Email Clark',
  email: 'cmaine@ycconsulting.biz',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ClarkMaine',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/clarkmaine/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DataHippo93',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
