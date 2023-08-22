import { Component, OnInit, Output, Input } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  visible:boolean = false;
  @Input() data:string = '';
  categories:Array<ICategory> = []
  constructor() {
    this.categories = [
      { id: 1, name: 'alugel' },
      { id: 2, name: 'condominio' }
    ]
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
    console.log(id, 'id pra deletar')
  }
  
}
