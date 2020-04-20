import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyD3ZyB0by0bnW6ZhtrS5BJCeFeseAM_Guc",
      authDomain: "bookshelves-b78f6.firebaseapp.com",
      databaseURL: "https://bookshelves-b78f6.firebaseio.com",
      projectId: "bookshelves-b78f6",
      storageBucket: "bookshelves-b78f6.appspot.com",
      messagingSenderId: "585217508054",
      appId: "1:585217508054:web:93b2ee0c557ae90eccbf77"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
