import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  document.body.style.backgroundColor = "#fff0f6";
  return (
    <div className="container text-center ">
      {data &&
        data.map((item) => {
          return (
            <div className="card text-bg-warning mb-3">
              <div>
                <h6>{item.id}</h6>
                <h6>{item.name}</h6>
                <h6>{item.email}</h6>
                <h6>{item.gender}</h6>
                <h6>{item.status}</h6>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
