import { Component, inject, signal } from '@angular/core';
import { SvgIconComponent } from "../../common-ui/svg-icon/svg-icon.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [SvgIconComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private Auth = inject(AuthService);
  protected router = inject(Router)
  errorSignal = signal<boolean>(false);

  form: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit() {
    if (this.form.valid)
    {
      const {email, password} = this.form.value;
      this.Auth.login(email, password).subscribe({ 
        next : () => { (this.router.navigate(['/'])); },
        error: (err) => { (console.log("error", err.code))}
       });
    }
    else{
      this.errorSignal.set(true);
      console.log("form invalid");
    

    }

  }
}
