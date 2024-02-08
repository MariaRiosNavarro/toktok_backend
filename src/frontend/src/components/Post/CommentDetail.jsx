import PostDetailsFooter from "../Global/PostDetailsFooter";
import PostUserHeader from "../Global/PostUserHeader";
import { useState } from "react";

const CommentDetail = ({ comment, refresh, setRefresh }) => {
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const handleShowReplies = () => {
    setIsReplyOpen(!isReplyOpen);
  };
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
          {comment?.replies?.length > 0 && (
            <>
              {comment?.replies?.length <= 2 ? (
                comment?.replies?.map((reply, key) => (
                  <section
                    key={key}
                    className="mt-3 ml-4 flex items-center gap-3"
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img
                          src={reply?.replyUserData?.img}
                          alt={reply?.replyUserData?.username}
                        />
                      </div>
                    </div>
                    <p className="text-[16px]">
                      @{reply?.replyUserData?.username}... {reply?.text}
                    </p>
                  </section>
                ))
              ) : (
                <>
                  <button onClick={handleShowReplies} className="mb-3">
                    view all {comment?.replies?.length} replies
                  </button>
                  {isReplyOpen &&
                    comment?.replies?.map((replyComment, key) => (
                      <section
                        key={key}
                        className="mt-3 ml-4 flex items-center gap-3"
                      >
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <img
                              src={replyComment?.replyUserData?.img}
                              alt={replyComment?.replyUserData?.username}
                            />
                          </div>
                        </div>
                        <p className="text-[16px]">
                          @{replyComment?.replyUserData?.username}...{" "}
                          {replyComment?.text}
                        </p>
                      </section>
                    ))}
                </>
              )}
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default CommentDetail;
