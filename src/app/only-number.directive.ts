import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('window:keydown.enter', ['$event']) 
  handleKeyDown(event: KeyboardEvent) {
    console.log('veio aqui', 'evt')
    console.log(this, 'thists')
  }

}
