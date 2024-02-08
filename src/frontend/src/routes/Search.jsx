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
  //   -----------------------------------------------------------------STYLES

  let commonStyles =
    "rounded-xl px-[20px] p-4 h-6 ml-3 focus:border-none focus:outline-none w-full";
  const darkStyles = "bg-[#9E9E9E] placeholder:text-gray-500 text-gray-700";
  const lightStyles = "bg-[#FAFAFA]";
  const inputClassNames = `${commonStyles} ${
    theme === "dark" ? darkStyles : lightStyles
  }`;

  async function getAllUsers() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/all`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        }
      );
      if (res.ok) {
        const data = await res.json();
        const followingStatusObject = {};
        data.forEach((user) => {
          followingStatusObject[user.user._id] = user.followStatus;
        });

        setFollowingStatus(followingStatusObject);
        setRefresh(!refresh);
        setUsers(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  async function updateFollow(userId) {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/follow?id=${userId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          credentials: "include",
        }
      );

      if (res.ok) {
        const response = await res.json();
        console.log(response.message);
        getAllUsers();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredUsers = users.filter(
      (user) =>
        user &&
        user.user.username &&
        user.user.username.toLowerCase().includes(searchTerm)
    );

    setFilteredUsers(filteredUsers);
  };
  const handleFollowClick = (userId) => {
    updateFollow(userId);
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
        <section>
          {(searchTerm.trim() !== "" ? filteredUsers : users).map(
            (result) =>
              result?.user?.username && (
                <section
                  key={result?.user?._id}
                  className="w-full flex justify-between items-center mt-6"
                >
                  <Link
                    to={"/detail/" + result?.user?._id}
                    className="flex justify-between items-center gap-5"
                  >
                    <div className="avatar">
                      <div className="w-14 rounded-full">
                        {result?.user?.img ? (
                          <img src={result?.user?.img} />
                        ) : (
                          <AvatarSvg width={"48"} />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-accent mx-auto max-w-[110px] overflow-hidden  ">
                        {result?.user?.username}
                      </h3>
                      <p className="text-[14px]  text-secondary">
                        {result?.user?.job}
                      </p>
                    </div>
                  </Link>

                  <article>
                    <button
                      onClick={() => handleFollowClick(result?.user?._id)}
                      className={`flex justify-center items-center gap-2  text-lg  rounded-3xl py-[6px] px-4 ${
                        followingStatus[result?.user?._id]
                          ? "bg-base-100 text-primary border-2 border-primary"
                          : "bg-primary text-base-100"
                      }`}
                    >
                      <span>
                        {followingStatus[result?.user?._id]
                          ? "Following"
                          : "Follow"}
                      </span>
                    </button>
                  </article>
                </section>
              )
          )}
        </section>
      </main>

      <NavBarBottom
        item={{ home: false, search: true, profile: false, add: false }}
      />
    </>
  );
};

export default Search;
