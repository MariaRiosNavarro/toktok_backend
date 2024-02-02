import CommentDetail from "./CommentDetail";

const Comments = ({ comments }) => {
  return (
    <>
      <section>
        {comments.map((comment, key) => {
          return <CommentDetail comment={comment} key={key} />;
        })}
      </section>
    </>
  );
};

export default Comments;
