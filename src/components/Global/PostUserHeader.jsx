import { Link, useParams } from "react-router-dom";
import PointsSvg from "../SVG/PointsSvg";
const PostUserHeader = (props) => {
  let slug;
  return (
    <>
      <section className="flex items-center justify-between mx-auto ">
        <Link to={"/detail/" + slug}>
          <article className="flex justify-between items-center gap-4">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div>
              <p className="font-bold text-accent">anny_wilson</p>
              <p className="text-secondary">Marketing Coordinator</p>
            </div>
          </article>
        </Link>
        <PointsSvg />
      </section>
    </>
  );
};

export default PostUserHeader;
