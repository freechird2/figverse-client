import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'

/**
 * options 내에 onSuccess 가 포함되어 있기 때문에 successCallback 유동적으로 사용
 */

const useTMutation = <TData, Error, TParam, TContext>({
    mutationFn,
    ...options
}: UseMutationOptions<TData, Error, TParam, TContext>): UseMutationResult<unknown, Error, TParam, TContext> => {
    return useMutation({
        mutationFn,
        ...options,
    })
}

export default useTMutation
