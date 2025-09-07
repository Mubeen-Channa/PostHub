import { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/test")
      .then((res) => {
        console.log("Frontend received:", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Below Message is Comming From MongoDB Atlas</h2>
      <ul className="list-group">
        <h5>Message:</h5>
        {data.map((item, i) => (
          <li key={i} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
