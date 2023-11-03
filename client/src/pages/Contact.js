import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contact us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Contact Us</h1>
          <p className="text-justify mt-2">
            Any Query and info about product feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.test@test.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 1800 1099 1234
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800 1099 1235
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
