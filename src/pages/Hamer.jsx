import React, { useEffect, useState } from "react";
import product from "../assets/productimage.png";
import bg from "../assets/bg.webp";
import { Button, message, Space } from "antd";
import video from "../assets/WhatsApp Video 2023-05-12 at 5.17.13 PM.mp4"

const Hamer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Order Place Sucessfully",
      texsize:44,
    });
  };

  const [formData, setFormData] = useState({
    country: "nepal",
    name: "",
    phone: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch(
      "https://sheet.best/api/sheets/1b422773-8237-4544-8596-7ac59e04a621",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => {
        success();
        setFormData({
          country: "nepal",
          name: "",
          phone: "",
        });
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {}, [formData]);

  const backgroundImageUrl = "";

  return (
    <>
      <div
        // className="h-[100vh] xl:h-auto"
        style={{
          // backgroundImage: `url(${backgroundImageUrl})`,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "100vh",
        }}
      >
        {contextHolder}
        <div className="flex flex-col items-center gap-4 justify-center py-6">
          <div class="border-4 border-black rounded-full px-36  text-6xl xl:text-5xl text-black font-bold     py-4 ">
            MR.BIG
          </div>
          <div>
            <video
              className="avid w-[800px] xl:w-[400px]"
              autoPlay="true"
              height={300}
              width={400}
              controls="controls"
              poster=""
              data-url="/81/videos/1550185200/hammerofthor-oldmanfuck2"
              controlslist="nodownload"
            >
              {/* <source src="//cdn.ahacdu.com/81/videos/1550185200/hammerofthor-oldmanfuck2.mp4" /> */}
              <source src={video} />
            </video>
          </div>
          <div className="xl:w-[250px] w-[450px] xl:h-[250px]">
            <img className="w-full h-full" src={product} />
          </div>
          <div>
            <p
              className="xl:text-[20px] text-[44px] pb-1 font-bold text-center
          "
            >
              {" "}
              MR.BIG यौन चाहना बढाउँछ
            </p>

            <button className="block bg-[#F78915] px-56  xl:px-36 py-2 shadow-orange-900 shadow-md text-white text-5xl xl:text-xl rounded-full">
              अर्डर
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#8EB81E] flex justify-center flex-col items-center py-10">
        <h2 className="line-through text-5xl xl:text-xl text-black font-bold font-serif">
          रु ८,५००
        </h2>
        <h2 className="text-white text-7xl py-2  xl:text-4xl font-bold font-serif">
          रु ४,२५०
        </h2>

        <div>
          <form onSubmit={handleSubmit} className="w-full xl:max-w-sm mx-auto">
            <div>
              <div class="inline-block relative mt-2">
                <select
                  value={formData.name}
                  onChange={handleChange}
                  class="block xl:w-[330px] xl:text-xl  w-[400%] text-4xl  rounded-full appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option
                    className="text-xs xl:text-xl rounded-full"
                    value={formData.name}
                  >
                    Nepal
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.142 6.828a1 1 0 0 0-1.414 0L10 9.586l-2.828-2.758a1 1 0 0 0-1.414 1.414l3.172 3.104a1 1 0 0 0 1.414 0l3.172-3.104a1 1 0 0 0 0-1.414z" />
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="appearance-none text-4xl xl:text-xl  border rounded-full my-2 xl:w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  id="name"
                  className="appearance-none xl:text-xl  text-4xl border rounded-full xl:w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />
              </div>
              <div className="my-3">
                <button className="block bg-[#F78915] px-60  xl:px-36 py-2 shadow-orange-900 shadow-md text-white text-5xl xl:text-xl rounded-full">
                  अर्डर
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex text-3xl items-center text-red-950 xl:text-sm flex-col py-10 justify-center">
        <p>© 2023 Copyright. All rights reserved.</p>
        <p>Privacy policy | Report</p>
      </div>
    </>
  );
};

export default Hamer;
