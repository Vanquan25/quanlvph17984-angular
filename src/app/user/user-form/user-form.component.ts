import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any;
  // 1. Định nghĩa sự kiện để bắn dữ liệu ngược lại
@Output() handleSubmit: EventEmitter<any>;
  constructor() {
    this.handleSubmit = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm){
    console.log(userForm);
    
    this.handleSubmit.emit(userForm.value)
  userForm.resetForm({
    name: '',
    age: 0,
    email: '',
  });
  }
}
