import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  loading$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.loading$ = store.select(s => s.ui.loading)
  }

  ngOnInit(): void {
  }

}
