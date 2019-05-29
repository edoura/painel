import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map, take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  uid: any;

  constructor(private afAuth: AngularFireAuth,
    private router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        localStorage.setItem('uid', JSON.stringify(this.uid));
        JSON.parse(localStorage.getItem('uid'));
      } else {
        localStorage.setItem('uid', null);
        JSON.parse(localStorage.getItem('uid'));
      }
    })
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else if (this.currentUserAnonymous) { return 'Anonymous' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  //// Social Auth ////

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.authState = credential.user
        //this.updateUserData()
      })
      .catch(error => console.log(error));
  }


  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user
        //this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        //this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        //this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }


  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut().then(() => {
      localStorage.setItem('uid', null);
      this.router.navigate(['/login'])
    });
  }

  get isLoggedIn(): boolean {
    const uid = JSON.parse(localStorage.getItem('uid'));
    return (uid !== null) ? true : false;
  }

  /*  isAuthenticated() {
      return this.currentUserObservable.pipe(
        take(1),
        map(user => {
          console.log('user: ', user);
          return !!user
        }),
        tap(loggedIn => {
          console.log("loggedIn: ", loggedIn);
          if (!loggedIn) {
            console.log("access denied");
            this.router.navigate(['/login']);
          }
        })
      );
    }
  
    // Helpers //
  
      private updateUserData(): void {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
  
        let path = `users/${this.currentUserId}`; // Endpoint on firebase
        let data = {
          email: this.authState.email,
          name: this.authState.displayName
        }
  
        this.db.object(path).update(data)
          .catch(error => console.log(error));
  
      } */

}
