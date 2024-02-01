import ProfileAvatar from "./ProfileAvatar";

const DetailUser = () => {
  return (
    <>
      <section className="flex flex-col gap-3 items-center  justify-center">
        <ProfileAvatar />
        <article className="flex flex-col gap-2 text-center">
          <h3 className="font-bold text-2xl text-accent">Julia Adaline</h3>
          <p className="text-accent">Photographer</p>
          <p className="text-secondary text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <a href="https://www.google.com" className="font-bold">
            www.yourdomain.com
          </a>
        </article>
        <article className="w-full flex justify-around items-center mt-5 mb-6">
          <div className="text-center">
            <h3 className="font-bold text-2xl text-accent">267</h3>
            <p className="text-secondary text-sm">posts</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-accent">26.47</h3>
            <p className="text-secondary text-sm">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-2xl text-accent">400</h3>
            <p className="text-secondary text-sm">Following</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default DetailUser;
