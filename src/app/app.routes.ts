import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FridgeComponent } from './pages/fridge/fridge.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './services/Auth/auth-guard';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            {path: '', component: MainPageComponent },
            {path: 'fridge', component: FridgeComponent },
        ], 
        canActivate: [AuthGuardService]
    }, 
    
    {path: 'login', component: LoginPageComponent },
    {path: 'register', component: RegisterPageComponent}
];
