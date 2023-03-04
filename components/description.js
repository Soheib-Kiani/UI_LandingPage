/* eslint-disable @next/next/no-img-element */
const description = () => {
  return (
    <section className="mt-12">
      <div className="flex gap-x-9">
        {/* Image */}
        <div className="w-1/2 h-1/3">
          <img className="" src="/icons/Group 321.png" alt="image" />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center ">
          <div>
            <p className="font-bold text-[35px]">
              Easily control your billing & invoicing
            </p>
            <p className="text-[23px] font-extralight mt-3">
              Enable faster purchasing by giving every employee access to the
              funds they need in a safe.
            </p>
          </div>
          {/* Description */}
          <div className="mt-5 flex flex-col gap-y-7">
            <div className="flex justify-start gap-x-5 items-center text-center ">
              <div className="h-12 w-12">
                <img src="/icons/article.png" alt="image" />
              </div>
              <div className="flex flex-col items-start w-auto">
                <p className="font-bold">Generate an invoice</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  eiusmod tempor
                </p>
              </div>
            </div>
            {/* --------------------- */}
            <div className="flex justify-start gap-x-5 items-center text-center ">
              <div className="h-12 w-12">
                <img src="/icons/paied.png" alt="image" />
              </div>
              <div className="flex flex-col items-start w-auto">
                <p className="font-bold">Get paid fast globally</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  eiusmod tempor
                </p>
              </div>
            </div>
            {/* ------------------------- */}
            <div className="flex justify-start gap-x-5 items-center text-center ">
              <div className="h-12 w-12">
                <img src="/icons/simplify.png" alt="image" />
              </div>
              <div className="flex flex-col items-start w-auto">
                <p className="font-bold">Simplify operations</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  eiusmod tempor
                </p>
              </div>
            </div>
            {/* ------------------------------ */}
            <div className="flex justify-start gap-x-5 items-center text-center ">
              <div className="h-12 w-12">
                <img src="/icons/invonce.png" alt="image" />
              </div>
              <div className="flex flex-col items-start w-auto">
                <p className="font-bold">Send an invoice</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 place-items-center mt-12">
        <div className="w-24 h-16 object-contain">
          <img src="/icons/google.png" alt="icons" />
        </div>
        <div className="w-24 h-16 object-contain">
          <img src="/icons/amazon.png" alt="icons" />
        </div>
        <div className="w-24 h-16 object-contain">
          <img src="/icons/instacart.png" alt="icons" />
        </div>
        <div className="w-24 h-16 object-contain">
          <img src="/icons/slack.png" alt="icons" />
        </div>
        <div className="w-24 h-16 object-contain">
          <img src="/icons/helpscout.png" alt="icons" />
        </div>
      </div>
    </section>
  );
};

export default description;
