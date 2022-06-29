import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm! : FormGroup;
   

  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router:Router) { }
  


  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      firstName: [''],
      lastName:[''],
      emailAdress : [''],
      password: [''],
      country: [''],
    });
  }
  // onSubmit(){
  //   this.http.post<any> ("http://localhost:3000/comments", this.registerForm.value).subscribe(
  //     next:data=>{
  //       alert("Registration Successiful");
  //     console.log(this.registerForm)
  //     this.registerForm.reset();
  //     this.router.navigate(['login']);
  //   },
  //   error:error=>{
  //     console.log(this.registerForm);
  //     alert("Connection Error..!")
  //   }
  // })
  // }
  onSubmit(){
    this.http.post<any>("http://localhost:3000/posts",this.registerForm.value).subscribe(
      (res:any)=>{
        alert("Registration Successiful");
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      error=>{
             alert("Connection Error..!");
          }
    )}
}


