import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import { GetUser } from '../../store/actions/user.actions';

@Component({
  selector: 'app-user-c',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserContainerComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

}
