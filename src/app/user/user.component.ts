import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  userdata = [];
  ngOnInit() {
    this.getUserDate();
  }
  getUserDate() {
    this.userService.getuserdata().subscribe(res => {
      debugger;
      console.log(res);
      this.userdata.push(res.user);
     // alert(JSON.stringify(this.userdata));
    });
  }
}
