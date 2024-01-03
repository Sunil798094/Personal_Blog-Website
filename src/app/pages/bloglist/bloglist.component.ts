import { Component } from '@angular/core';
import { BlogService, BlogResponse } from 'src/app/services/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent {
  blogs: BlogResponse[] = [];
  searchText: string = '';

  constructor(private blogservice: BlogService) {}

  ngOnInit() {
    this.fetchBlogs(); // Fetch all blogs initially
  }

  fetchBlogs() {
    this.blogservice.getBlogs().subscribe(
      (response: any) => {
        // If searchText is empty, display all blogs; otherwise, filter based on searchText
        this.blogs = this.searchText ? this.filterBlogs(response) : response;
      },
      (error: any) => {
        console.error('Error fetching blogs:', error);
      }
    );
  }

  filterBlogs(blogs: BlogResponse[]): BlogResponse[] {
    return blogs.filter((blog) =>
      blog.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSearchTextChanged(searchValue: string) {
    this.searchText = searchValue;
    this.fetchBlogs(); // Call fetchBlogs when search text changes
  }

  getBlogLists() {
    this.blogservice.getblogs().subscribe((res: any) => {
      this.blogs = res;
    });
  }

  deleteblog(event: any, blogId: number) {
    if (confirm('Are you sure you want to delete this data?')) {
      event.target.innerText = "Deleting...";
      this.blogservice.destroyblog(blogId).subscribe((res: any) => {
        alert("Blog deleted successfully");
        this.getBlogLists();
      });
    }
  }
}
