import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';
import { AuthService } from '../../services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, SvgIconComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  private Auth = inject(AuthService);
  protected router = inject(Router)
  protected errorSignal = signal<boolean>(false);
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })


  onSubmit() {
    if (this.form.valid)
      {
        const {name, email, password} = this.form.value;
        this.Auth.register(email, name, password).subscribe({ 
          next : () => { (this.router.navigate(['/login'])); },
          error: (err) => { (console.log("error", err.code))}
         });
      }
      else{
        this.errorSignal.set(true);
        console.log("form invalid");
      }
  }
}
