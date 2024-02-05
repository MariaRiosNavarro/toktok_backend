import CommentDetail from "./CommentDetail";

const Comments = ({ comments, count }) => {
  const start = comments.length - 3;
  const lastThreeComments = comments.slice(start);
  console.log("comment", comments);
  return (
    <>
      {count === "3" ? (
        <section>
          {lastThreeComments.map((comment, key) => {
            return <CommentDetail comment={comment} key={key} />;
          })}
        </section>
      ) : (
        <section>
          {comments.map((comment, key) => {
            return <CommentDetail comment={comment} key={key} />;
          })}
        </section>
      )}
    </>
  );
};

export default Comments;
