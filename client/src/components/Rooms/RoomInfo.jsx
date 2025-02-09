const RoomInfo = ({ roomData }) => {
  const { host, bedrooms, bathrooms, guests, description } = roomData;
  const { name, image } = host;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            "
        >
          <div>Hosted by {name}</div>

          <img
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={image}
          />
        </div>
        <div
          className="
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            "
        >
          <div>Total Guest: {guests}</div>
          <div>Total Bedrooms: {bedrooms}</div>
          <div>Total Bathrooms: {bathrooms}</div>
        </div>
      </div>

      <hr />
      <div
        className="
        text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      <hr />
    </div>
  );
};

export default RoomInfo;
