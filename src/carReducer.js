export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};
const REMOVE_FEATURE = "REMOVE_FEATURE";
const ADD_FEATURE = "ADD_FEATURE";
export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        additionalPrice:
          state.additionalPrice +
          state.additionalFeatures.find(
            feature => feature.id === action.payload.feature,
          ).price,
        car: {
          price: 26395,
          name: "2019 Ford Mustang",
          image:
            "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
          features: [...state.car.features, action.payload.feature],
        },
        additionalFeatures: [...state.additionalFeatures],
      };
    case REMOVE_FEATURE:
      return {
        additionalPrice:
          state.additionalPrice -
          state.additionalFeatures.find(
            feature => feature.id === action.payload.feature,
          ).price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            id => id !== action.payload.feature,
          ),
        },
        additionalFeatures: [...state.additionalFeatures],
      };
    default:
      return state;
  }
};
