import CommentDetail from "./CommentDetail";

const Comments = ({ comments, count, refresh, setRefresh }) => {
  let lastThreeComments;
  if (comments.length > 3) {
    const start = comments.length - 3;
    lastThreeComments = comments.slice(start);
  } else {
    lastThreeComments = comments;
  }

  return (
    <>
      {count === "3" ? (
        <section>
          {lastThreeComments.map((comment, key) => {
            return (
              <CommentDetail
                comment={comment}
                key={key}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            );
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
