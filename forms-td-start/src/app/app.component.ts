import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion="pet";

  answer: string;
  genders=['male','female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue(
    //   {userData:{
    //     username:suggestedName,
    //       email:''
    // },
    //     secret:'pet',
    //     questionAnswer:'',
    //     gender:'male'
    //   }
    // )
    this.signupForm.form.patchValue(
      {
        userData:{
          username:suggestedName
        }
      }
    )
  }
  // onSubmit(f:NgForm){
  //   //    console.log(f)
  //   // }

  onSubmit(){
    console.log(this.signupForm)
  }
}
