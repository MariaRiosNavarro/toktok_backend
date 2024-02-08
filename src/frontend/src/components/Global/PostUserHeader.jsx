import { Link, useParams } from "react-router-dom";
import PointsSvg from "../SVG/PointsSvg";
import AvatarSvg from "../SVG/AvatarSvg";
const PostUserHeader = ({ user, comment }) => {
  return (
    <>
      <section className="flex items-center justify-between mx-auto ">
        <Link to={"/detail/" + user?._id} className="inline-block">
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
                {user?.username ? user?.username : user?.username}
              </p>
              <p className="text-secondary">{user?.job}</p>
            </div>
          </article>
        </Link>
        {comment ? (
          <details className="dropdown dropdown-end bg-none">
            <summary className="m-1 btn">
              <PointsSvg />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box ">
              <li>
                <a>Delete</a>
              </li>
              <li>
                <a>Edit</a>
              </li>
            </ul>
          </details>
        ) : (
          <PointsSvg />
        )}
      </section>
    </>
  );
};

export default PostUserHeader;
