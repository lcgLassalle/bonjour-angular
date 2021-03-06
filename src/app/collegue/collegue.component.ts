import { Collegue } from './../models/Collegue';
import { Component, OnInit, Input } from '@angular/core';
import { CollegueMock } from '../mock/collegue.mock';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;
  constructor() {}

  ngOnInit(): void {
    this.col =new CollegueMock().col;
  }

  creationCollegue() {
    console.log("Création d'un nouveau collègue")
  }

  modifierCollegue(){
    console.log("Modification de la fiche collègue")
  }

}
