const Button = ({ children, type, handler }) => {
  const style =
    type === "danger"
      ? "bg-red-500 text-white px-3 py-2 rounded shadow cursor-pointer"
      : "bg-violet-600 text-white px-3 py-2 rounded shadow cursor-pointer";
  return (
    <div>
      <button className={style} onClick={handler}>
        {children}
      </button>
    </div>
  );
};

export default Button;
