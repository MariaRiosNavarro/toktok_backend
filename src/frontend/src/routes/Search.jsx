import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SearchSvg from "../components/SVG/SearchSvg";
import { useTheme } from "../context/userContext";
import NavBarBottom from "../components/Global/NavBarBottom";
import ProfileSvg from "../components/SVG/ProfileSvg";
import FeedsRectangleSvg from "../components/SVG/FeedsRectangleSvg";
import NavBarTop from "../components/Global/NavBarTop";
import AvatarSvg from "../components/SVG/AvatarSvg";
import { useUserContext } from "../context/loginContext";

const Search = () => {
  const { theme } = useTheme();
  const { refresh, setRefresh, loginUser } = useUserContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [followingStatus, setFollowingStatus] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);
  const [detailUserData, setDetailUserData] = useState(null);
  //   -----------------------------------------------------------------STYLES

  let commonStyles =
    "rounded-xl px-[20px] p-4 h-6 ml-3 focus:border-none focus:outline-none w-full";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <NavBarTop
        leftSvgComponent=""
        leftLink=""
        leftText=""
        rightSvgComponent=""
        rightLink="/"
      />
      <main className="p-6 pt-1 pb-20">
        <section className="flex items-center mb-6">
          <SearchSvg />
          <input
            className={inputClassNames}
            type="text"
            id="searchInput"
            name="searchInput"
            placeholder="Search one user ..."
            value={searchTerm}
            onChange={handleChange}
          />
        </section>
        <section className="flex flex-col">
          <div className="mx-auto mb-3">
            <ProfileSvg selectedIcon={true} />
          </div>

          <div className="">
            <FeedsRectangleSvg width={"100%"} />
          </div>
        </section>
        <section></section>
      </main>

      <NavBarBottom
        item={{ home: false, search: true, profile: false, add: false }}
      />
    </>
  );
};

export default Search;
