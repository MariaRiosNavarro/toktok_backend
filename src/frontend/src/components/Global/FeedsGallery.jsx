import FeedsRectangleSvg from "../SVG/FeedsRectangleSvg";
import FeedsSvg from "../SVG/FeedsSvg";
import LineSvg from "../SVG/LineSvg";

const FeedsGallery = () => {
  return (
    <article className="mt-6">
      <div className="flex items-center gap-2 mb-3 w-4/12 justify-center">
        <FeedsSvg />
        <p className="text-primary text-[16px]">Feeds</p>
      </div>
      <FeedsRectangleSvg width={"127"} />
    </article>
  );
};

export default FeedsGallery;
