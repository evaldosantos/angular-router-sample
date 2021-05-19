import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  /**
   * Async modal dialog service
   * DialogService makes this app easier to test by faking this service.
   * TODO: better modal implementation that doesn't use window.confirm
   */
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
  }

}
