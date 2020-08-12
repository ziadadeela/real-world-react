import axiosBase from "../utils/axios";
import qs from "qs";
import {Post, PostState} from "../Types";

export interface RetrievePostsQuery {
    offset: number,
    limit: number,
    tag?: string,
}

interface RetrievePostsResponse {
    posts: Array<Post>
    totalCount: number
}

interface RetrievePostResponse {
    post: Post
}


export function retrievePosts(query: RetrievePostsQuery): Promise<RetrievePostsResponse> {
    return axiosBase.get(`articles?${qs.stringify(query)}`)
        .then(result => ({
            posts: result.data.articles,
            totalCount: result.data.articlesCount
        }));
}

export function retrieveFeedPosts(query: RetrievePostsQuery): Promise<RetrievePostsResponse> {
    return axiosBase.get(`articles/feed?${qs.stringify(query)}`)
        .then(result => ({
            posts: result.data.articles,
            totalCount: result.data.articlesCount
        }));
}

export function retrievePost(slug: string): Promise<RetrievePostResponse> {
    return axiosBase.get(`articles/${slug}`)
        .then(result => ({
            post: result.data.article,
        }));
}

//TODO: What's the best way to do that
export function CreatePost(post: PostState): Promise<RetrievePostResponse> {
    return axiosBase.post(`articles`, post)
        .then(result => ({
            post: result.data.article,
        }));
}