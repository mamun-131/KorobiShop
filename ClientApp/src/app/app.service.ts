import { Injectable, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor() { }

    private ST: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('isLogin'));

    getST(): Observable<string> {
        console.log(this.ST.asObservable());
        return this.ST.asObservable();
    }

    setST(val: string): void {
        this.ST.next(val);
    }

}
