export default function SectionLeft() {
  return (
    <div className="h-full w-full col-span-3 row-span-full flex flex-col">
      <div className="flex justify-center items-center w-full h-1/6">
        <img
          src="/logo.png"
          alt="logo riot game"
          className="w-22 h-10 justify-center items-center"
        />
      </div>
      <div className="bg-red-900 w-full h-5/6"></div>
    </div>
  );
}
