import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }

  getCrisis(id: number): Observable<Crisis> {
    const hero = CRISES.find(h => h.id === id)!;
    this.messageService.add(`CrisisService: fetched crisis id=${id}`);
    return of(hero);
  }
}
