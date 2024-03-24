import { GenericResponse } from '@model/common'
import { QueryKey, UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const useGetQuery = <TQueryFnData, TQueryKey extends QueryKey, TError = AxiosError, TData = GenericResponse>({
    queryKey,
    queryFn,
    staleTime = 0,
    refetchOnWindowFocus = false,
    retry = 0,
    ...options
}: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>): UseQueryResult<TData, TError> => {
    return useQuery({
        queryKey,
        queryFn,
        staleTime,
        refetchOnWindowFocus,
        retry,
        ...options,
    })
}

export default useGetQuery
