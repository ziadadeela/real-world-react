import axiosBase from "../utils/axios";

interface RetrieveTagsResponse {
    tags: Array<string>
}

export function retrieveTags(): Promise<RetrieveTagsResponse> {
    return axiosBase.get('tags').then(result => (
        {
            tags: result.data.tags,
        }
    ));
}