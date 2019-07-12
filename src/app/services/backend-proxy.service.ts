import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {BackendService} from './backend.service';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class BackendProxyService {
  private subject: Subject<string[]>;

  constructor(private backend: BackendService) {
  }

  getOrCreateSubject() {
    if (!this.subject) {
      this.subject = new BehaviorSubject([]);
      this.makeRequestAndSendEvent();
    }
    return this.subject;
  }

  makeRequestAndSendEvent() {
    console.log('making request!');
    this.backend.getHeroes().then(value => this.subject.next(value));
  }

  getHeroes(): Observable<string[]> {
    return this.getOrCreateSubject();
  }

  async addHero(newHero) {
    await this.backend.addHero(newHero);
    this.makeRequestAndSendEvent();
  }
}
