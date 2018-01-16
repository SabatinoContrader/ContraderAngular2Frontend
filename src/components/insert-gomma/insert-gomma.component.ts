import {
    Component,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { Gomma } from '../../models';

@Component({
    selector: 'insert-gomma',
    template: require('./insert-gomma.component.html')
})
export class InsertGommaComponent {

    insertSuccess: boolean = false;
    gommaForm: FormGroup;
    payload: string;

    constructor(private restService: RestService, private fb: FormBuilder) {
      this.createForm()
    }

    createForm() {
        this.gommaForm = this.fb.group({
            model: ['', Validators.required],
            manufacturer:  ['', Validators.required],
            price:  ['', Validators.required]
        });
    }


    submit() {
        this.payload = JSON.stringify(this.formGroup.value, null, 4);
        this.restService.insertGomma(this.payload).subscribe(data => {
            this.insertSuccess = true;
        });
    }
}
