import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.sass']
})
export class UserMenuComponent implements OnInit {
    userDetails: any = {};
    isLoggedIn = false;

    @Input() nameM: string;


    constructor(private router: Router, private service: UserService, private appService: AppService) {
      
            //this.nameM = this.service.currentLoginStatus;
       // this.nameM = this.service.getLoginTracker();

    }

    ngOnInit() {


        if (localStorage.getItem('token') != null) {
            this.isLoggedIn = true;

            this.service.getUserProfile().subscribe(
                res => {
                    this.userDetails = res;
                 
                },
                err => {
                    console.log(err);
                },
            );
        }
        else {
            this.isLoggedIn = false;
        }

        
    }
    onLogout() {
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.appService.setST('');
        localStorage.removeItem('isLogin');
        //this.router.navigate(['/user/login']);
    }

}
