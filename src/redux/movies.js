import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'


// const API_KEY ='a0c04c9aac8453328cf1f9647aee1264'
//     const Language = 'en-US'
//     const PAGE =1
//     const URL = `https://api.themoviedb.org/3/movie`
//     const popular = `popular`
    
export const movieApi = createApi({
    reducerPath:'movieApi',
    baseQuery:fetchBaseQuery({baseUrl:`https://api.themoviedb.org/3/movie/popular?api_key=a0c04c9aac8453328cf1f9647aee1264&language=en-US&page=1` }),
    endpoints:(builder)=>({
       getAllMovies:builder.query({
            query:()=>``

        })
        
    })
   
})
export const infoMovieApi = createApi({
    reducerPath:'infoMovieApi',
    baseQuery:fetchBaseQuery({baseUrl:`https://api.themoviedb.org/3`}),
    endpoints:(builder)=>({
        getPostInfo:builder.query({
            query:(id)=>{

            return{
                url:`/movie/${id}?api_key=a0c04c9aac8453328cf1f9647aee1264&language=en-US`,

                method:'get'
            }
            
        }
                
        })
        
    })
   
})

export const rekMovieApi = createApi({
    reducerPath:'rekMovieApi',
    baseQuery:fetchBaseQuery({baseUrl:`https://api.themoviedb.org/3`}),
    endpoints:(builder)=>({
        getPostRek:builder.query({
            query:(id)=>{

            return{
                url:`/movie/${id}/recommendations?api_key=a0c04c9aac8453328cf1f9647aee1264&language=en-US&page=1`,

                method:'get'
            }
            
        }
                
        })
        
    })
   
})
export const orignMovieApi = createApi({
    reducerPath:'orignMovieApi',
    baseQuery:fetchBaseQuery({baseUrl:`https://api.themoviedb.org/3`}),
    endpoints:(builder)=>({
        getPostOrg:builder.query({
            query:()=>{

            return{
                url:`/movie/popular?api_key=a0c04c9aac8453328cf1f9647aee1264&language=en-US&page=2`,

                method:'get'
            }
            
        }
                
        })
        
    })
   
})
export const searchMovieApi = createApi({
    reducerPath:'searchMovieApi',
    baseQuery:fetchBaseQuery({baseUrl:`https://api.themoviedb.org/3`}),
    endpoints:(builder)=>({
        getPostSearch:builder.mutation({
            query:({query})=>{
            return{
                url:`/search/movie?api_key=a0c04c9aac8453328cf1f9647aee1264&language=en-US&page=1&include_adult=false&query=${query}`,
                method:'get'
            }
            
        }
                
        })
        
    })
   
})


export const {useGetAllMoviesQuery,} = movieApi;
export const {useGetPostInfoQuery} = infoMovieApi;
export const {useGetPostRekQuery} =rekMovieApi ;
export const {useGetPostOrgQuery} =orignMovieApi ;
export const {useGetPostSearchMutation} =searchMovieApi ;
