import React from "react";
import { connect } from "react-redux";
import { buyItem, removeFeature } from "./Action/action";
import AdditionalFeature from "./AdditionalFeature";

const AdditionalFeatures = props => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type='1'>
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    addedFeatures: state.car.features,
  };
};

export default connect(mapStateToProps, { buyItem, removeFeature })(
  AdditionalFeatures,
);
