import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FireBasedServiceService {

  private databaseURL: string =
  'https://game-comparison-app-default-rtdb.firebaseio.com/';

  constructor(
    private http: HttpClient
  ) { }
}
