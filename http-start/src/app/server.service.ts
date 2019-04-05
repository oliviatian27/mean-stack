import { Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
@Injectable()

export class ServerService {
  constructor(private http:Http){
  }

  storeServers(servers:any[]){
    const headers=new Headers({'Content-Type':'application/json'});
   // return  this.http.post('https://http-start-63b92.firebaseio.com/data.json',servers,{headers:headers})
    return  this.http.put('https://http-start-63b92.firebaseio.com/data.json',servers,{headers:headers})
  }

  getServers(){
    return this.http.get('https://http-start-63b92.firebaseio.com/data.json')
      .pipe(map(response=> response.json()
    ), catchError(
        (error)=>{
          return throwError('something ')
        }
        )
      )
  }

  getAppName(){
    return this.http.get('https://http-start-63b92.firebaseio.com/appName.json')
      .pipe(
        (map(res=>res.json())
      ))
  }
}
