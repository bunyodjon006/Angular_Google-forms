import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Modal2Component } from '../modal2/modal2.component';
import { Modal1Component } from '../modal1/modal1.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor(public dialog:MatDialog){}
  ngOnInit(): void {

  }
  OpenDialog(){
    this.dialog.open(Modal1Component)
  }
  OpenDialog1(){
  this.dialog.open(Modal2Component)
  }
  OpenDialog2(){
    alert('Qabul qilindi!')
  }
  userform=new FormGroup({
    name:new FormControl('',[
      // form control ucun validation
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(18),
    
    ]),
    ages:new FormControl('',[
   
      Validators.required,
      
   
    ]),
    phone:new FormControl('',[
        // form control ucun validation
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        
    ]),
    atvet:new FormControl('',[
       // form control ucun validation
    ]),
    select:new FormControl('',[
       // form control ucun validation
    ])
  })
  get name(){
    return this.userform.get('name')
  }
  get ages(){
    return this.userform.get('ages');
  }
  get phone(){
    return this.userform.get('phone')
  }
  get atvet(){
    return this.userform.get('atvet')
  }
}
