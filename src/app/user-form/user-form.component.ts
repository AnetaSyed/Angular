import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { throwError } from 'rxjs';
import { PlayerDataService } from '../player-data.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public errorAlert: boolean = false;
  public avaliableColorPalettes = [
    'normal',
    'high contrast'
  ]

  public userForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    studentID: ['', 
    [Validators.required, 
     Validators.minLength(4)
    ]
  ],
    color: ['normal', [Validators.required, Validators.minLength(5)]],
  });

  public get nameGetter() {return this.userForm.get('name') as FormControl}
  public get studentIDGetter() {return this.userForm.get('studentID') as FormControl}
  public get collorGetter() {return this.userForm.get('color') as FormControl}

  constructor(
    private _router: Router, 
    private _playerData: PlayerDataService,
    private _fb: FormBuilder) { 
    }
  
  ngOnInit(): void {
  }



  public changeErrorAlert() {
    this.errorAlert = false
  }

  public submit(userForm: any) {
    const selectedColor = userForm.value.color
    this._playerData.setPlayerData(this.userForm.value.name!, this.userForm.value.studentID!)
    this._playerData.load(this.userForm.value.studentID!).subscribe((result) => { Object.values(result)[0] === true ? this._router.navigate(['/game-page', selectedColor]) : this.errorAlert = true });    
}
}
