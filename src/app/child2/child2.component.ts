import {Component, OnInit} from '@angular/core';
import {BackendProxyService} from '../services/backend-proxy.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  private heroes: string[];
  private subscription;

  constructor(private backend: BackendProxyService) {
  }

  ngOnInit() {
  }

  lateSubscribe() {
    if (!this.subscription) {
      this.subscription = this.subscribe();
    }
  }

  subscribe() {
    return this.backend.getHeroes().subscribe(value => this.updateHeroesInView(value));
  }

  updateHeroesInView(heroes) {
    this.heroes = heroes;
  }

}
