import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()


  }

  fetchData=()=>{
    this.myapi.viewFriends().subscribe(
      (data)=>{
        this.friendsData=data
      }
    )
  }

  friendsData:any=[]

  ngOnInit(): void {
  }

}
