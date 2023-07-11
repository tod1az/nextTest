"use client";
const Button = ({ content, cb }) => {
  return (
    <div>
      <button
        onClick={cb}
        className="bg-black text-blue-200 rounded-2xl p-1 border-2 border-white
                hover:bg-gray-400 hover:text-red-200 hover:scale-110"
      >
        {content}
      </button>
    </div>
  );
};
export default Button;
