import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, NavigationExtras, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  
  
  canActivateChild(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree {
    
    return this.canActivate(route, state);
  }


  /**
   * The ActivatedRouteSnapshot contains the future route that will be activated 
   * and the RouterStateSnapshot contains the future RouterState of the application, 
   * should you pass through the guard check.
   */
  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree {
    
    const url: string = state.url;

    return this.checkLogin(url);
  }

  /**
   * If the user is not logged in, you store the attempted URL the user came from 
   * using the RouterStateSnapshot.url and tell the router to redirect to a login 
   * page—a page you haven't created yet. Returning a UrlTree tells the Router to 
   * cancel the current navigation and schedule a new one to redirect the user.
   */
  checkLogin(url: string): true|UrlTree {
    if ( this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    
    // Create a dummy session id
    const sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };

    // Redirect to the login page with extras
    return this.router.createUrlTree(['/login'], navigationExtras);
  }
  
}
