//it is a component that is only used in signup page only

import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text pr-1">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            checked={selectGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label cursor-pointer ${
            selectGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text pr-1">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            checked={selectGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
