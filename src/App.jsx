import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";

function App() {
  const [posts, setPosts] = useState([]);
  posts.length = 20;
  let baseURL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (itemID) => {
    // let filtered = () => event.target.parentElement.remove();
    // using filter method
    let filter = posts.filter((item) => item.id !== itemID);
    return setPosts(filter);
  };

  



  return (
    <>
      <h1> POSTS FROM JSONPLACEHOLDER</h1>

       {posts.map((item) => (
            
            <Posts key={item.id} item={item} onRemove= {handleDelete} />
        ))}
      
    </>
  );
}

export default App;
