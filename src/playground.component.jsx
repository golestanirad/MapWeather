import React from "react";

const Playground = ({testProp}) => {
  const {test} =  testProp ?? {};
  console.log(111111,test);
  return (
    <div style={{ width: 500 }}>
    test
    <br/>
    {test}
    </div>
  );
};

export default Playground;
