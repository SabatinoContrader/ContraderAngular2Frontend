import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {RestService} from "../../services/rest.service";

@Component({
    selector: 'login',
    template: require('./login.component.html')
    //styles: [require('./login.component.css')]
})
export class LoginComponent {

    insertSuccess: boolean = false;
    loginForm: FormGroup;
    payload: any;
    response: number;
    firstname: string;
    lastname: string;
    role : string;
    url : string;

    constructor(private restService: RestService, private fb: FormBuilder) {
        this.createForm()
    }

    createForm() {
        this.loginForm = this.fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }


    submit() {
        this.payload = this.loginForm.value;
        this.restService.login(this.payload).subscribe((data) => {
            this.insertSuccess = true;
            this.response = data.response;
            this.firstname = data.data.firstname;
            this.lastname = data.data.lastname;
            this.role = data.data.role;
            if (this.role === "user")
                this.url = '/user';
            else this.url = '/admin';
        });
    }

}
