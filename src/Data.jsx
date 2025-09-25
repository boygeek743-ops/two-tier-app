import { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")  // <- use this, not the full IP
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("API call error:", err));
  }, []);

  return (
    <div>
      <h1>
        Hi there I am here to test my two tier application. Hope this works
        lol😂
      </h1>
      {data ? <div>{data.message}</div> : "yo this is tesa"}
    </div>
  );
}

export default Data;
