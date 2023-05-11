import React, { createContext, useContext, useState } from 'react'
import { baseUrl } from '../baseUrl';


export const AppContext = createContext();

export  default function  AppContextProvider({children}){
          const [loading,setLoading] = useState(false);
          const [posts,setPosts] = useState([]);
          const [page,setPage] = useState(1);
          const[totalPages, setTotalpages] = useState(null);
        
         // data filling
         async function fetchBlogPosts(page=1){
            setLoading(true);
            let url =`${baseUrl}?page=${page}`;
            console.log(url);
            try{
                 const result = await fetch(url);
                 const data = await result.json();
                 console.log(data);
                 setPage(data.page);
                 setPosts(data.posts);
                 setTotalpages(data.totalPages)
            }
            catch(error){
                 console.log("Error in fetching data");
                 setPage(1);
                 setPosts([]);
                 setTotalpages(null);
            }
            setLoading(false);
         }

         function handlePageChange(page){
            setPage(page);
            fetchBlogPosts(page);
         }
     
           const value={
            loading,
            setLoading,
            posts, setPosts,
            page,setPage,
            totalPages,setTotalpages,
            fetchBlogPosts, handlePageChange
           }

           // step 2 
           // send data 
           return <AppContext.Provider value={value}>
              {children}
           </AppContext.Provider>


}
