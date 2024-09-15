import React from "react";
import "./FeaturedProjects.css";
import { assets } from "../../assets/assets";
import ShowCase from "./FeaturedLayouts/Showcase/ShowCase";
import Content from "./FeaturedLayouts/Content/Content";
import { Link } from "react-router-dom";
const FeaturedProjects = () => {
  return (
    <>
      <div className="banner-featured">
        <div className="banner-container">
          <div className="banner-featured-content">
            <div className="featured-body">
              <h2>Crafting Quality, One Project at a Time</h2>
              <p>Discover our latest and most impressive works.</p>
              <button>
                {" "}
                <Link to="/Contact" className="btn">
                  explore more
                </Link>
              </button>
            </div>
          </div>
          <div className="banner-featured-content">
            <img src={assets.grinder} alt="" />
          </div>
        </div>
        <ShowCase />
      </div>
      <Content />
    </>
  );
};

export default FeaturedProjects;
