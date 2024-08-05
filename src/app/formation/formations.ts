import { formation } from './formation';

export const FORMATIONS: formation[] = [
  {
    id: 1,
    title: 'Baccalauréat Scientifique - Lycée Jean-Baptiste Corot',
    description: 'Baccalauréat Scientifique option Mayhématiques au lycée Jean-Baptiste Corot à Savigny-sur-Orge',
    icon: 'school',
    date: new Date('2015-07-01'),
  },
  {
    id: 2,
    title: 'Licence Mathématiques - Université de Toulon',
    description: "Obtention d'une licence en mathématiques à l'université de Toulon, après avoir commencé à l'université Paris-Sud en licence Maths, Physique et Infomatique",
    icon: 'school',
    date: new Date('2022-07-01'),
  },
  {
    id: 3,
    title: "Diplome d'ingénieur en informatique et multimédia - CNAM PACA",
    description: "Obtention d'un diplôme d'ingénieur en informatique et multimédia au conservatoire national des arts et métiers",
    icon: 'school',
    date: new Date('2025-07-01'),
  }
];
