/* eslint-disable @next/next/no-img-element */
const main = () => {
  return (
    <section className=" ">
        {/* Description */}
      <div className="flex justify-center items-center ">
        <div className="w-1/2">
          <p className="font-bold text-[65px] leading-tight">
            Easy & Digital Online Payment Solutions{' '}
          </p>
          <p className="text-[23px] mt-5">
            Malesuada pretium scelerisque dcmo at diam fusce montes sociosqu 
            ultricies etiamvivamus netus nostra.
          </p>
          <div className="flex gap-x-5 mt-5 capitalize text-[17px] text-center">
            <div className="flex justify-center items-center shadow p-2 rounded-lg w-28 hover:bg-[#9166F0]">
              get start
            </div>
            <div className="flex shadow p-2 justify-between items-center  rounded-lg w-36 hover:bg-[#9166F0]">
              <div className="h-9 w-9">
                <img src="/icons/player.png" alt="playerIcon" />
              </div>
              <div>paly video</div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-1/2">
          <img src="/icons/Intro Images.png" alt="Intro Images" />
        </div>
      </div>
    </section>
  );
};

export default main;
