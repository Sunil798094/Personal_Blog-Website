import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})
export class BlogeditComponent {

  // studentId: any;
  blogId: any;
  blog: any;
  errors: any =[];

constructor(private route:ActivatedRoute, private blogservice:BlogService){}

  ngOnInit(){
  this. blogId = this.route.snapshot.paramMap.get('id');
  // alert(this.blogId);
  this.blogservice.getblog(this.blogId).subscribe((res:any ) =>{
    console.log(res)
    this.blog = res;
} ); 
}

  updateblog(){
    var inputData = {
      name :this.blog.name,
      description: this.blog.description,
    } 
     

   this.blogservice.updateblog(inputData, this.blogId).subscribe({

      next: (res:any) => {
        console.log(res);
        alert("Blog Updated Successfully");
      },
      error: (err: any)=> {
        this.errors= err.error.errors;
      }
    });
        
  }

}
