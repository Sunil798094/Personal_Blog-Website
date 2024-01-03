import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogspage',
  templateUrl: './blogspage.component.html',
  styleUrls: ['./blogspage.component.css']
})
export class BlogspageComponent {

  
  constructor(private blogService: BlogService){}
  name!: string;
  description!:string;
   errors: any =[];
  saveblog(){
   var inputData ={
    name: this.name,
    description: this.description
   }

  this.blogService.saveblog(inputData).subscribe({
    next: (res: any)=> {
      console.log(res,'response');
      alert('Successfully created');
      this.name ='';
      this.description='';
    },
    error: (err:any)=>{
      this.errors=err.error.errors;
      console.log(err.error.errors, 'errors')
    }
  });


}
}
