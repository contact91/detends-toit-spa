import clsx from "clsx";

const BlurShape = ({
  color = "bg-blue-400",
  size = "w-60 h-60",
  className = "",
  style = {},
  opacity = "opacity-30",
  blur = "blur-3xl",
}) => {
  return (
    <div
      className={clsx(
        "rounded-full pointer-events-none",
        color,
        size,
        blur,
        opacity,
        className
      )}
      style={style}
    />
  );
};

export default BlurShape;
