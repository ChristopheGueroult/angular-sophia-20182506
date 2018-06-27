import { Directive, Renderer2, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Output } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  @Input() appCollapse: Boolean;
  @Output() navCollapse: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onClick() {
    const elem = this.elementRef.nativeElement;
    this.renderer.removeClass(elem, 'show');
    // rete plus qu'à utiliser un output pour passer true au parent
    this.navCollapse.emit(true);
  }

}
