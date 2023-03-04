/* eslint-disable @next/next/no-img-element */
const header = () => {
  return (
    <header className="max-w-7xl mx-auto  h-16 p-1">
      <ul className="flex justify-between items-center ">
          {/* <img src="/icons/headericon.png" alt="icons" /> */}
          <li className="h-9 w-9 rounded-full">
            <img src="/favicon.ico" alt="logo" />
          </li>
        <div className="flex capitalize text-sm flex-row-reverse items-center gap-x-8">
          <li className="h-9 w-9 rounded-full">
            <img src="/icons/profile.png" alt="profile" />
          </li>
          <li className="h-4 w-4 rounded-full">
            <img src="/icons/searchicon.png" alt="search" />
          </li>
          <li>contact</li>
          <li>blog</li>
          <li>about</li>
          <li className="text-[#9166F0] font-bold">home</li>
        </div>
      </ul>
    </header>
  );
};

export default header;
