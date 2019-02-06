import { Component, OnInit,Input,ViewEncapsulation,OnChanges,SimpleChanges,
  DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,
  OnDestroy,ViewChild,ElementRef,ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,
  AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() element:{type:string,name:string,content: string}
  @Input() name:string
  @ViewChild('heading') header:ElementRef
  @ContentChild('contentParagraph') paragraph: ElementRef;
  test='test'
  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('OnInit server')
    console.log('init',this.header.nativeElement.textContent)
    console.log('init',this.paragraph.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('onchange')
    console.log('changes',changes)
  }

  ngDoCheck(){
    console.log('docheck')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit')
      console.log('AfterContentInit',this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
    console.log('AfterViewInit',this.header.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
