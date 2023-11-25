import { useState, useEffect } from "react";

function Form({ formData, addhandleChange, addhandleSubmit }) {
  return (
    <div className="search">
      <form onSubmit={addhandleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={addhandleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}

export default Form;
