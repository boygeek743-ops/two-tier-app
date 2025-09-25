import { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);      // Track errors

  useEffect(() => {
    fetch("http://3.249.94.36:5000/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        console.log("API response:", json);
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API call error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading data from backend...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <div>
      <h1>
        Hi there I am here to test my two tier application. Hope this works lol😂
      </h1>
      <div>{data.message}</div>
    </div>
  );
}

export default Data;
