import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../auth/session/storage.service';
import { ContextModel } from '../context/model/context.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API = environment.apiUrl;

  private baseURL = `${this.API}`;
   

  constructor(
    private http: HttpClient,
    public storage: StorageService,
    private router: Router,
    private ngZone: NgZone) {
  }

  getUserContexts(): Observable<ContextModel []>{
    return this.http.get<ContextModel []>(`${this.baseURL}/v1/api/auth/contexts`);
  }

}