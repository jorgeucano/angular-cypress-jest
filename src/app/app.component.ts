import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cypress';
  load = false;
  items: Observable<any>;

  constructor() {
    /*this.items = this.afs.collection(
      'items', ref => ref.where('name', '==', 'pe')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );*/
  }

  add(newItem: any) {
    /*this.afs.collection('items').add(newItem)
      .then(
        x => console.log(x)
      );*/
  }

  modify(id) {
/*this.afs.doc('items/' + id).update({name: 'roberto'})
  .then(
    x => console.log(x)
  );*/
}

login() {
// this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
}
logout() {
// this.afAuth.auth.signOut();
}
}
