import Heading from "components/designs/Heading";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function photography() {
  return (
    <Page
      currentPage="Photography"
      meta={{
        desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also.",
      }}
    >
      <Heading />
      <Projects />
    </Page>
  );
}

export default photography;
