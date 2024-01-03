import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  // blogs: any[] = [];
  // searchTerm: string = '';

  // constructor(private dataService: BlogService) {}

  // ngOnInit(): void {
  //   this.dataService.getData().subscribe((data: { blogs: any[]; }) => {
  //     this.blogs = data.blogs;
  //   });
  // }
  // search(): void {
  //   // Filter blogs based on the search term
  //   if (this.searchTerm.trim() !== '') {
  //     this.blogs = this.blogs.filter(
  //       (blog) =>
  //         blog.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //         blog.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //   } else {
  //     // If the search term is empty, restore the original data
  //     this.dataService.getData().subscribe((data: { blogs: any[]; }) => {
  //       this.blogs = data.blogs;
  //     });
  //   }
  // }
}
