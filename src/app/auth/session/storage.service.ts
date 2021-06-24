import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "./storage_keys.config";
import { UserModel } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  user: UserModel | null;

  constructor() {
    this.user = this.getLocalUser();
  }

  getLocalUser(): UserModel | null {
    const usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: UserModel | null) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
    this.user = obj;
  }

  getToken(): string | null {
    const token = localStorage.getItem(STORAGE_KEYS.token);
    if (token == null) {
      return null;
    } else {
      return token;
    }
  }

  setToken(token: string | null) {
    if (token == null) {
      localStorage.removeItem(STORAGE_KEYS.token);
    } else {
      localStorage.setItem(STORAGE_KEYS.token, token);
    }
  }
}