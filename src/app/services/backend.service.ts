import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private heroes = ['rapidin', 'goma elastica'];

  constructor() {
  }

  async getHeroes(): Promise<string[]> {
    return JSON.parse(JSON.stringify(this.heroes));
  }

  addHero(newHero: string): Promise<any> {
    this.heroes.push(newHero);
    return of({message: 'ok'}).toPromise();
  }
}
