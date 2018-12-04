import { Component } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '留言板';
  iptUser:string = '';
  iptContent:string = '';
  list:List[]=[
    // {id:1,name:'aa',content:'ccc'},
    // {id:2,name:'bb',content:'bbb'}
  ];
  activeIndex:number = -1;
  checkUser:string='';
  checkContent:string=''; 

  add(){
    if(this.iptUser!=''&&this.iptContent!=''){
      this.list.push({
        id:this.list.length+1,
        name:this.iptUser,
        content:this.iptContent
      })
    }
    this.iptUser='';
    this.iptContent='';
  }
  remove(index){
    this.list.splice(index,1);
  }
  clear(){
    this.list=[]
  }
  check(index){
    console.log(index)
    this.activeIndex=index;
    this.checkUser=this.list[index].name;
    this.checkContent=this.list[index].content;
  }
  confirm(){
    this.list[this.activeIndex].content=this.checkContent;
  }
}  
