import { Injectable } from '@angular/core';
import { Post } from './post.model'
import {Subject} from 'rxjs'
@Injectable({providedIn: 'root'})
export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts() {
        return [...this.posts];
    }

    getPostsUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(name: string, bio: string) {
        const post: Post = {name: name, bio: bio};
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }

}