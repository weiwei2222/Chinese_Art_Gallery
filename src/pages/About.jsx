import React from "react";

function About() {
  return (
    <div>
      <p>
        The Cleveland Museum of Art was founded in 1913 “for the benefit of all
        the people forever.”1 We strive to help the broadest possible audience
        understand and engage with the world’s great art while honoring the
        highest aesthetic, intellectual, and professional standards.
      </p>
      <p>
        This website use{" "}
        <a href="https://openaccess-api.clevelandart.org/" target="_blank">
          The Cleveland Museum of Art free API
        </a>
        .
      </p>
    </div>
  );
}

export default About;
