import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  type:string='password';
  isText:boolean=false;
  eyeIcon='fa fa-eye-slash';
  constructor(private fb:FormBuilder,private _auth:AuthService,private toastr:ToastrService){}

  loginForm!:FormGroup;
  hideShow()
  {
    
this.isText=!this.isText;
this.isText?this.eyeIcon='fa fa-eye':this.eyeIcon='fa fa-eye-slash';
this.isText?this.type='text':this.type='password';  
}
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  onSubmit()
  {
    this.toastr.success('Hello World','Toastr fun!');
    if(this.loginForm.valid)
    {
//send object to database
this._auth.login(this.loginForm.value).subscribe({
next:(result=>{
  this.loginForm.reset();
  this._auth.storeToken(result.Token);
  alert(result);

}),
error:(err=>{
  alert(err);
})
});

    }
else{
 // throw error using toastr
 this.validateFields(this.loginForm);
 alert('Form is Invalid');
}
  }
  private validateFields(formGroup:FormGroup){

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
