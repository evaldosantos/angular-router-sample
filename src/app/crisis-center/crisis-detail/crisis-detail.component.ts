import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { Crisis } from '../crisis'
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCrisis(selectedId);
      })
    ).subscribe(next => this.crisis = next);
  }

  goToCrises(crisisId: number) {
    this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route })
  }

}
