import { Component } from '@angular/core';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component {
  expent:boolean=true;
  expresion:boolean=false;
  experiment:boolean=false;
  Opensent(){
this.expent=!this.expent;
this.expresion=!this.expresion;
  }
  Opensents(){
    this.expresion=!this.expresion;
    this.expent=!this.expent;
  }
  Opensentss(){
    this.expent=!this.expent;this.experiment=!this.experiment;
  }
  Openssent(){
    this.experiment=!this.experiment;
    this.expent=!this.expent;
  }
}
