import { CatItem } from './../../interfaces/cat-item';
import { CatListService } from './../../services/cat-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  public catList: CatItem[];
  constructor(private catListService: CatListService) {this.catList = []; }

  ngOnInit(): void {
    this.catList = this.catListService.getCatList()
  }

}
