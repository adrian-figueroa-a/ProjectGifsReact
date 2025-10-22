// import React from "react";

interface props {
  title: string;
  description?: string;
}

export const Customheader = ({ title, description }: props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
