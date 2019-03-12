import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from "rxjs";
import {map} from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  numbersObsSubsribtion:Subscription;
  customObsSubsribtion:Subscription;
  constructor() { }

  // @ts-ignore
  ngOnInit() {
    const myNumbers =interval(1000)
      .pipe(map(
        (data:number)=>{
          return data*2;
        }
      );)
    this.numbersObsSubsribtion =myNumbers.subscribe(
      (number:number)=>{
        console.log(number)
      }
    );
    const myObservable = Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package')
      },2000);
      setTimeout(()=>{
        observer.next('second package')
      },4000);
      setTimeout(()=>{
        observer.complete()
      },5000);
      setTimeout(()=>{
        observer.next('third package')
      },6000);
      setTimeout(()=>{
        observer.error('dosnt work')
      },7000)
    });

    this.customObsSubsribtion=myObservable.subscribe(
      (data:string)=>{
        console.log(data)
      },
      (error:string)=>{
        console.log(error)
      },
      ()=>{
        console.log('completed')
      }
  }

  ngOnDestroy(): void {
     this.numbersObsSubsribtion.unsubscribe();
     this.customObsSubsribtion.unsubscribe();
  }

}
