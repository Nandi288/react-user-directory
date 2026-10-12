import { useState } from "react";
import "./App.css";

import users from "./data";
import Header from "./Header";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

function App() {
  
  const [search, setSearch] = useState("");

  
  const [darkMode, setDarkMode] = useState(false);

  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        title="User Directory"
        subtitle="Find developers and designers in our community"
      />

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;