import { Collegue } from './models/Collegue';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  unObjetFourni= new Collegue("001","Mystère","Martin","martinMystère@agent.com","1991/02/21","img/martinmystere.png");
}
