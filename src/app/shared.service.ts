import { Injectable } from '@angular/core';
import { catchError, Observable, of, map,tap } from 'rxjs';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';
import { RegistrationUser } from './register/Registration';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // httpOptions={
  //   headers:new HttpHeaders({
  //     'Access-Control-Allow-Origin':'*',
  //     'Authorization': 'authkey',
  //     'userid': '1'
  //   })
  // };
  

  constructor(private http:HttpClient,private messageService: MessageService) { }
  private log(message:string){
    this.messageService.add(`SharedService: ${message}`);
  }
  
  readonly APIUrl= "https://localhost:44339/api/";
  
  private handleError<T>(operation='operation',result?: T){
    return (error:any): Observable<T> =>{
      console.error(error);

      this.log(`${operation} failed:${error.message}`);

      return of (result as T);
    }
  }
   

  Register(regBody):Observable<RegistrationUser>{
    return this.http.post<RegistrationUser>(this.APIUrl+'User', regBody);
    // return this.http.post<any>(this.APIUrl,RegisterComponent,this.httpOptions)
    // .pipe(
    //   tap((result)=> console.log ('result-->',result)),
    //   catchError(this.handleError('error', []))
    // );
  }

  
}
