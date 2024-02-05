import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PointsSvg from "../SVG/PointsSvg";
import AvatarSvg from "../SVG/AvatarSvg";
const PostUserHeader = ({ userId }) => {
  const [user, setUser] = useState();
  //console.log("____ userId from PostUserHeader", userId);

  useEffect(() => {
    async function getUserData() {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users?id=${userId}`,
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
        setUser(data.user);
      }
    }
    getUserData();
  }, []);

  return (
    <>
      <section className="flex items-center justify-between mx-auto ">
        <Link to={"/detail/" + userId} className="inline-block">
          <article className="flex justify-between items-center gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                {user?.img ? (
                  <img src={user?.img} />
                ) : (
                  <AvatarSvg width={"48"} />
                )}
              </div>
            </div>
            <div>
              <p className="font-bold text-accent">
                {user?.name ? user?.name : user?.username}
              </p>
              <p className="text-secondary">{user?.job}</p>
            </div>
          </article>
        </Link>
        <PointsSvg />
      </section>
    </>
  );
};

export default PostUserHeader;
