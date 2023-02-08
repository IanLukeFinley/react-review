import React, { useState, useEffect } from "react";

export default function ProfileEdit () {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUsers () {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }
    loadUsers();
    console.log(user);
  }, []);

  const changeHandler = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch (
      `https://jsonplaceholder.typicode.com/users/${user.id}`,
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json;charset=UTF-8"
        }
      }
    );
    const savedData = await response.json();
    console.log("Saved user!", savedData);
  }

  if (user.id) {
    return (
      <form name="profileEdit" onSubmit={(submitHandler)}>
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            id="username"
            name="username"
            type="text"
            value={user.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" value={user.email} onChange={changeHandler} />
        </div>
        <button type="submit">Save</button>
      </form>
    )
  }
  return "Loading";
 
}