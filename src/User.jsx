import { useEffect, useState } from "react";

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://3.252.69.36:5000/user")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      })
      .catch((err) => console.error("API call error:", err));
  }, []);

  return (
    <div>
      <h1>
        Hi there I am here to test my two tier application. Hope this works
        lol😂
      </h1>
      {user ? <div>{user.message}</div> : "Loading..."}
    </div>
  );
}

export default User;
