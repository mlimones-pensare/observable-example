import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {

  private numberOfClicks = 0;

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }

  increaseClicks(){
    this.numberOfClicks += 1;
    this.provider.updateClicks(this.numberOfClicks);
  }

}
