import {
  Hammer,
  Layers,
  Paintbrush,
  Zap,
  Droplets,
  Grid3x3,
  DoorOpen,
  Armchair,
  Ruler,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Hammer,
    title: 'Demontaža i rušenje',
    description: 'Kompletno rušenje, demontaža i čišćenje šuta sa profesionalnom opremom.',
  },
  {
    icon: Layers,
    title: 'Gipsarski radovi',
    description: 'Spušteni plafoni, pregradni zidovi i dekorativne obloge od Knauf sistema.',
  },
  {
    icon: Paintbrush,
    title: 'Molerski radovi',
    description: 'Gletovanje, bojenje i dekorativne tehnike za savršene završne površine.',
  },
  {
    icon: Zap,
    title: 'Električarski radovi',
    description: 'Kompletne elektroinstalacije, LED rasveta i pametni sistemi osvetljenja.',
  },
  {
    icon: Droplets,
    title: 'Vodovod i kanalizacija',
    description: 'VIK instalacije, zamena cevi i kompletno opremanje mokrog čvora.',
  },
  {
    icon: Grid3x3,
    title: 'Parketarski i keramičarski radovi',
    description: 'Postavljanje parketa, laminata, keramike i kamena po najvišim standardima.',
  },
  {
    icon: DoorOpen,
    title: 'Stolarija',
    description: 'Ugradnja unutrašnje i spoljne stolarije – vrata, prozori i obloge.',
  },
  {
    icon: Armchair,
    title: 'Nameštaj po meri',
    description: 'Projektovanje i izrada nameštaja prilagođenog vašem prostoru i stilu.',
  },
  {
    icon: Ruler,
    title: 'Projektovanje',
    description: 'Arhitektonski i dizajnerski nacrti za vašu viziju idealnog prostora.',
  },
];
