import { Component, OnInit } from '@angular/core';
import { GetUsers } from '../../store/actions/user.actions';
import { Store, select } from '@ngrx/store';

import { IAppState } from '../../store/state/app.state';
import { selectUserList } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-c',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersContainerComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList));

  constructor(
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }

}
