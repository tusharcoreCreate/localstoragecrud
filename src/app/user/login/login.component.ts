import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public signin!: FormGroup
  constructor(private router:Router,private toster:ToastrService) { }

  ngOnInit(): void {
    this.signin = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      password: new FormControl(null, Validators.required)
    })
  }

  onsumbit() {

    localStorage.setItem("Users" , this.signin.value)
    this.router.navigate(["/"])

    let users: any = localStorage.getItem("Users");
    users = JSON.parse(users);
    const data = users.find((x: any) => {
      return x.email == this.signin.get('email')?.value && x.password == this.signin.get('password')?.value
    })


    if (data == undefined) {
      alert('Invalid email or password')
    } else {
      this.toster.success('login successfully')
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/'])
    }

  }


}
