import axiosBase from "../utils/axios";
import qs from "qs";
import {Post} from "../Types";

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

export function CreatePost(title: string, description: string, body: string, tagList: Array<string>): Promise<RetrievePostResponse> {
    return axiosBase.post(`articles`, {
        title,
        description,
        body,
        tagList
    })
        .then(result => ({
            post: result.data.article,
        }));
}