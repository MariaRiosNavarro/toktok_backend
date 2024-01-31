import { useState, useEffect } from "react";
import AddSvg from "../SVG/AddSvg";
import HomeSvg from "../SVG/HomeSvg";
import ProfileSvg from "../SVG/ProfileSvg";
import SearchSvg from "../SVG/SearchSvg";
import { NavLink } from "react-router-dom";

const NavBarBottom = (props) => {
  const [selectedIcon, setSelectedIcon] = useState();

  return (
    <>
      <footer>
        <div className="fixed bottom-0 left-0 z-50 w-full h-16  bg-base-100 ">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-primary" : ""
                } inline-flex flex-col items-center justify-center px-5 group`;
              }}
            >
              <HomeSvg selectedIcon={props.item.home} />
              <span className="text-sm mt-[4px] text-secondary">Home</span>
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-primary" : ""
                } inline-flex flex-col items-center justify-center px-5group`;
              }}
            >
              <SearchSvg selectedIcon={props.item.search} />
              <span className="text-sm mt-[4px] text-secondary">Search</span>
            </NavLink>
            <NavLink
              to="/upload"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-primary" : ""
                } inline-flex flex-col items-center justify-center px-5group`;
              }}
            >
              <AddSvg selectedIcon={props.item.add} />
              <span className="text-sm mt-[4px] text-secondary">Upload</span>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                return `${
                  isActive ? "text-primary" : ""
                } inline-flex flex-col items-center justify-center px-5group`;
              }}
            >
              <ProfileSvg selectedIcon={props.item.profile} />
              <span className="text-sm mt-[4px] text-secondary">Profile</span>
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NavBarBottom;
