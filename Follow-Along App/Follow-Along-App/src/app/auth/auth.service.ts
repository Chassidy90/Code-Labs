import { HttpClient } from "@angular/common/Http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})

export class AuthService{
  constructor(private http: HttpClient){}

  signup(){
this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]')
  }
}
