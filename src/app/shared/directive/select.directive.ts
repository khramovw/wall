import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[wallSelect]'
})
export class SelectDirective implements OnInit {

  constructor(
    private select: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    const {nativeElement} = this.select;
    this.render.listen(nativeElement, 'click', (e: any) => {
      e.target.parentElement.parentElement.classList[1]
      ? this.render.removeClass(nativeElement, 'select-open')
        : this.render.addClass(nativeElement, 'select-open');
    });
    this.render.listen(nativeElement, 'mouseleave', (e: any) => {
      this.render.removeClass(nativeElement, 'select-open');
    });
  }
}
