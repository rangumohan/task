import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }
  isReset = true;
  ngOnInit() {
  }
  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  });
  submitLoginForm() {
    debugger;
    console.log(this.loginForm);
    this.userService.login(this.loginForm.value).subscribe(res => {
      if (res.token) {
        //this.loginForm.reset();
        localStorage.setItem('token', res.token);
        this.router.navigate(['/user']);
      }
    })
    this.loginForm.reset();
  }

}
