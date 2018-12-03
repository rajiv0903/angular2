# PracticeTNgrxEffects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Side Effects
npm install @ngrx/effects
Property $ sign indicates Observable

## Side Effects
This fraction of code is called side effects:
firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.store.dispatch(new authActions.SignUp());
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.store.dispatch(new authActions.SetToken(token));
              }
            )
        }
      )
We will modify the code and will use NgRx Side Effect:
Refer AuthEffects and Signin and Signup components
