import { Component,OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl,FormArray } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  type:string='password';
  isText:boolean=false;
  eyeIcon='fa fa-eye-slash';
  signUpForm !:FormGroup;
  constructor(private fb:FormBuilder){}
  hideShow()
  {
    
this.isText=!this.isText;
this.isText?this.eyeIcon='fa fa-eye':this.eyeIcon='fa fa-eye-slash';
this.isText?this.type='text':this.type='password';  
}
  ngOnInit(): void {
    this.signUpForm=this.fb.group({
firstName:['',Validators.required],
lastName:['',Validators.required],
email:['',Validators.required],
username:['',Validators.required],
password:['',Validators.required],

    })
  }
  onSubmit(){
    if(this.signUpForm.valid)
    {

    }
    else{
this.validateFields(this.signUpForm);
    }
  }

  validateFields(formGroup:FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl)
      {
        control.markAsDirty({onlySelf:true});
      }
      else if(control instanceof FormGroup)
      {
        this.validateFields(control);
      }
    })
  }

}
