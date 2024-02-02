import ProfileAvatar from "./ProfileAvatar";

const DetailUser = ({ user }) => {
  return (
    <>
      <section className="flex flex-col gap-3 items-center  justify-center">
        <ProfileAvatar />
        <article className="flex flex-col gap-2 text-center">
          <h3 className="font-bold text-2xl text-accent">{user.name}</h3>
          <p className="text-accent">{user.job}</p>
          <p className="text-secondary text-sm">{user.description}</p>
          {/* <a href="https://www.google.com" className="font-bold">
            www.yourdomain.com
          </a> */}
        </article>
        <article className="w-full flex justify-around items-center mt-5 mb-6">
          <div className="text-center">
            <h3 className="font-bold text-2xl text-accent">
              {user.posts.length}
            </h3>
            <p className="text-secondary text-sm">posts</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-accent">
              {user.followers.length}
            </h3>
            <p className="text-secondary text-sm">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-accent">
              {user.following.length}
            </h3>
            <p className="text-secondary text-sm">Following</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailUser;
