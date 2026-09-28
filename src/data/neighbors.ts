export interface Neighbor {
  id: string;
  name: string;
  handle: string;
  place: string;
}

export const neighbors = {
  anjali: {
    id: 'anjali',
    name: 'Anjali Menon',
    handle: 'anjali.menon',
    place: 'Kakkanad',
  },
  meera: {
    id: 'meera',
    name: 'Meera Joseph',
    handle: 'meera.joseph',
    place: 'Edappally',
  },
  rahul: {
    id: 'rahul',
    name: 'Rahul Thomas',
    handle: 'rahul.thomas',
    place: 'Palarivattom',
  },
  priya: {
    id: 'priya',
    name: 'Priya Nair',
    handle: 'priya.kitchen',
    place: 'Vazhakkala',
  },
  leela: {
    id: 'leela',
    name: 'Leela Thomas',
    handle: 'leela.home',
    place: 'Thrikkakara',
  },
  devaki: {
    id: 'devaki',
    name: 'Devaki Amma',
    handle: 'devaki.amma',
    place: 'Kochi',
  },
} as const satisfies Record<string, Neighbor>;

export type NeighborId = keyof typeof neighbors;

export const neighborList = Object.values(neighbors);

export const getNeighbor = (id: string) =>
  neighbors[id as NeighborId] ?? neighbors.anjali;
