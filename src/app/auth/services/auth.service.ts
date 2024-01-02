import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';

import { AuthStatus, LoginResponse, User } from '../interfaces';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    private readonly baseUrl: string = environment.baseUrl;
    private _http = inject(HttpClient);

    private _currentUser = signal<User | null>(null); 
    private _authStatus = signal<AuthStatus>(AuthStatus.checking);

    constructor() { }    
}