import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropDown',
})
export class DropdownDirective {
  wasInside = false;
  @HostBinding('class.show') isOpen: boolean = false;

  @HostListener('click') toggleopen() {
    this.isOpen = !this.isOpen;
    this.wasInside = true;
  }

  @HostListener('document:click') clickOut() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }

  constructor() {}
}
