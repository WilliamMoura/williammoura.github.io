import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  private allowedKeys: Array<string>;
  constructor(private el: ElementRef) {
    this.allowedKeys = Array(
      'Backspace',
      'ArrowRight',
      'ArrowLeft',
      'Delete',
      'Home',
      'End'
    );
  }

  @HostListener('keydown', ['$event']) onKeydow(evt: KeyboardEvent) {
    return this.onlyNumber(evt)
  }


  private onlyNumber(event: KeyboardEvent): boolean {
    this.eraseLeftZero();
    if (this.allowedKeys.includes(event.key) || !isNaN(Number(event.key))) {
      return true;
    }
    return false;
  }

  private eraseLeftZero() {
    if (this.el.nativeElement.value == '0') {
      this.el.nativeElement.value = '';
    }
  }
}
