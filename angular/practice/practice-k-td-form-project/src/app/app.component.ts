import { Component, ViewChild } from '@angular/core';

import { NgForm} from '@angular/forms';

interface User {
  username:string,
  email:string,
  secret:string,
  questionAnswer:string,
  gender:string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * There is no submission of form as it is SPA 
 * We need to handle with Angualr 
 * - Form Validation 
 * - Change Display - Warning etc. 
 * - Form actiion or method needs to handle <form action "" method=""> ..
 * - Typescript will validate the form data 
 * - Store Form metadata like valid flag
 * 
 * @ Template Driven and Reactive 
 * Template- Driven - Angular infers the Form Object from the DOM 
 *  It creates Javascript Object for the form 
 * Reactive - Form is created programmatically in Typescript and synchronized 
 * with DOM (Gives greater control)
 * 
 */

export class AppComponent {

 //Alternate approach using ViewChild
  //It is required to get access before form Submitted
  @ViewChild('f')  signupForm: NgForm;

  //prepolate default value 
  defaultQuestion:string = 'pet';
  answer:string ='';

  //Radio Button 
  genders:[string] = ['male', 'female'];

  //Display the form data upon submission 
  user: User;
  submitted:boolean = false;

  suggestUserName(): void {
    const suggestedName = 'Superuser';
    //This is not best approach as already existing data 
    //got overwritten like email becomes empty and it becomes invalid
    // this.signupForm.setValue(
    //   {
    //     userData:{
    //       username:suggestedName,
    //       email:''
    //     },
    //     secret: 'pet',
    //     questionAnswer:'',
    //     gender:'male'
    //   }
    // );
    /**
     * Use Patch value
     */
    this.signupForm.form.patchValue({
         userData:{
           username:suggestedName
         }
      }
    );

  }
  /**
   * What is user input 
   */
  // onSubmit(form: HTMLFormElement): void {
  //   console.log('Submitted');
  //   console.log(form);
  // }

  //Using NgForm to access JS Object for each control
  // onSubmit(form: NgForm): void {
  //   console.log('Submitted');
  //   console.log(form);
  // }

 

  onSubmit(form: NgForm): void {
    console.log('Submitted');
    console.log(this.signupForm);
    this.submitted = true;
    this.user={
      username: this.signupForm.value.userData.username, 
      email: this.signupForm.value.userData.email, 
      secret: this.signupForm.value.secret, 
      questionAnswer: this.signupForm.value.questionAnswer,
      gender: this.signupForm.value.gender 
    };
    
    this.signupForm.reset();
  }
}
