import aposto_example from '../public/aposto_example.png';
import aposto_logo from '../public/aposto_logo.png';
import urword_example from '../public/urword_example.png';
import urword_logo from '../public/urword_logo.png';
import hypercut_logo from '../public/hypercut_logo.png';
import hypercut_example from '../public/hypercut_example.png';

export const SelectedWorks = [
  {
    name: 'Aposto! Mobile (Istanbul)',
    description: `Aposto! is a digital media company based in Istanbul and New York. Beginning in 2021, launched Aposto! mobile application.
        Launched aposto.com by optimizing SEO and user experience first reader web application with features like inbox, reading,
        adding to read list, discovering newsletters, authors and premium models. 
        
        100k Unique downloads on App Store and over 100k monthly visitors to aposto.com with total of 1.5M users visited since
        launched. 
        
        Generated over $100.000 with the features like podcast playing, read list, in depth articles.
        
        `,
    logo: aposto_logo,
    example: aposto_example,
    link: 'https://aposto.com',
  },
  {
    name: 'Urword (NYC)',
    description: `UrWord is an app where users evaluated via their integrity and trust based in NYC. 
    Beginning in 2022, designed and
    developed API, Database Architecture, Mobile Application and Admin Website. UrWord is a New York based company.

        Designed a Firestore database with over 10.000 documents.

        • Developed an API using Firebase Cloud Functions with features       
        like: pacts, connections, user data sharing etc.

        Developed an app using Expo, React Native, TypeScript with over 50 pages and thousand components.
        `,
    logo: urword_logo,
    example: urword_example,
    link: 'https://urword.app',
  },
  {
    name: 'HyperCut (Istanbul)',
    description: `HyperCut is a reels editor where users can see reels templates and use them with ease. In 1 years, i co-developed mobile application
with displaying hypes, filtering, user authentication, paywall, in-app purchase as well as Admin and Landing page using NextJs 14.

Helped Developing React Native Reels Editor app.

Designed and implemented creating hypes, uploading to storage, optimizing files, search, filter and one-time purchases.

Established backend connections and storage using Firebase  Cloud functions.
    `,
    logo: hypercut_logo,
    example: hypercut_example,
    link: 'https://hypercut.app',
  },
];
