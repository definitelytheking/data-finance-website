import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga esse
            cumque blanditiis sunt ut optio. Sunt perspiciatis, illum,
            praesentium officiis laudantium veritatis distinctio at eum
            voluptatibus tempore, non consequatur facere?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
