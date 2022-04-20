import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MeowFactsService } from 'src/app/data-access/meowfacts/meow-facts.service';
import { AuthService } from 'src/app/utils/services/auth.service';

@Component({
  selector: 'app-facts-list',
  templateUrl: './facts-list.component.html',
  styleUrls: ['./facts-list.component.scss'],
})
export class FactsListComponent implements OnInit {
  facts$: Observable<string[]> | undefined;

  constructor(
    private readonly _authService: AuthService,
    private readonly _meowFactsService: MeowFactsService
  ) {}

  get userLogin(): string {
    return this._authService.getSession().login;
  }

  ngOnInit(): void {
    this.facts$ = this._meowFactsService.getFacts();
  }

  logout(): void {
    this._authService.logout();
  }
}
