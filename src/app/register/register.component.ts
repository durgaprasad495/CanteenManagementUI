import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormArray } from '@angular/forms';
import { group } from 'console';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private frm:FormBuilder){}

  registerForm=this.frm.group({
    firstName:(''),
    lastName:(''),
    email:(''),
    address:group({
      address:(''),
      country:(''),
      state:(''),
      city:(''),
      pincode:(''),

    }),
    password:(''),
    confirmPassword:(''),

  })
ngOnInit(): void {
  
}

}
