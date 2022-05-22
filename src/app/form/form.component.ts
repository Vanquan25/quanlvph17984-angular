import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: '0',
    avatar: ''
  }

  users = [
    {
      id: 1,
      name: 'quanlvph17984',
      age: 30,
      email: 'quanlvph17984@fpt.edu.vn',
      phone: '0934843382',
      avatar:'https://picsum.photos/100'
    },
    {
      id: 15,
      name: 'quanlvph17985',
      age: 30,
      email: 'quanlvph17985@fpt.edu.vn',
      phone: '0934843382',
      avatar:'https://picsum.photos/100'
    },
    {
      id: 10,
      name: 'quanlvph17986',
      age: 30,
      email: 'quanlvph17986@fpt.edu.vn',
      phone: '0934843382',
      avatar:'https://picsum.photos/100'
    }
  ]

  onSubmit(userForm: NgForm){    //nhận toàn bộ form
    // 1. tìm ra id lớn nhất
    const userIds = this.users.map(user => user.id).sort((a, b) => a - b); //[1, 10, 15]
    console.log(userIds);
    const newId = userIds[userIds.length - 1];

    // Nếu inputValues có id = 0 thì là thêm mới -> 2
    // Nếu inputValues có id != 0 thì là chỉnh sửa -> 2.1

    if (this.inputValues.id ==0) {
   
    // 2. Thêm vào mảng

    this.users.push({
      ...userForm.value, // Lấy ra object giá trị của form
      id: newId + 1
    });
  } else {
    // 2.1 Chỉnh sửa
    const index = this.users.findIndex((user) => user.id === this.inputValues.id);
    if (index > -1) {
      this.users[index] = {...userForm.value, id: this.inputValues.id}
    }
  }
    
    // 3. Cập nhật lại giá trị ban đầu

    // userForm.resetForm();  // Nếu không truyền gì thì tất cả về null
    userForm.resetForm({ // 
      id: 0,
      name: '',
      age: 0,
      email: '',
      phone: '0',
      avatar: ''
    })
  }

  onDelete(userId: number){
    this.users = this.users.filter((user) => user.id !== userId);
  }

  onEdit(userId: number){
    // 1. Tìm ra user có id là userId truyền vào
    const editUser = this.users.find((user) => user.id === userId);
    // 2. Nếu tìm ra thì mới gán giá trị lên form
    if (editUser) {
      this.inputValues = {...editUser};
    }
  }

}
