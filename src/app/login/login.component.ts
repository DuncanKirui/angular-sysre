import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any =FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void
   {
    this.login= this.fb.group({ 
       email:['',Validators.required],
    password:['',Validators.required]}
    )
    
  }
  loginSubmit (data:any){

  }
  onSubmit(logInForm:NgForm){
 this.router.navigate(['login']);

  }

}
