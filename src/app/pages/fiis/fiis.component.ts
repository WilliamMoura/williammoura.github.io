import { FiisService } from './../../fiis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiis',
  templateUrl: './fiis.component.html',
  styleUrls: ['./fiis.component.scss']
})
export class FiisComponent implements OnInit {

  public fiis;
  constructor(private service: FiisService) {
    this.fiis = this.service.index();
    console.log(this.fiis);
   }

  ngOnInit(): void {
  }

}
