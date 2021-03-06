import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BootController } from 'src/boot.controller';
import { environment } from 'src/environments/environment';
import { StorageService } from './session/storage.service';
import { TokenModel } from './session/token.model';
import { UserModel } from './session/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = environment.apiUrl;

  private baseURL = `${this.API}`;
   

  constructor(
    private http: HttpClient,
    public storage: StorageService,
    private router: Router,
    private ngZone: NgZone) {
  }

  isLoggedIn(): boolean {
    return this.storage.getToken() != null;
  }

  authenticate(email: string, password: string): Observable<TokenModel> {
    return this.http.post<TokenModel>(
      `${this.baseURL}/v1/api/auth/login`,
      { email: email, password: password });
  }

  sucessfullLogin(token: TokenModel) {
    this.storage.setToken(token.token);
  }

  logout() {
    this.router.navigate(['home']);
    this.storage.setLocalUser(null);
    this.storage.setToken(null);
    // Triggers the reboot in main.ts
    this.ngZone.runOutsideAngular(() => BootController.getbootControl().restart());
  }

  handleLogin(path: string) {
      // TODO - Adicionar rota da tela de login
    return this.router.navigate([`login`, btoa(path)])
  }

  register(email: string, name: string, password: string): Observable<UserModel> {
    console.log(name);
    return this.http.post<UserModel>(`${this.baseURL}/v1/api/users`, {email: email, name: name, password: password});
  }

  getUser(): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseURL}/v1/api/auth/users`);
  }

}