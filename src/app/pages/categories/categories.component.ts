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
    this.categories = [
      { id: 1, name: 'alugel' },
      { id: 2, name: 'condominio' }
    ]
    const teste = this.service.index().then((data) => {
      console.log(data, 'dasasd')
    });
    console.log(teste, 'teste')

   }

  ngOnInit(): void {
  }
  public addCategory(): void {    
    this.visible = this.visible?false:true
  }

  public salvar(newData: string): boolean
  {
    this.categories.push({
      id: (this.categories.length+1),
      name: newData
    })
    this.visible = false;
    return true;
  }

  public deletar(id:number):void
  {
    let findIndex = 0;
    this.categories.forEach((item, index) => {
      if (item.id === id) {
        findIndex = index;
      }
    })    
    this.categories.splice(findIndex, 1)    
  }
  
}
