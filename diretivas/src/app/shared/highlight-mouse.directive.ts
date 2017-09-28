import { Directive, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    );*/
    this.backgroundColor = 'white';
  }

  //Quando NÃO precisar de manipulação extra
  //@HostBinding('style.backgroundColor') backgroundColor: string;

  //Quando precisar de manipulação extra
  @HostBinding('style.backgroundColor') get setColor(){
    //manipulação extra

    return this.backgroundColor;
  }

  private backgroundColor: string;

  //constructor(private _elementRef: ElementRef, private _renderer: Renderer) {}

  /**
   *
   */
  constructor() {}

}