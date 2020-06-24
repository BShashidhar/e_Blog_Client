import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  isEdited: boolean = false;
  isLoading: boolean = false;

  userProfile: any = ['User', 'Admin', 'Author'];

  id;

  constructor(
    private _title: Title,
    private _fb: FormBuilder,
    private _notifier: NotifierService,
    private _ngZone: NgZone,
    private _userService: UserService,
    private _router: Router
  ) {
    this.mainForm();
  }

  ngOnInit(): void {}
  mainForm() {
    this.userForm = this._fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
      usertype: [''],
      follow: [''],
      profilePicture: [''],
    });
  }
  get myForm() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) return;
    alert(1);
    let usersModel = {
      firstname: this.userForm.controls.firstname.value,
      lastname: this.userForm.controls.lastname.value,
      username: this.userForm.controls.username.value,
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value,
      follow: this.userForm.controls.follow.value,
      profilePicture: this.userForm.controls.profilePicture.value,
    };
    if (this.isEdited) {
      usersModel['id'] = this.id;
      this._userService.updateUser(usersModel).subscribe(
        (data) => {
          this._notifier.notify('success', 'User updated successfully..!!');
          this.isEdited = false;
          setTimeout(() => {
            this._router.navigate(['/']);
          }, 3000);
        },
        (err) => {
          this._notifier.notify(
            'error',
            'User updated fail. Please check field and try again..!!'
          );
          this.isEdited = false;
          this._router.navigate(['/']);
        }
      );
    } else {
      new Promise((res, rej) => {
        this.isLoading = true;
        this._userService.addUser(usersModel).subscribe(
          (data) => {
            res(data.result);
          },
          (err) => {
            rej(err);
          }
        );
      })
        .then((result) => {
          this.isLoading = false;
          this._notifier.notify('success', 'User added Successfully..!!');
        })
        .catch((err) => {
          this.isLoading = false;
          this._notifier.notify(
            'error',
            'Problem in user entry. Try again..!!'
          );
        });
    }
  }
}
