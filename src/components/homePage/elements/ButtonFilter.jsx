export default function Button() {
  return (
    <div className="relative inline-flex items-center border border-white/10 bg-white/20 text-white rounded-full px-4 py-2">
      <div className="flex items-center">
        <svg
          className="w-4 h-4 mr-2 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-gray-400">Position</span>
        <span className="mr-10">DRAGON LINE</span>
      </div>
      <button className="text-gray-400 hover:text-gray-200 px-3 py-2">
        <svg
          className="w-4 h-4 border border-gray-400 rounded-[10px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}
