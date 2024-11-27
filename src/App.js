import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // declare state variables
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  /* declare a function that is going to make an api call to https://jsonplaceholder.typicode.com/posts */
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

      /* to get only the data array in the response */

      setArray(response.data);
      console.log(array);

    } catch (error) {

      console.log(error);
    }
  };

  return <div>
    <h1>Posts from the API</h1>
    <ul>{array.map((element) => (<li key={element.id}>{element.body}</li>))}</ul>
   
  </div>;
};

export default App;
