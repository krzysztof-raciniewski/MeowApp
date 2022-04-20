import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../utils/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  formError = false;
  signInForm: FormGroup = new FormGroup({});

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  login(): void {
    if (this.signInForm.invalid) {
      this.formError = true;
      return;
    }

    this.formError = false;
    if (this.authService.login(this.signInForm.value)) {
      this.router.navigate(['/cat']);
    } else {
      this.formError = true;
    }
  }

  private createLoginForm(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
