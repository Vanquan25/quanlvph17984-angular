import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304';
  name = 'quanlvph1794';
  class = 'we16304';

  teachers = [
    {
      id: 1,
      name: "GV1",
      age: 60,
      gender: 1,
      avatar: "https://picsum.photos/100",
      status: 0
    },
    {
      id: 2,
      name: "GV2",
      age: 25,
      gender: 0,
      avatar: "https://picsum.photos/100",
      status: 1
    },
    {
      id: 3,
      name: "GV3",
      age: 25,
      gender: 0,
      avatar: "https://picsum.photos/100",
      status: 1
    },
    {
      id: 4,
      name: "GV4",
      age: 50,
      gender: 1,
      avatar: "https://picsum.photos/100",
      status: 0
    },
    {
      id: 5,
      name: "GV5",
      age: 25,
      gender: 1,
      avatar: "https://picsum.photos/100",
      status: 1
    }
  ]

  studentName= 'Quanlv'
  studentId= 'PH17984'
}
