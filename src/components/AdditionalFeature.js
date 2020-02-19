import React from "react";
import { useDispatch } from "react-redux";

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  const { feature, buyItem } = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => buyItem(feature.id)} className='button'>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
