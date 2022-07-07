import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { LoginUser } from './login/login';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CorsService {
  constructor(private http:HttpClient,private messageService: MessageService) { }
 
  
  readonly APIUrl= "https://localhost:44339/api/";
  
  private log(message:string){
    this.messageService.add(`CorsService: ${message}`);
  }
  private handleError<T>(operation='operation',result?: T){
    return (error:any): Observable<T> =>{
      console.error(error);

      this.log(`${operation} failed:${error.message}`);

      return of (result as T);
    }
  }

  
    Login(regBody):Observable<LoginUser>{
      this.http.get<LoginUser>(this.APIUrl +'User',regBody);
    return this.http.post<LoginUser>(this.APIUrl +'Login',regBody);

  }
}
