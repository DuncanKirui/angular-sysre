import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm! : FormGroup;
   

  constructor(private formBuilder: FormBuilder, 
    private http:HttpClient,
    private router:Router,
    private sharedService: SharedService) { }
  


  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      firstName: [''],
      middleName:[''],
      lastName : [''],
      emailAddress: [''],
      phoneNo:[],
      dateOfBirth:[],
      password: [''],
    });
  }
  onSubmit(){
    let formValues=this.registerForm.value;
    this.sharedService.Register(formValues).subscribe(
      res=>{alert("Registration Successiful");
        this.registerForm.reset();
        this.router.navigate(['login']);
      } ,err=>{
        alert ("Something went wrong!!");
      }
    )
 
  }
}


