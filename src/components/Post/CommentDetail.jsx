import PostDetailsFooter from "../Global/PostDetailsFooter";
import PostUserHeader from "../Global/PostUserHeader";

const CommentDetail = ({ comment }) => {
  return (
    <>
      <section className="mb-6">
        <PostUserHeader userId={comment.user} />
        <section className="my-3 p-1">
          <p className=" whitespace-normal max-w-full break-words  overflow-wrap ">
            {comment.text}
          </p>
        </section>
        <PostDetailsFooter user={true} />
      </section>
    </>
  );
};

export default CommentDetail;
