import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token';
import { provideStore } from '@ngrx/store';
import { counterReducer, dummyreducer } from './state/reducers/dummy.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './state/reducers/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({ 'dummy': dummyreducer, counter: counterReducer, auth:authReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
