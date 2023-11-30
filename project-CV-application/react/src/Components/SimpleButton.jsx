
// a button components where you can add the background color, defind its width and also
// define a funtion to be executed on click
export default function Button({ text, bgColor = "black", onClickFunction, width = "5rem", }) {
  const backgroundColor = bgColor;
  const wide = width
  return (
    <button
      style={{ backgroundColor: backgroundColor, width : wide }}
      className="rounded-md p-2 w-20 border border-black flex justify-evenly items-center mr-1 text-white"
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
}
