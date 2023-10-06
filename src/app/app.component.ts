import { Component, OnInit } from '@angular/core';
import  axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit():void {
    console.log('Hello World!');

    this.getPosts();
  }

   async getPosts(){
    try{
      const response=  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response.data);
    }
    catch(error){
      console.error('Error:', error);
    }

    }
}
