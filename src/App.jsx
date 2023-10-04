import { useEffect, useState, useRef } from "react";
import useDate from "./custom-hooks/useDate";

function App() {
  const [posts, setPosts] = useState([]);
  const [, setRemove] = useState(posts);
  const date = useDate("");
  const ref = useRef();
  console.log(date);
  posts.length = 10;
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log("their is an error");
      }
    })();
  }, []);

 

  const handleDelete = (event) => {
    let filtered = () => event.target.parentElement.remove();
    return setRemove(() => filtered());
  };
  

  const handleEdit = () => {
    console.log(ref);
    ref.current.focus();
  };

  const addInput = () => {
    return ref.current.value;
  };

  return (
    <>
      <h1>LISTS FROM JSONPLACEHOLDER</h1>
      <ol className="postbox">
        {posts.map((item) => (
          <li className="postitem" key={item.id}>
            {item.title} <br />
            <input
              type="text"
              name={item.id}
              value={item.body}
              ref={ref}
              onChange={addInput}
            />
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
            Date: {date.toString()}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
