/* eslint-disable @next/next/no-img-element */
const download = () => {
  return (
    <sectiom className="mt-12">
      {/* Description */}
      <div className="flex justify-center items-center ">
        <div className="w-1/2">
          <p className="font-bold text-[35px]">Download Pay Apps</p>
          <p className="text-[19px] text-justify font-extralight mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
            tempor magna, sed viverra elit. Integer cursus tellus quis ante
            iaculis placerat. Curabitur vulputate tempor mauris a rutrum.
            Suspendisse ullamcorper libero justo, sed hendrerit nunc mollis eu.
            Vivamus blandit luctus diam sed feugiat.
          </p>
          <div className="flex gap-x-5 mt-5 capitalize text-[17px] text-center">
            <div className="flex justify-center items-center shadow p-2 rounded-lg w-28 hover:bg-[#9166F0]">
              google play
            </div>
            <div className="flex shadow p-2 justify-between items-center  rounded-lg w-36 bg-[#9166F0]">
              <div className="h-9 w-9 flex justify-center items-center">
                <img src="/icons/apple.png" alt="appleicons" />
              </div>
              <div>Apple Store</div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-1/2">
          <img src="/icons/Intro Images.png" alt="Intro Images" />
        </div>
      </div>
    </sectiom>
  );
};

export default download;
