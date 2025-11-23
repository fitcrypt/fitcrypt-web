import React from "react";
import ComingSoon from "../component/ComingSoon";
import SEO from "../component/SEO";

function Blog() {
  return (
    <>
      <SEO 
        title="Blog - FitCrypt | Fitness Tips & Privacy Insights"
        description="Read the latest articles on fitness, workout tips, and data privacy. Stay informed with FitCrypt's blog."
        keywords="fitness blog, privacy blog, workout tips, health data security"
        url="https://fitcrypt.app/blog"
      />
      <ComingSoon />
    </>
  );
}

export default Blog;
