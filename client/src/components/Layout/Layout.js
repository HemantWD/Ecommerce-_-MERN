import React from "react";
import Headers from "./Headers";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Headers />
      <main style={{ minHeight: "75vh" }}>
        <Toaster />
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "MERN stack project",
  keywords: "mern,react,nodejs,mongodb,redux",
  author: "HemantWD",
};

export default Layout;
