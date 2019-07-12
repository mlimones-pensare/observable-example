import {Component, OnInit} from '@angular/core';
import {BackendProxyService} from '../services/backend-proxy.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
  private heroes = [];
  private newHero: string;

  constructor(private backend: BackendProxyService) {
  }

  ngOnInit() {
    this.backend.getHeroes().subscribe(value => this.updateHeroesInView(value));
  }

  updateHeroesInView(heroes) {
    this.heroes = heroes;
  }

  async addHero() {
    await this.backend.addHero(this.newHero);
    this.newHero = '';
  }
}
