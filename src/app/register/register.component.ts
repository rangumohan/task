import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    // this.submitted = true;
    // reset alerts on submit
    // this.alertService.clear();
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    const formdata = this.registerForm.setValue({
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      role: this.registerForm.value.role
    })
    const data = {
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      role: this.registerForm.value.role
    }
    console.log(data);
    this.userService.register(data).subscribe(res => {
      if (res) {
        // this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']); 
      }
    }, error => {
      console.log(error);
    })
  }

}
