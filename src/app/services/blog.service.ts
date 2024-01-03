import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface BlogResponse{
  title: any;
  name: string,
  description: string,
  id: number
}

export interface BlogEditResponse{
  name: string,
  description: string,
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:3000/blogs'; 
 

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  searchBlogs(searchTerm: string): Observable<any[]> {
    
    const searchUrl = `${this.apiUrl}?name_like=${searchTerm}`;
    console.log(searchTerm)
    return this.httpClient.get<any>(searchUrl);
  }
  
  getblogs(){
    return this.httpClient.get("http://localhost:3000/blogs")
  }
  

  getblog(blogId:number){
    return this.httpClient.get<BlogEditResponse>(`http://localhost:3000/blogs/${blogId}`)
  }


  saveblog(inputData: object){
    return this.httpClient.post(`http://localhost:3000/blogs`,inputData)
  }

  destroyblog(blogId:number){
     return this.httpClient.delete(`http://localhost:3000/blogs/${blogId}`)
  }

  updateblog(inputData: object, blogId: number){

    return this.httpClient.put(`http://localhost:3000/blogs/${blogId}`,inputData);

  }

}
