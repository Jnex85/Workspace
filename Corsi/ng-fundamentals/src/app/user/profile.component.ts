import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor (private auth: AuthService, private router: Router) {

  }

  profileForm: FormGroup;

  ngOnInit(): void {
    let firstName = new FormControl(this.auth.currentUser.firstName);
    let lastName = new FormControl(this.auth.currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formData) {
    this.auth.updateCurrentUser(formData.firstName, formData.lastName);
    this.router.navigate(['events']);
  }

}
