import React, { useRef } from "react";
import AlgoliaPlaces from "algolia-places-react";

export default () => {
 
  let refTest = null;
  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   inputEl.current.focus();
  // };
  // return (
  //   <>
  //     <input ref={inputEl} type="text" />
  //     <button onClick={onButtonClick}>Focus the input</button>
  //   </>
  // );
  return (
    <AlgoliaPlaces
   
      placeholder="Write an address here"
      placesRef={ref => (refTest = ref)}
      options={{
        // appId: 'my-app-id',
        // apiKey: 'sharing-is-caring',
        // language: 'sv',
        // countries: ['se'],
        type: "city"
        // Other options from https://community.algolia.com/places/documentation.html#options
      }}
      onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
        console.log("1111", refTest);
        refTest.setVal('');
      }}
    />
  );
};
