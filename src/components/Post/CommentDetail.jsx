import PostDetailsFooter from "../Global/PostDetailsFooter";
import PostUserHeader from "../Global/PostUserHeader";

const CommentDetail = ({ comment }) => {
  return (
    <>
      <section className="mb-6">
        <PostUserHeader />
        <section className="my-3">
          <p>{comment.text}</p>
        </section>
        <PostDetailsFooter />
      </section>
    </>
  );
};

export default CommentDetail;
