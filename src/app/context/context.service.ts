import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../auth/session/storage.service';
import { Page } from '../shared/model/page.model';
import { ContextModel } from './context.model';

@Injectable({
    providedIn: 'root'
})
export class ContextService {
    private API = environment.apiUrl;

    private baseURL = `${this.API}`;


    constructor(
        private http: HttpClient,
        public storage: StorageService, ) {
    }


    findAllContextPerPage(page: number | undefined = 0,
                          pageSize: number | undefined = 25,
                          paged: boolean | undefined = true,
                          name: string = '',
                          email: string = ''): Observable<Page<ContextModel>> {
        let paginationParam;
        if (!(name !== null && name !== undefined && name !== '')
            && !(email !== null && email !== undefined && email !== '')) {
            paginationParam = new HttpParams()
                .set('page', String(page))
                .set('size', String(pageSize))
                .set('paged', String(paged))
                .set('unpaged', String(!paged));
        }
        if (name !== null && name !== undefined && name !== '') {
            paginationParam = new HttpParams()
                .set('page', String(page))
                .set('size', String(pageSize))
                .set('paged', String(paged))
                .set('unpaged', String(!paged))
                .set('name', name);
        }
        if (email !== null && email !== undefined && email !== '') {
            paginationParam = new HttpParams()
                .set('page', String(page))
                .set('size', String(pageSize))
                .set('paged', String(paged))
                .set('unpaged', String(!paged))
                .set('email', email);
        }
        return this.http.get<Page<ContextModel>>(`${this.baseURL}/v1/api/contexts`, { params: paginationParam });
    }

    deleteContext(idContext: number) {
        return this.http.delete<ContextModel>(`${this.baseURL}/v1/api/auth/contexts/${idContext}`);
    }

    save(contexto: ContextModel): Observable<ContextModel>{
        return this.http.post<ContextModel>(`${this.baseURL}/v1/api/contexts`, contexto );
    }
}
