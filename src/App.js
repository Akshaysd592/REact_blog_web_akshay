import { useContext } from "react";
import  Blogcontent from "./component/Blogcontent";
import  Footer from "./component/Footer";
import  Header from "./component/Header";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";



export default function App() {
        const {fetchBlogPosts} = useContext(AppContext);
        
        useEffect(()=>{
          fetchBlogPosts();
        },[]);

  return(
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center ">
       <Header/>
       <Blogcontent/>
       <Footer/>
    </div>
  );
}
