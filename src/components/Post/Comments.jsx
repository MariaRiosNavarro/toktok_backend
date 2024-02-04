import CommentDetail from "./CommentDetail";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.length > 3 ? (
        <section className="my-4">
          <button>view all {comments.length} comments</button>
        </section>
      ) : (
        ""
      )}

      <section>
        {comments.slice(0, 3).map((comment, key) => {
          return <CommentDetail comment={comment} key={key} />;
        })}
      </section>
    </>
  );
};

export default Comments;
