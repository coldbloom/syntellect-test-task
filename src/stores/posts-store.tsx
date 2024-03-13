import {makeAutoObservable} from "mobx";
import {Posts, getPosts} from "../api/getPosts";
import {runInAction} from "mobx";

class PostsStore {
    posts: Posts[] = [];
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }

    getPostsAction = async () => {
        try {
            this.isLoading = true;

            const res = await getPosts();

            runInAction(() => {
                this.posts = res;
                this.isLoading = false;
            })
        } catch (e) {
            this.isLoading = false;
        }
    }
}

export default new PostsStore();