import { JsonPipe } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authservice.service';
import { MustMatch } from 'src/app/helper/conformpassword';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private routerservice: AuthService
  ) { }
  data: {}
  ngOnInit() {
  }
  regForm = this.fb.group({
    fullName: ["", [Validators.required, Validators.minLength(6)]],
    email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    contact: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]
    ],
    conformPassword: ["", [Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]
  }, {
    validator: MustMatch('password', 'conformPassword')
  })
  createUser() {
    debugger;
    this.data =
    {
      fullName: this.regForm.get('fullName').value,
      email: this.regForm.get('email').value,
      contact: this.regForm.get('contact').value,
      password: this.regForm.get('password').value
    }
    console.log(this.data);
    this.userService.signUpUser(this.data).subscribe(res => {
      console.log(res);
      if (res.message === "success") {
        alert("Successfully registred user");
        this.routerservice.login(true);

        debugger;
        this.router.navigate(["/login"]);

      }
    })
    console.log(this.regForm.value);

    this.regForm.reset();
  }
}
