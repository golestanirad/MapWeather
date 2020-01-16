import React from "react";

const Playground = () => {
  return (
    <div style={{ width: 500 }}>
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=627%204515%20varsity%20drive%20nw+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20043.153167665787!2d-114.17471201044923!3d51.1011877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1578698475072!5m2!1sen!2sca"
        width="600"
        height="450"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
      <iframe
        width="600"
        height="450"
        frameborder="0"
       
        src="https://www.google.com/maps/embed/v1/place/?q=Space+Needle,Seattle+WA"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Playground;
