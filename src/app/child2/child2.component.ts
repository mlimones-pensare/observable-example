import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider.service';
import {log} from 'util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  private numberOfClicks = 0;

  constructor(private provider: ProviderService) {
  }

  ngOnInit() {
    this.provider.getClicks().pipe(map(value => value * 10)).subscribe(value => {
        console.log(value);
        this.numberOfClicks = value;
      }, error1 => {},
      () => console.log('completado!'));
  }

}
