import axios from "axios";
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(response => response.data) 

export const useGetPosts = () => {
    const {data,error,isLoading} = useSWR('https://dummyjson.com/users',fetcher)
    return {data,error,isLoading}
}