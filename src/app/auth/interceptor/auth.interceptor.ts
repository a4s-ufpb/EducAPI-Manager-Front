import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
  } from '@angular/common/http';
  import { Observable, of, throwError } from 'rxjs';
  import { Injectable } from '@angular/core';
  import { AuthService } from '../auth.service';
  import { Router, ActivatedRoute, RouterStateSnapshot, ChildActivationEnd } from '@angular/router';
  import { catchError, filter, take } from 'rxjs/operators';
import { StorageService } from '../session/storage.service';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private authService: AuthService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private storage: StorageService
    ) {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
      if (this.authService.isLoggedIn()) {
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${
              this.storage.getToken()
            }`,
          },
        });
        return next.handle(authRequest).pipe(
          catchError((error) => {
            // If the token has expired or any authentication errors occur, it will be redirected to the login screen.
            if (
              (error instanceof HttpErrorResponse && error.status === 401) ||
              error.status === 403
            ) {
              this.authService.handleLogin(
                this.activatedRoute.snapshot.url.join('')
              );
            }
            return throwError(error);
          })
        );
      } else {
        return next.handle(request);
      }
    }
  }