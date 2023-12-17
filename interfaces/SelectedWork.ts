import { StaticImageData } from 'next/image';

export interface SelectedWork {
  name: string;
  description: string;
  logo: StaticImageData;
  example: StaticImageData;
  link: string;
}
