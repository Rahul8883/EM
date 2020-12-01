import React, { Component } from "react";

/**
 * According to stateful class based component 
 */
export class Autocomplete extends Component {
constructor(props) {
    super(props)

    this.state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: "",
      };
}

  onChange = (e) => {
    const options = ["Rahul", "Ranjan", "Ujjwal", "Tawari", "uttpal", "mishara",  "The quick brown fox jumps over the lazy dog"];
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter((optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };


  render() {
    const { onChange, onClick, state: { activeOption, filteredOptions, showOptions, userInput }} = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul
           className="options"
           >
            {filteredOptions.map((optionName, index) => {
              if (index === activeOption) {
              }
              return (
                <li
                  key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
           <h2> Auto complete </h2>
          <input
            type="text"
            className="search-box"
            onChange={onChange}
            value={userInput}
          />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}
export default Autocomplete;