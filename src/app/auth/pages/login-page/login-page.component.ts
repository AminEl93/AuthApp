import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: './login-page.component.html'
})

export class LoginPageComponent {

    private _fb = inject(FormBuilder);
    private _authService = inject(AuthService);
    private _router = inject(Router);

    public loginForm: FormGroup = this._fb.group({
        email:    [ '', [Validators.required, Validators.email] ],
        password: [ '', [Validators.required, Validators.minLength(6)] ],
    });

    login() {
        const { email, password } = this.loginForm.value;
        this._authService.login(email, password)
            .subscribe({
                next: () => this._router.navigateByUrl('/dashboard'),
                error: (message) => { Swal.fire('Error', message, 'error') }
            });
    }
}
