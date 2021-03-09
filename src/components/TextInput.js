import React, { useEffect, useState } from "react";

const TextInput = ({ className, ...restProps }) => {
  const [value, setValue] = useState("");
  const classnames = ['form-control'];
  const onChangeText = (e) => {
    setValue(e.target.value);
    restProps.onChange(e.target.value);
  };

  useEffect(() => {
    if (restProps.value || restProps.value === '') {
      setValue(restProps.value);
    }
  }, [restProps.value]);


  if(className) {
      classnames.push(className);
  }
  return (
    <div className="form-group">
      <label forhtml="search">Search:</label>
      <input
        type="text"
        className={classnames.join(' ')}
        value={value}
        autoComplete="off"
        id="search"
        onChange={onChangeText}
      />
    </div>
  );
};

export default TextInput;
