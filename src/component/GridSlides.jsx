export default function GridSlides({ className, card }) {
  return (
    <>
      {/* GRID */}
      <div className={`grid grid-cols-12  gap-2 w-full h-full ${className}`}>
        {/* RIGHT-LEFT */}
        <div className="col-span-7  h-full rounded-2xl overflow-hidden">
          <img
            src={card.image}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        {/* RIGHT-RIGHT */}
        <div className="col-span-5  h-full  ">
          {/* GRID */}
          <div className="w-full grid h-full grid-rows-12 gap-2">
            <div
              className="row-span-2 bg-secondary w-full  rounded-2xl 
            flex items-center justify-center text-lg font-semibold text-primary-foreground text-center px-4"
            >
              {card.caption}
            </div>
            <div className="row-span-10 w-full h-full rounded-2xl overflow-hidden">
              <img
                src={card.verticalImage}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
