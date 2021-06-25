import { Component, OnInit } from '@angular/core';
import {PostsService} from  '../post.service'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm) {
    if(form.status == "INVALID") {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content)
  }

}
