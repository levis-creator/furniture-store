import Image from "next/image";

const TestimonyItem = ({ data }) => {
  return (
    <>
      <div className="text-center mt-2 px-10 flex flex-col justify-center items-center space-y-6">
        <div>
          <p className="">{data.testimony}</p>
          <h2 className="text-amber-700 font-medium">Client Name</h2>
        </div>
        <Image
          src={data.profileImage}
          width={0}
          height={0}
          alt="client profile"
          className="w-14 h-14  rounded-full object-cover"
        />
      </div>
    </>
  );
};

export default TestimonyItem;
