const ProfileGallery = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-[4px] mt-4">
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?grayscale"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?blur"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?blur=2"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?blur=6"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?grayscale=3"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?grayscale=5"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?blur=8"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?grayscale=1"
        ></img>
        <img
          className="h-[124px] rounded-lg"
          src="https://picsum.photos/200?grayscale=7"
        ></img>
      </section>
    </>
  );
};

export default ProfileGallery;
