const Button = (props) => {
  return (
    <>
      <article>
        <button className="bg-primary w-full text-lg text-base-100 rounded-3xl py-4">
          {props.text}
        </button>
      </article>
    </>
  );
};

export default Button;
