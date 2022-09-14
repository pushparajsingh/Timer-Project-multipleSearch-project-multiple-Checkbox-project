import React, { useState, useEffect } from "react";
import userList from "./users"; //Just some fake data

export default function Search2() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setUsers(userList);
  }, []);

  //Simulating making api call with useEffect

  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };

  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users, category, search) => {
    return users
      .filter((user) => byCategory(user, category))
      .filter((user) => bySearch(user, search));
  };

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose Category</option>
        <option value="movies">Movies</option>
        <option value="games">Games</option>
        <option value="shows">Shows</option>
        <option value="other">Other</option>{" "}
      </select>
      {filteredList(users, category, search).map((item) => (
        <div key={item.id}>
          {item.name} : {item.category}
        </div>
      ))}
    </div>
  );
}
