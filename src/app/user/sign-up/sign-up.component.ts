import { collectExternalReferences } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { ConfirmPasswordValidator } from './cutom-validater';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public login!: FormGroup
  public user: any = {}
  submitted: boolean = false;
  public Country: Array<any> = [{
    id: '1',
    value: 'india'
  },
  {
    id: '2',
    value: 'Uk'
  }
  ]
  constructor(private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
     this.login = this.fb.group(
      {
        name: ["", Validators.required],
        email: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        country: new FormControl('', Validators.required)
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  }

  onsumbit() {
    const data: any = localStorage.getItem("Users")
    let userData: any[] = []
    userData = JSON.parse(data)
    console.log('----------------', userData)
    if (userData?.length) {
     let filterRecords = userData.filter(x => x.email === this.login.value.email);
      if (filterRecords.length) {
        this.toastr.error("User already exist")
        return
      }
     
    }
    this.user = Object.assign(this.user, this.login.value)
    this.adduser(this.user)
    console.log(this.user)
    this.submitted = true
    if (this.submitted === true) {
      console.log(this.submitted)
      this.toastr.success('successfully signup!', 'Toastr fun!');
    }
      this.login.reset()
   }

  public adduser(user: any) {
    let users: any = []
    if (localStorage.getItem("Users")) {
      users = localStorage.getItem("Users")
      users = JSON.parse(users)
      users = [user, ...users]
    }
    else {
      users = [user]
    }
    localStorage.setItem("Users", JSON.stringify(users))
  }


}
