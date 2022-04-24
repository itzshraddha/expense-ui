import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private alertService: AlertService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(
         result =>  { 
          this.alertService.success("User Added Sucessfully.", { keepAfterRouteChange: true });
          this.gotoUserList()
       },
       error =>  {
         console.log(error);
         this.alertService.error(error);
       }
    );
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
