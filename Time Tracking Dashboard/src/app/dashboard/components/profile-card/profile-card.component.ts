import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'shared/models/user.model';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  user$: Observable<User>;

  constructor(userService: UserService) {
    this.user$ = userService.appUser;
  }
}
