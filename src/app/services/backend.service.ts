import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private heroes = ['rapidin', 'goma elastica'];

  constructor() { }

  async getHeroes(): Promise<string[]> {
    return JSON.parse(JSON.stringify(this.heroes));
  }

  async addHero(newHero: string): Promise<any> {
    this.heroes.push(newHero);
    return {message: 'ok'};
  }
}
