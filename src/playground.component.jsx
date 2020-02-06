import React, { useEffect } from "react";
import PSD from 'psd';
import axios from "axios";

const Playground = () => {
  useEffect(() => {
    // axios.get('http://31.220.50.160:5000/psd2/')
    // .then(function (response) {
    //   // handle success
    //   console.log(11111);
    //   console.log(response);
    //   console.log(11122211);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
    // axios({
    //   url: "http://31.220.50.160:5000/psd2",
    //   method: "GET",
    //   responseType: "blob" // important
    // })
    //   .then(response => {
    //     console.log(11111);
    //     console.log(response);
    //     console.log(11122211);
    //     console.log(response.data);
    //     PSD.fromURL("/path/to/file.psd").then(function(psd) {
    //       document.getElementById('ImageContainer').appendChild(psd.image.toPng());
    //     });
        
    //   })
    //   .catch(function(error) {
    //     // handle error
    //     console.log(1333);
    //     console.log(error);
    //   });
     
    
  }, []);

  return <div>test :)</div>;
};

export default Playground;
