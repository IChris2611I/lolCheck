export default function Nav() {
	return (
		<div className="text-white flex flex-col col-start-4 col-span-full row-start-1 row-span-3">
			<div className="flex justify-between items-center p-4 h-2/4 w-full ">
				<div>
					<svg
						className="backdrop-blur-sm bg-[#FFFFFF1A] hover:bg-slate-800 cursor-pointer w-6 h-6 border border-gray-400 rounded-[6px]"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 12 32"
						stroke="white"
					>
						<title>Arrow</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 24l-7-7 7-7"
						/>
					</svg>
				</div>
				<div>
					<h1 className="font-bold tracking-widest text-2xl ">
						Champions list
					</h1>
				</div>
				<div className="flex gap-4 ">
					<svg
						className="backdrop-blur-sm bg-[#FFFFFF1A] hover:bg-slate-800 cursor-pointer border p-[2px] border-gray-400 rounded-[6px]"
						width="24"
						height="24"
						viewBox="0 0 24 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Notification Icon</title>
						<path
							d="M12 2C10.35 2 9 3.35 9 5V6C6.79 6 5 7.79 5 10V15L3 17V18H21V17L19 15V10C19 7.79 17.21 6 15 6V5C15 3.35 13.65 2 12 2ZM7 15V10C7 8.9 7.9 8 9 8H15C16.1 8 17 8.9 17 10V15L18.66 16.66C18.45 16.84 18.23 17 18 17H6C5.77 17 5.55 16.84 5.34 16.66L7 15ZM12 22C10.89 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z"
							fill="lightgrey"
						/>
					</svg>

					<div>
						<img src="#" alt="account" />
					</div>
				</div>
			</div>
			<div className="h-2/4 w-full p-4">
				<div>test</div>
			</div>
		</div>
	);
}
