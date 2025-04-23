import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) {}

  login(name: string, password: string) {
    return this.httpClient.post<LoginResponse>("/login", { name, password }).pipe(
      tap((value: LoginResponse) => {
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("username", value.name);
      })
    );
  }
}