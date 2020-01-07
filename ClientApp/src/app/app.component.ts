import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'app';
    constructor(private spinner: NgxSpinnerService, private router: Router) {
       // router.events.subscribe((url: any) => console.log(url));
        console.log(router.url);  // to print only path eg:"/login"
        //console.log(this.router.getCurrentNavigation().extras.state.example);
        //if (this.router.url === '/') { this.router.navigate(['/home/four']) };
    }

    ngOnInit() {

        /** spinner starts on init */
        this.spinner.show();

        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 5000);
        
    }
}
