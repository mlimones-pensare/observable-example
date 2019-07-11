import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  private numberOfClicks = 0;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getClicks().subscribe(value => {
        console.log(value);
        this.numberOfClicks = value;
      }, error1 => {},
      () => console.log('completado!'));
  }

}
