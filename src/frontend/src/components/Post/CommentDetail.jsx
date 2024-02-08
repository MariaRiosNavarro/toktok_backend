import PostDetailsFooter from "../Global/PostDetailsFooter";
import PostUserHeader from "../Global/PostUserHeader";

const CommentDetail = ({ comment, refresh, setRefresh }) => {
  return (
    <>
      <section className="mb-6">
        <PostUserHeader user={comment?.commentUserData} comment={true} />
        <section className="my-3 p-1">
          <p className=" whitespace-normal max-w-full break-words text-lg overflow-wrap ">
            {comment?.text}
          </p>
          <PostDetailsFooter
            reply={true}
            commentId={comment._id}
            date={comment.createdAt}
            refresh={refresh}
            setRefresh={setRefresh}
          />
          {comment?.replies?.length > 0 &&
            comment?.replies?.map((comment, key) => (
              <section key={key} className="mt-3 ml-5">
                <p className="text-[16px]">
                  @{comment?.replyUserData?.username}... {comment?.text}
                </p>
              </section>
            ))}
        </section>
      </section>
    </>
  );
};

export default CommentDetail;
