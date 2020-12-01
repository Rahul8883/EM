/**
 * According to stateless functional based component(Hooks)
 */
import React, { useState } from "react";
const App = () => {
  const [input, setInput] = useState("");
  const [showOption, setShowOption] = useState(false);
  let nba = [
    { name: "Rahul", team: "India" },
    { name: "Ranjan", team: "Bharat" },
    { name: "Ujjwal", team: "Tiwaro" },
    { name: "uttpal", team: "Mishra" },
    { name: "Kundan", team: "Rathore" },
    { name: "Papa", team: "punjab" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  if (showOption && input) {
  }
  if (input.length) {
    if (input && showOption) {
      nba = nba.filter((i) => {
        return (
          i.name.toLocaleLowerCase().match(input) +
          i.team.toLocaleLowerCase().match(input)
        );
      });
    }
  }
  const onClick = (input) => {
    return setShowOption(true);
  };
  return (
    <div className="search">
      <h2> Auto complete </h2>
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleChange}
        onClick={onClick}
      />

      {showOption ? (
        nba.map((player, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  {player.name}-{player.team}
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default App;
