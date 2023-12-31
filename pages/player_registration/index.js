import React from "react";
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { BiSolidCricketBall } from "react-icons/bi";
const Register = () => {
  const submitFormData = (e) => {
    e.preventDefault();
    console.log("dd");
  };
  return (
    <div className="bg-[#28282B] h-screen ">
      <div className="flex flex-col items-center justify-center p-10 ">
        <h1 className="text-[#DBAE3B] sm:text-3xl flex gap-1 items-center justify-center text-xl font-semibold font-serif p-12 whitespace-nowrap">
          Player Registration
          <GiAmericanFootballHelmet/>
        </h1>

        <div className="p-10 w-full border-2 border-[#DBAE3B] rounded-lg md:w-1/2">
          <form className="space-y-8" onSubmit={(e) => submitFormData(e)}>
            <div>
              <label for="name" className="text-white">
                Name:
              </label>
              <input
                type="text"
                name="name"
                required
                className="text-white rounded-lg p-2 w-full bg-[#37373a] border-[1px] border-[#DBAE3B] focus:border-[1px] focus:border-white"
              />
            </div>
            <div>
              <label for="name" className="text-white">
                Phone Number:
              </label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                name="Phone Number"
                required
                className="text-white rounded-lg p-2 w-full bg-[#37373a] border-[1px] border-[#DBAE3B] focus:border-[1px] focus:border-white"
              />
            </div>
            <div>
              <label for="name" className="text-white">
                Speciality:
              </label>
              <select
                required
                className="rounded-lg text-white p-2 w-full bg-[#37373a] border-[1px] border-[#DBAE3B] focus:border-[1px] focus:border-white"
              >
                <option>Select</option>
                <option>Batsman</option>
                <option>Bowler</option>
                <option>All ROunder</option>
              </select>
            </div>
            <div>
              <label for="teamName" className="text-white">
                Address:
              </label>
              <input
                type="text"
                name="teamName"
                className="text-white rounded-lg p-2 w-full border-[1px] border-[#DBAE3B] bg-[#37373a] focus:border-[1px] focus:border-white"
                required
              />
            </div>
            <div>
              <label for="photo" className="text-white">
                Photo:
              </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                required
                className="rounded-lg p-2 w-full border-[1px] bg-[#37373a] text-white border-[#DBAE3B] focus:border-[1px] focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="text-[#28282B] flex items-center justify-center gap-2 font-semibold rounded-lg p-2 w-full hover:bg-[#DBAE3B] border-[2px] bg-[#8b6e23] border-[#96731c] focus:border-[1px] focus:border-blue-500"
            >
              Register
              <BiSolidCricketBall/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
