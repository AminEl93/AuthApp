import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './login-page.component.html'
})

export class LoginPageComponent {

    private fb = inject(FormBuilder);

    public loginForm: FormGroup = this.fb.group({
        email:    [ '', [Validators.required, Validators.email] ],
        password: [ '', [Validators.required, Validators.minLength(6)] ],
    });

    login() {

    }
}
