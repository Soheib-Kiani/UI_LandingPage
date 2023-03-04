/* eslint-disable @next/next/no-img-element */
const card = () => {
  return (
    <section className="mt-12">
      {/* Title */}
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-[40px]">
          You do the business, we will handle the money
        </p>
        <p className="text-center font-thin text-[20px]">
          Everything you need to accept card payments and grow your <br />{' '}
          business anywhere on the planet.
        </p>
      </div>
      {/* Crard */}
      <div className="grid place-items-center grid-cols-3 mt-12">
        <div className="text-center">
          <div className="grid place-items-center">
            <img
              className="h-16 w-14 object-contain "
              src="/icons/credit card.png"
              alt="descriptionicon"
            />
          </div>
          <p className="mt-9 font-bold">Every Card Network</p>
          <p className="text-[15px] font-extralight mt-3">
            Accept Visa, MasterCard, American <br /> Express, Discover, JCB,
            Union Pay, and a <br /> bunch more with a few simple taps
          </p>
        </div>
        {/* ---------------------- */}
        <div className="text-center">
          <div className="grid place-items-center">
            <img
              className="h-16 w-14 object-contain "
              src="/icons/money.png"
              alt="descriptionicon"
            />
          </div>
          <p className="mt-9 font-bold">Multi Currency</p>
          <p className="text-[15px] font-extralight mt-3">
            Charge in over 135 currencies. Let <br /> customers pay in their
            native currency,
            <br /> you get paid in yours
          </p>
        </div>
        {/* ------------------------- */}
        <div className="text-center">
          <div className="grid place-items-center">
            <img
              className="h-16 w-14 object-contain "
              src="/icons/credit.png"
              alt="descriptionicon"
            />
          </div>
          <p className="mt-9 font-bold">Contactless Payments</p>
          <p className="text-[15px] font-extralight mt-3">
            Tap to charge contactless cards. Hold a <br /> card against your
            device's NFC chip and <br /> boom, you're in business!
          </p>
        </div>
      </div>
    </section>
  );
};

export default card;
