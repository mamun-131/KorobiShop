import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
import { UserProfile } from '../../../modals/user-profile.model';
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  
    userDetails: any = {};

    constructor(private router: Router, private userService: UserService, private appService: AppService) {

    }

    ngOnInit() {


        if (localStorage.getItem('token') != null) {
 

            this.userService.getUserProfile().subscribe(
                res => {
                    this.userDetails = res;
                    console.log(res);
                },
                err => {
                    console.log(err);
                },
            );
        }


        
    }


}
