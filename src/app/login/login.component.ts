import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CorsService } from '../cors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!:FormGroup;
error='';
  constructor(
    private fb:FormBuilder, 
    private router:Router,
    private corsService:CorsService
   // private alertService:ToastrService
    ) { }

  ngOnInit(): void
   {
    this.logInForm= this.fb.group({ 
       emailAddress:[''],
    password:['']}
    )
    
  }
  loginSubmit (data:any){

  }
  onSubmit(){
    let formValues=this.logInForm.value;
    console.log(formValues);
    this.corsService.Login(formValues)
    .subscribe({
      next: (user) => {
        if (user.responseCode) {
         this.logInForm.reset();
          this.router.navigate(['home']);
        } 
        else {
          alert ("You have entered incorrect username/password.");
        }

      },
      error: errorr => {
        this.error = errorr.error.responseDescription ?? "An Error Occured, Please Contact Administrator";
      }
    })

  }

}
