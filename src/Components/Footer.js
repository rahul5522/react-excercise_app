import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        marginBottom: "10px",
        fontFamily: "Verdana, Geneva, sans-serif",
        fontSize: "10px",
      }}
    >
      <p>
        Made with{" "}
        <i
          style={{ fontSize: "8px" }}
          class="fa fa-heart"
          aria-hidden="true"
        ></i>
        &nbsp;by&nbsp;
        <a
          href="https://twitter.com/RahulWa06202555"
          style={{ textDecoration: "none", color: "#32B531" }}
        >
          Rahul
        </a>
      </p>
    </div>
  );
};

export default Footer;
