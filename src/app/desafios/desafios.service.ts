import { DesafioModel } from './desafio.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../auth/session/storage.service';
import { Page } from '../shared/model/page.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DesafiosService {private API = environment.apiUrl;

  private baseURL = `${this.API}`;


  constructor(
      private http: HttpClient,
      public storage: StorageService,
      private router: Router,
      private ngZone: NgZone) {
  }


  findAllDesafioPerPage(page:number | undefined = 0, pageSize: number | undefined = 25, paged: boolean | undefined = true): Observable<Page<DesafioModel>> {
      const paginationParam = new HttpParams()
      .set('page', String(page))
      .set('size', String(pageSize))
      .set('paged', String(paged));
      return this.http.get<Page<DesafioModel>>(`${this.baseURL}/v1/api/challenges`, { params: paginationParam });
  }

}
