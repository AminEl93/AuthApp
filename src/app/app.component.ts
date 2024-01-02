import { Component, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    private _authService = inject(AuthService);
    private _router = inject(Router);
  
    // Determinar si se está autenticado o no dependiendo del servicio
    public finishedAuthCheck = computed<boolean>(() => {
        console.log(this._authService.authStatus());
        if (this._authService.authStatus() === AuthStatus.checking) return false;    
        return true;
    });
    
    // Efecto para redireccionar a una ruta concreta al cambiar el estado de autenticación
    public authStatusChangedEffect = effect(() => {  
        switch (this._authService.authStatus()) {  
            case AuthStatus.checking:
                return;
    
            case AuthStatus.authenticated:
                this._router.navigateByUrl('/dashboard');
                return;
    
            case AuthStatus.notAuthenticated:
                this._router.navigateByUrl('/auth/login');
                return;  
        }
    });
}
