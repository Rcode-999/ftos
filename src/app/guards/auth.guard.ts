import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  if(sessionStorage.getItem('email')){
    return true;
  }
  else{
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
