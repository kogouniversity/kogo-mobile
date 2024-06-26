import { QueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ListPostResponse } from './types';
import { BaseErrorResponse } from '../../types';
import { captureAxiosError } from '../../../../utils/sentry';
import { useAuthToken } from '../../auth/useAuthToken';

const fetchPostByID = async (postID: string, jwt: string | null): Promise<ListPostResponse> => {
    try {
        if (!jwt) {
            throw new Error('JWT token is missing');
        }
        const response = await axios.get<ListPostResponse>(`/api/posts/${postID}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        return response.data;
    } catch (err) {
        captureAxiosError(err as AxiosError<BaseErrorResponse>);
        throw (err as AxiosError).response?.data;
    }
};

export function useGetPostByID(
    postID: string,
    queryOptions?: QueryOptions<ListPostResponse, BaseErrorResponse>,
): UseQueryResult<ListPostResponse, BaseErrorResponse> {
    const jwt = useAuthToken();
    return useQuery<ListPostResponse, BaseErrorResponse>({
        ...(queryOptions ?? {}),
        queryKey: ['postID', postID],
        queryFn: () =>
            postID ? fetchPostByID(postID, jwt) : Promise.reject(new Error('Post information not available')),
    });
}
