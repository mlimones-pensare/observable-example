import { Injectable } from '@angular/core';
import {Observable, of, interval, Subscriber, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private subject: Subject<number>;

  constructor() {
    this.subject = new Subject();
  }


  getClicks(): Observable<number> {
    return this.subject;
  }


  updateClicks(numberOfClisk){
    this.subject.next(numberOfClisk);
  }

}
