import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../../common-ui/svg-icon/svg-icon.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/Auth/auth.service';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 authServise = inject(AuthService)
  router = inject(Router)
 logout() {
  this.authServise.logout();
  this.router.navigate(['/login']);
 }
}
