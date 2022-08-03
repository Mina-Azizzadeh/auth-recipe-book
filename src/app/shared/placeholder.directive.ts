import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Placeholder]'
})
export class PlaceholderDirective {

  constructor(public ViewContainerRef : ViewContainerRef) { }

}
