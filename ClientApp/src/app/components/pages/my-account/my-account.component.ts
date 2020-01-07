import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {
    formModel = {
        UserName: '',
        Password: ''
    }
    constructor(private service: UserService, private router: Router, private toastr: ToastrService, private appService: AppService) { }

    ngOnInit() {
        if (localStorage.getItem('token') != null)
            this.router.navigateByUrl('/pages/my-account');
    }

    onSubmit(form: NgForm) {
        this.service.login(form.value).subscribe(
            (res: any) => {
                localStorage.setItem('token', res.token);
                console.log(res.token);
                localStorage.setItem('isLogin', 'LoggedIn-ST');
                this.appService.setST('LoggedIn-ST');

                this.router.navigateByUrl('/home/four');
            },
            err => {
                if (err.status == 400)
                    this.toastr.error('Incorrect username or password.', 'Authentication failed.');
                else
                    console.log(err);
            }
        );
    }
}
