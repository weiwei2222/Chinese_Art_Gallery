import React from "react";

function About() {
  return (
    <div className="text">
      <div className="title">
        This website use{" "}
        <a href="https://openaccess-api.clevelandart.org/" target="_blank">
          The Cleveland Museum of Art free API
        </a>
        .
      </div>
      <div className="title">The Cleveland Museum of Art Open Access</div>
      <p>
        The Cleveland Museum of Art (CMA) was founded in 1913 “for the benefit
        of all the people forever.” The museum strives to help the broadest
        possible audience understand and engage with the world’s great art. The
        Cleveland Museum of Art is one of the most comprehensive art museums in
        the world and one of northeastern Ohio’s principal civic and cultural
        institutions. 
      </p>
      <p>
        The Cleveland Museum of Art provides datasets of information on more
        than 64,000 artwork records in its Collection for unrestricted
        commercial and noncommercial use. Additionally, the museum provides
        image assets for over 37,000 works, which are made available under the
        same terms. Links to the web, print, and full-sized, uncompressed
        versions of these images are included in the dataset where applicable.
      </p>
      <p>
        To the extent possible under law, The Cleveland Museum of Art has waived
        all copyright and related or neighboring rights to this dataset using
        Creative Commons Zero. This work is published from: The United States Of
        America. You can also find the text of the CC Zero deed in the file
        LICENSE in this repository. These select datasets are now available for
        use in any media without permission or fee; they also include
        identifying data for artworks under copyright. The datasets support the
        search, use, and interaction with the Museum’s collection.
      </p>
    </div>
  );
}

export default About;
