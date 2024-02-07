import PostDetailsFooter from "../Global/PostDetailsFooter";
import PostUserHeader from "../Global/PostUserHeader";

const CommentDetail = ({ comment, refresh, setRefresh }) => {
  console.log("comment from CommentDetails", comment);
  return (
    <>
      <section className="mb-6">
        <PostUserHeader userId={comment?.user} comment={true} />
        <section className="my-3 p-1">
          <p className=" whitespace-normal max-w-full break-words  overflow-wrap ">
            {comment?.text}
          </p>
          {comment?.replies?.length > 0 &&
            comment.replies.map((comment, key) => (
              <section key={key} className="mt-3">
                <p>----{comment?.text}</p>
              </section>
            ))}
        </section>
        <PostDetailsFooter
          reply={true}
          commentId={comment._id}
          date={comment.createdAt}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </section>
    </>
  );
};

export default CommentDetail;
