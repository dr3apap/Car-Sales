import React from "react";
import { useDispatch } from "react-redux";
const AddedFeature = props => {
  const dispatch = useDispatch();
  const { removeFeature, feature } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature.id)} className='button'>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
