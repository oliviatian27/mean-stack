import {Directive,HostListener,HostBinding} from '@angular/core'

@Directive({
  selector:'[appDropdown]'
})

export class DropdownDirective{
  @HostBinding('class.open') isOpen=false

  // @HostListener('click') toggleOpen(){
  //   this.isOpen=!this.isOpen
  // }
 //  @HostListener('click', ['$event.target'])
 //  onClick(btn) {
 //    this.isOpen=!this.isOpen
 // }
 @HostListener('click')
   onClick() {
     this.isOpen=!this.isOpen
  }

}
