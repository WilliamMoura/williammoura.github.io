import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() public search: string = 'William'
  constructor() { }

  ngOnInit(): void {
  }

  public searchh(): void {
    console.log(this.search, 'sarc')
  }

}
