import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';


  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhyWfgc_9hOaErrBTD-a4_SzkJf0wZArw',
      authDomain: 'recipe-book-ee4b1.firebaseapp.com'
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
