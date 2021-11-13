import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { decrement, increment } from 'src/app/store/counter/actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = store.select(s => {
      return s.counter.count;
    });

  }



  ngOnInit(): void {

  }

}
