import { StaticImageData } from 'next/image';

export interface AboutMeCard {
  title: string;
  subtitle: string;
  image: StaticImageData;
  link: string;
}
