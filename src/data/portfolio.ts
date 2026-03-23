export type Category = 'sve' | 'suva-gradnja' | 'rasveta' | 'kupatila' | 'kompletne-adaptacije';

export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<Category, 'sve'>;
  featured: boolean;
}

export const categoryLabels: Record<Category, string> = {
  'sve': 'Sve',
  'suva-gradnja': 'Suva gradnja',
  'rasveta': 'Rasveta',
  'kupatila': 'Kupatila',
  'kompletne-adaptacije': 'Kompletne adaptacije',
};

// Import all images
import photo01 from '../assets/images/photo-01.jpg';
import photo02 from '../assets/images/photo-02.jpg';
import photo03 from '../assets/images/photo-03.jpg';
import photo04 from '../assets/images/photo-04.jpg';
import photo05 from '../assets/images/photo-05.jpg';
import photo06 from '../assets/images/photo-06.jpg';
import photo07 from '../assets/images/photo-07.jpg';
import photo08 from '../assets/images/photo-08.jpg';
import photo09 from '../assets/images/photo-09.jpg';
import photo10 from '../assets/images/photo-10.jpg';
import photo11 from '../assets/images/photo-11.jpg';
import photo12 from '../assets/images/photo-12.jpg';
import photo13 from '../assets/images/photo-13.jpg';
import photo14 from '../assets/images/photo-14.jpg';
import photo15 from '../assets/images/photo-15.jpg';
import photo16 from '../assets/images/photo-16.jpg';
import photo17 from '../assets/images/photo-17.jpg';
import photo18 from '../assets/images/photo-18.jpg';
import photo19 from '../assets/images/photo-19.jpg';
import photo20 from '../assets/images/photo-20.jpg';
import photo21 from '../assets/images/photo-21.jpg';
import photo22 from '../assets/images/photo-22.jpg';
import photo23 from '../assets/images/photo-23.jpg';
import photo24 from '../assets/images/photo-24.jpg';
import photo25 from '../assets/images/photo-25.jpg';
import photo26 from '../assets/images/photo-26.jpg';
import photo27 from '../assets/images/photo-27.jpg';
import photo28 from '../assets/images/photo-28.jpg';
import photo29 from '../assets/images/photo-29.jpg';
import photo30 from '../assets/images/photo-30.jpg';
import photo31 from '../assets/images/photo-31.jpg';
import photo32 from '../assets/images/photo-32.jpg';
import photo33 from '../assets/images/photo-33.jpg';
import photo34 from '../assets/images/photo-34.jpg';

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: photo01, alt: 'LED rasveta u hodniku - geometrijski dizajn u gipsu', category: 'rasveta', featured: true },
  { id: 2, src: photo02, alt: 'Završena adaptacija prostora', category: 'kompletne-adaptacije', featured: false },
  { id: 3, src: photo03, alt: 'Kompletna adaptacija enterijera', category: 'kompletne-adaptacije', featured: false },
  { id: 4, src: photo04, alt: 'Metalna konstrukcija za pregradne zidove', category: 'suva-gradnja', featured: true },
  { id: 5, src: photo05, alt: 'Montaža gips ploča i zidnih obloga', category: 'suva-gradnja', featured: false },
  { id: 6, src: photo06, alt: 'Hodnik sa LED trakama u spuštenom plafonu', category: 'rasveta', featured: true },
  { id: 7, src: photo07, alt: 'Osvetljeno stepenište sa LED rasvetom', category: 'rasveta', featured: true },
  { id: 8, src: photo08, alt: 'Gletovanje i malterisanje zidova', category: 'suva-gradnja', featured: false },
  { id: 9, src: photo09, alt: 'Konstrukcija metalnih profila za suvu gradnju', category: 'suva-gradnja', featured: true },
  { id: 10, src: photo10, alt: 'Montaža metalnih profila u komercijalnom prostoru', category: 'suva-gradnja', featured: false },
  { id: 11, src: photo11, alt: 'Moderno kupatilo sa keramikom i LED nišom', category: 'kupatila', featured: true },
  { id: 12, src: photo12, alt: 'Spušteni plafon sa integrisanom LED rasvetom', category: 'rasveta', featured: true },
  { id: 13, src: photo13, alt: 'Vatrostalni gips oko elektro ormana', category: 'suva-gradnja', featured: false },
  { id: 14, src: photo14, alt: 'Priprema prostorije za renoviranje', category: 'suva-gradnja', featured: false },
  { id: 15, src: photo15, alt: 'Demontaža i rušenje starog prostora', category: 'kompletne-adaptacije', featured: false },
  { id: 16, src: photo16, alt: 'Sirov prostor sa gips pločama spremnim za montažu', category: 'suva-gradnja', featured: false },
  { id: 17, src: photo17, alt: 'Kamin zid sa dekorativnim panelima i LED rasvetom', category: 'kompletne-adaptacije', featured: true },
  { id: 18, src: photo18, alt: 'Postavljanje keramičkih pločica u kupatilu', category: 'kupatila', featured: false },
  { id: 19, src: photo19, alt: 'Priprema garažnog prostora za adaptaciju', category: 'kompletne-adaptacije', featured: false },
  { id: 20, src: photo20, alt: 'Grubi radovi u kupatilu - vodovod i podloga', category: 'kupatila', featured: false },
  { id: 21, src: photo21, alt: 'Dnevna soba sa geometrijskim LED plafonom', category: 'rasveta', featured: true },
  { id: 22, src: photo22, alt: 'Instalacija track rasvete', category: 'rasveta', featured: false },
  { id: 23, src: photo23, alt: 'Ugradnja nameštaja po meri', category: 'kompletne-adaptacije', featured: false },
  { id: 24, src: photo24, alt: 'Moderna crna kuhinja sa spot rasvetom', category: 'kompletne-adaptacije', featured: true },
  { id: 25, src: photo25, alt: 'Radnik montira metalnu konstrukciju', category: 'suva-gradnja', featured: false },
  { id: 26, src: photo26, alt: 'Spoljna stolarija - prozor sa ciglom', category: 'kompletne-adaptacije', featured: false },
  { id: 27, src: photo27, alt: 'Montaža viseće rasvete', category: 'rasveta', featured: false },
  { id: 28, src: photo28, alt: 'Priprema prostorije - zaštita i rasveta', category: 'rasveta', featured: false },
  { id: 29, src: photo29, alt: 'Završen prostor sa parketom i LED stepeništem', category: 'kompletne-adaptacije', featured: true },
  { id: 30, src: photo30, alt: 'Elegantna soba sa zidnim panelima i track rasvetom', category: 'kompletne-adaptacije', featured: true },
  { id: 31, src: photo31, alt: 'Hodnik sa poliranim parketom i kamenim zidom', category: 'kompletne-adaptacije', featured: true },
  { id: 32, src: photo32, alt: 'Zidni paneli u fazi izgradnje', category: 'suva-gradnja', featured: false },
  { id: 33, src: photo33, alt: 'Dnevna soba sa kamenim akcentom i parketom', category: 'kompletne-adaptacije', featured: true },
  { id: 34, src: photo34, alt: 'Dekorativni gips plafon u fazi izrade', category: 'suva-gradnja', featured: false },
];

export interface BeforeAfterPair {
  id: number;
  before: { src: string; label: string };
  after: { src: string; label: string };
  title: string;
}

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 1,
    before: { src: photo05, label: 'Pre' },
    after: { src: photo30, label: 'Posle' },
    title: 'Zidne obloge i LED rasveta',
  },
  {
    id: 2,
    before: { src: photo20, label: 'Pre' },
    after: { src: photo11, label: 'Posle' },
    title: 'Renoviranje kupatila',
  },
  {
    id: 3,
    before: { src: photo15, label: 'Pre' },
    after: { src: photo33, label: 'Posle' },
    title: 'Kompletna adaptacija stana',
  },
];
