import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { StorageService } from "../auth/session/storage.service";
import { Page } from "../shared/model/page.model";
import { ContextModel } from "./context.model";

@Injectable({
    providedIn: 'root'
})
export class ContextService {
    private API = environment.apiUrl;

    private baseURL = `${this.API}`;


    constructor(
        private http: HttpClient,
        public storage: StorageService,
        private router: Router,
        private ngZone: NgZone) {
    }


    findAllContextPerPage(page:number | undefined = 0, pageSize: number | undefined = 25, paged: boolean | undefined = true): Observable<Page<ContextModel>> {
        const paginationParam = new HttpParams()
        .set('page', String(page))
        .set('size', String(pageSize))
        .set('paged', String(paged));
        return this.http.get<Page<ContextModel>>(`${this.baseURL}/v1/api/contexts`, { params: paginationParam });
    }

    deleteContext(idContext: number){
        return this.http.delete<ContextModel>(`${this.baseURL}/v1/api/auth/contexts/${idContext}`);
    }
}