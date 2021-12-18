import React from "react";

function FilterComponent({ filterText, onChange, handleClear }) {
  return (
    <div>
      <input
        value={filterText}
        placeholder="search any key"
        onChange={onChange}
      />
      <button onClick={handleClear}>X</button>
    </div>
  );
}

export default FilterComponent;
