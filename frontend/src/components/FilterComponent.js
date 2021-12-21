import React from "react";
import Button from "./Button";
import Input from "./Input";

function FilterComponent({ onChange, filterText, handleClear }) {
  return (
    <div className="flex">
      <Input
        value={filterText}
        onChange={onChange}
        className="rounded-r-none"
        placeholder="search any key"
      />
      <Button label="Clear" onClick={handleClear} className="rounded-l-none" />
    </div>
  );
}

export default FilterComponent;
