import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2"
 
@Component({
    selector: "app-register-page",
    templateUrl: "./register-page.component.html"
})
 
export class RegisterPageComponent {
    
    private _fb = inject(FormBuilder);
    private _authService = inject(AuthService);
    private _router = inject(Router);
    
    public registerForm: FormGroup = this._fb.group({
        name:     [ "", [Validators.required, Validators.minLength(3)] ],
        email:    [ "", [Validators.required, Validators.email] ],
        password: [ "", [Validators.required, Validators.minLength(6)] ]
    });
    
    register() {
        const { name, email, password } = this.registerForm.value;
        this._authService.register(name, email, password)
            .subscribe({
                next: () => {
                    Swal.fire("Éxito", "Registro satisfactorio!", "success").then(() => {
                        this._router.navigateByUrl("/dashboard");
                    });
                },
                error: (message) => { Swal.fire("Error", message, "error") }
            });
    }
}