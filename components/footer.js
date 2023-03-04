/* eslint-disable @next/next/no-img-element */
const footer = () => {
  return (
    <footer className="flex justify-between px-5 py-8">
      <div className="   ">
        <img className="h-9 w-9" src="/favicon.ico" alt="logo" />
      </div>

      <div className="flex pl-10  justify-around gap-x-10 ">
        <p className="font-extralight">About Us</p>
        <p className="font-extralight">Careers</p>
        <p className="font-extralight">Quick Contact</p>
        <p className="font-extralight">Help</p>
        <p className="font-extralight">Fees</p>
      </div>

      <div className="flex    gap-x-5 ">
        <div>
          <img className="h-9 w-9" src="/icons/facebook.png" alt="logo" />
        </div>
        <div>
          <img className="h-9 w-9" src="/icons/twitter.png" alt="logo" />
        </div>
        <div>
          <img className="h-9 w-9" src="/icons/instagram.png" alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default footer;
