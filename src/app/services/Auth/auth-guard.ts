import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


export function AuthGuardService() {
  const authServise = inject(AuthService)
  const router = inject(Router);
  {
    return authServise.user$.pipe(
     map(user => {
      if (user) {
        return true;
      } else {
       router.navigate(['/login'])
        return false;
      }
     })
    )
    
  }

}
