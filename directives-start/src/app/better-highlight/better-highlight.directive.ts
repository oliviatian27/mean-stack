import { Directive,OnInit,Renderer2,ElementRef,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string="red"
  @Input('appBetterHighlight') highlightColor:string="blue"
  @HostBinding('style.backgroundColor') backgroundColor:string

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    this.backgroundColor=this.defaultColor
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','pink')
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue')
    this.backgroundColor=this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','yellow')
    this.backgroundColor=this.defaultColor
  }
}
