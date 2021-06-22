import { HttpClient } from "@angular/common/http";
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


    findAllContextPerPage(): Observable<Page<ContextModel>> {
        return this.http.get<Page<ContextModel>>(`${this.baseURL}/v1/api/contexts`);
    }
}