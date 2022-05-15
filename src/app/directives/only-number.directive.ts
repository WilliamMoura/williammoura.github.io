import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) {console.log('iea') }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('ta vindo ae')
  }
  

  private onlyNumber() {
    var iKeyCode = (this.el.nativeElement.which) ? this.el.nativeElement.which : this.el.nativeElement.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
  }
}