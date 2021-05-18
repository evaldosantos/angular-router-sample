import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


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

    // Redirect to the login page
    return this.router.parseUrl('/login');
  }
  
}
