import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[wallAcardion]'
})
export class AcardionDirective implements OnInit {

  constructor(
    private select: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    const {nativeElement} = this.select;

    this.render.listen(nativeElement, 'click', (e: any) => {
      if ( e.target.children.length === 0 ) {return; }
      e.target.children[0].classList[1]
        ? this.render.removeClass(nativeElement.children[0], 'colapsed')
          : this.render.addClass(nativeElement.children[0], 'colapsed');
    });
  }
}
