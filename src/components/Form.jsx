import { useState, useEffect } from "react";

function Form({
  formData,
  addhandleChange,
  addhandleSubmit,
  addhandleSort,
  sortBy,
}) {
  return (
    <div className="search">
      <form onSubmit={addhandleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={addhandleChange}
          value={formData.searchterm}
        />
        <select onChange={addhandleSort} value={sortBy} className="select">
          <option value="Xia dynasty">Xia dynasty</option>
          <option value="Shang dynasty">Shang dynasty</option>
          <option value="Western Zhou">Western Zhou</option>
          <option value="Eastern Zhou">Eastern Zhou</option>
          <option value="Qin dynasty">Qin dynasty</option>
          <option value="Western Han">Western Han</option>
          <option value="Eastern Han">Eastern Han</option>
          <option value="Cao Wei">Cao Wei</option>
          <option value="Western Jin">Western Jin</option>
          <option value="Eastern Jin">Eastern Jin</option>
          <option value="Liu Song">Liu Song</option>
          <option value="Southern Qi">Southern Qi</option>
          <option value="Liang dynasty">Liang dynasty</option>
          <option value="Chen dynasty">Chen dynasty</option>
          <option value="Sui dynasty">Sui dynasty</option>
          <option value="Tang dynasty">Tang dynasty</option>
          <option value="Later Liang">Later Liang</option>
          <option value="Later Tang">Later Tang</option>
          <option value="Later Jin">Later Jin</option>
          <option value="Later Han">Later Han</option>
          <option value="Later Zhou">Later Zhou</option>
          <option value="Northern Song">Northern Song</option>
          <option value="Southern Song">Southern Song</option>
          <option value="Yuan dynasty">Yuan dynasty</option>
          <option value="Ming dynasty">Ming dynasty</option>
          <option value="Qing dynasty">Qing dynasty</option>
        </select>
        <input type="submit" value="search" />
      </form>
    </div>
  );
}

export default Form;
