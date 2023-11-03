import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            itaque corporis nihil illum temporibus, ex quia impedit fugiat est
            rem neque corrupti possimus praesentium molestiae mollitia a facere
            at iusto, omnis repellendus, qui laborum aperiam. Quam dolores
            molestias expedita, eveniet deleniti architecto, iure voluptas
            beatae veniam consequuntur officia aliquid. Quisquam!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
