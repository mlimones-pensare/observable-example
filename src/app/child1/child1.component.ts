import {Component, OnInit} from '@angular/core';
import {BackendProxyService} from '../services/backend-proxy.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  private heroes: string[];

  constructor(private backend: BackendProxyService) {
  }

  ngOnInit() {
    this.backend.getHeroes().subscribe(value => this.updateHeroesInView(value));
  }

  updateHeroesInView(heroes) {
    this.heroes = heroes;
  }
}
