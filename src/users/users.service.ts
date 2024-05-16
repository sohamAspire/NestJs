import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly posts: any;

    create(post: any) {
        this.posts.push(post);
    }

    findAll(): any {
        return 'Success';
    }
}
