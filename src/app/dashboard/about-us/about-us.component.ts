import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit{
  index: any;
  ngOnInit(): void {
    
  }
  Save()
  {

  }
  Clear()
  {

  }
  
  OnTab(index: any) {
    this.index = index.any
  }
 /* 
 Imagepath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s';
 ImagePath1='D:\Angular\dashboard\src\assets';
 */

}