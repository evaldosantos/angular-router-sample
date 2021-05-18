import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router' 
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class CrisesListComponent implements OnInit {

  Crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCrises();
      })
    )
  }
}


