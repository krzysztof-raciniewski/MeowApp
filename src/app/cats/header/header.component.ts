import { Component } from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get userLogin(): string {
    return this._authService.getSession().login;
  }

  constructor(private readonly _authService: AuthService) {}

  logout(): void {
    this._authService.logout();
  }
}
