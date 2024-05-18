//it is a component that is only used in signup page only

import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text pr-1">Male</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text pr-1">Female</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckBox
