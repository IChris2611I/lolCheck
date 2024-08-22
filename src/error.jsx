import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="relative flex items-center justify-center h-screen bg-auto bg-center bg-no-repeat bg-error">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
			<div className="relative z-10 backdrop-blur-2xl bg-black/60 rounded-lg shadow-lg p-8 max-w-md w-full">
				<div className="flex items-center justify-between mb-6">
					<img src="/logo.png" alt="Riot Games" className="w-18 h-14" />
					<h1 className="text-white font-bold text-5xl">Oups...</h1>
				</div>
				<div className="bg-gray-700/70 p-4 rounded-lg text-white mb-4">
					<h2 className="text-xl font-semibold">
						Sorry, something went wrong.
					</h2>
					<p className="mt-2">
						&gt;&gt;{" "}
						{error?.statusText ||
							error?.message ||
							"The page you are looking for does not exist or an unexpected error has occurred."}{" "}
						&lt;&lt;
					</p>
				</div>
				<div className="bg-gray-700/70 p-4 rounded-lg text-white">
					<h3 className="text-lg font-semibold">
						Error Code: {error?.status || "404"}
					</h3>
					<p className="mt-2">
						This error may have occurred due to one of the following reasons:
					</p>
					<ul className="list-disc list-inside mt-2">
						<li>The page has been moved or deleted.</li>
						<li>The URL is incorrect.</li>
						<li>There was an issue on our end, and we're working on it.</li>
					</ul>
				</div>

				{error && (
					<div className="bg-red-700/70 p-4 rounded-lg text-white mt-4">
						<h3 className="text-lg font-semibold">Error Details:</h3>
						<pre className="mt-2 whitespace-pre-wrap">
							{JSON.stringify(error, null, 2)}
						</pre>
					</div>
				)}

				<div className="mt-6 text-center">
					<a href="/" className="text-gray-400 hover:text-white underline">
						Go back to Home Page
					</a>
				</div>
			</div>
		</div>
	);
}

export default ErrorPage;
