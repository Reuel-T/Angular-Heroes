import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'The Flash' },
      { id: 12, name: 'Donna Troy' },
      { id: 13, name: 'Starfire' },
      { id: 14, name: 'Raven' },
      { id: 15, name: 'Changeling' },
      { id: 16, name: 'Cyborg' },
      { id: 17, name: 'Arsenal' },
      { id: 18, name: 'Superboy' },
      { id: 19, name: 'Robin' },
      { id: 20, name: 'Kid Flash' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}