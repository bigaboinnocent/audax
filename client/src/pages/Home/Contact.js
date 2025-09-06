import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Get in touch" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5 flex items-center space-x-2">
                  <span className="bg-secondary border-2 border-dashed border-white px-2 py-1 rounded">
                    {key}
                  </span>
                  <span className="text-tertiary">{contact[key]}</span>
                </p>
              )
          )}
          <p className="text-tertiary"></p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
