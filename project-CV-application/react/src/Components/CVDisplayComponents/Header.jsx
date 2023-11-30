export default function Header({ text }) {
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-[45rem] h-[2rem] bg-gray-400 flex justify-center items-center font-bold text-xl mb-5">
        {text}
      </div>
    </div>
  );
}
