import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp } from 'firebase/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), 
      provideFirebaseApp(() => initializeApp(environment)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth())
   
  ],
};
