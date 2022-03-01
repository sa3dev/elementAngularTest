import { Directive, HostBinding, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDetailProfile]'
})
export class DetailProfileDirective {


  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    // console.log(this.viewContainer);
    // console.log(this.viewContainer.element)
  }

  constructor(private viewContainer: ViewContainerRef ) {
  }

}
