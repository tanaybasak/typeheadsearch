import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import useDebounce from "../utils/debounce";

const Search = ({ data, className }) => {
  const classNames = ["p-5"];
  const [showOverlay, setOverlay] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [suggession, setSuggesstion] = useState([]);
  const debouncedSearchTerm = useDebounce(textValue, 500);

  if (className) {
    classNames.push(className);
  }

  
  const textChangeFunc = (e) => {
    setTextValue(e);
    if (textValue.length > 1) {
      const results = data.filter((o) =>
        Object.keys(o).some((k) =>
          o[k].toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
      if (results.length) {
        setOverlay(true);
        setSuggesstion(results);
      } else {
        setOverlay(false);
        console.log("no data");
      }
    } else {
      setOverlay(false);
    }
  };

  const suggestionSelected = (value) => {
    setTextValue(value.title);
    setSuggesstion([]);
    setOverlay(false);
  };

  const getHighlightedText = (text, highlight) => {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: "bold", backgroundColor: "#EEE8AA" }
                : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className={classNames.join(" ")}>
      <TextInput
        className="text-input"
        value={textValue}
        onChange={textChangeFunc}
      />
      {showOverlay ? (
        <div className="shadow rounded searchResults">
          {suggession.map((item, i) => {
            return (
              <div
                className="w-100 rounded-lg"
                onClick={(e) => suggestionSelected(item, e)}
                style={{ cursor: "pointer" }}
                key={`item-${i}`}
              >
                <p>
                  <strong>{getHighlightedText(item.title, textValue)}</strong>
                </p>
                <p>{getHighlightedText(item.description, textValue)}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

Search.defaultProps = {
  className: "",
};

Search.propTypes = {
  /** Class/clasess will be applied on the parent div of MenuList */
  className: PropTypes.string,
};

export default Search;
