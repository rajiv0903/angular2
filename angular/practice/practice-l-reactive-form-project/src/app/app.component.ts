
import { Component , OnInit, } from '@angular/core';
import {  FormGroup,  FormControl , Validators, FormArray} from '@angular/forms';

import { Observable } from  'rxjs/Observable';

//ReactiveFormsModule for Nested Form 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  //Custom Validators 
  forbiddenUserNames:[string] =['Chris', 'Anna'];

  //Programmatically Form
  signupForm: FormGroup;



  ngOnInit():void {
    //initiate the form here 
    //add control
    this.signupForm = new FormGroup({
        'userData': new FormGroup({
          'username': new FormControl (null, [Validators.required, this.forbiddenNames.bind(this) ]),
          //asynchrounous validator
          'email': new FormControl (null,  [Validators.required , Validators.email],
           this.forbiddenEmails.bind(this)),
        }),
        'gender': new FormControl ('male'),
        'hobbies': new FormArray([])
       }
    );

    //We do have two Observable - React on Status or Value
    this.signupForm.valueChanges.subscribe(
      (data ) =>{console.log(data)},
      (error ) =>{console.log(error)},
      ( ) =>{console.log('Completed!')}
    );

    this.signupForm.statusChanges.subscribe(
      (status ) =>{console.log(status)},
      (error ) =>{console.log(error)},
      ( ) =>{console.log('Completed!')}
    );

    this.signupForm.setValue({
        'userData':{
          'username':'Rajiv',
          'email':'rajiv.juprod@gmail.com'
        },
        'gender' : 'male',
        'hobbies':[]
      }
    );

    this.signupForm.patchValue({
        'userData':{
          'username':'Anna'
        }
      }
    );

     //   'username': new FormControl (null, [Validators.required ]),
      //   'email': new FormControl (null,  [Validators.required , Validators.email]),
      //   'gender': new FormControl ('male')
      // }
      //nested data

  }

  //no reference is required
  onSubmit(): void{
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(): void{
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  //custom validator - it is just a function
  //{}
  forbiddenNames(control: FormControl): {[s: string] : boolean} {
    if(this.forbiddenUserNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    //you should pass nothiing or null
    //return {'nameIsForbidden': true}
    return null;
  }

  /**
   * how to check username is valid from server side 
   * for that we need asynchrounous 
   */
  forbiddenEmails(control: FormControl): Promise<any>| Observable<any>{
    const promise = new Promise<any>(
      (resolve, reject) =>{
          setTimeout(function() {
            if(control.value === 'test@test.com'){
              resolve({'emailIsForbidden': true});
            }
            else{
              resolve(null);
            }
          }, 1500);
      }
    );
    return promise;
  }
}
