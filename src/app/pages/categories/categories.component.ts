import { Component, OnInit, Output, Input } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  visible:boolean = false;
  @Input() data:string = '';
  categories:Array<ICategory> = []
  constructor(private service:CategoriesService) {
    this.index()
   }

  ngOnInit(): void {
  }
  public addCategory(): void {    
    this.visible = this.visible?false:true
  }

  public save(newData: string): boolean
  {
    let category: ICategory = {
      name:newData,
      type_id: 1
    };
    const resp = this.service.store(category)
    .subscribe((response) => {
      console.log(response, 'response do post')
    })
    console.log(resp, 'resp')
    this.visible = false;
    return true;
  }

  public delete(id:number):void
  {    
    this.service.delete(id).subscribe((response) => {

      this.index()
    })
  }

  public index(): void
  {
    this.service.index().subscribe((response) => {
      this.categories = response
    })
  }
  
}
