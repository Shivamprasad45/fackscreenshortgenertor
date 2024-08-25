"use client";
import { useState } from "react";
import { toPng } from "html-to-image";
import {
  BatteryMedium,
  CircleHelp,
  Mail,
  MoveLeft,
  Wifi,
  WifiHigh,
} from "lucide-react";

const Home = () => {
  const [amount, setAmount] = useState<string>("");
  const [senderName, setSenderName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");

  const handleDownload = () => {
    const node = document.getElementById("screenshot-preview");
    if (node) {
      toPng(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "phonepe-fake-screenshot.png";
          link.click();
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-4 bg-white rounded-lg shadow-md max-w-sm w-full">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Sender Name
          </label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter sender name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter time"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter contact number"
          />
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Download Screenshot
        </button>
      </div>

      <div
        id="screenshot-preview"
        className="mt-10 p-4 bg-white rounded-lg shadow-lg w-full max-w-xs"
      >
        <div className="flex items-center justify-between bg-green-500 p-2 text-white">
          <div className="flex items-center space-x-2">
            <span className="text-xs">0 KB/s</span>
            <Mail size={18} />
          </div>
          <div className="flex items-center justify-end space-x-2">
            <Wifi size={18} />
            <BatteryMedium size={18} />
            <span className="text-xs">{time || "16:03"}</span>
          </div>
        </div>

        <div className=" bg-lime-600  px-4 py-2">
          <div className=" justify-start items-center gap-[49px] inline-flex">
            <div className="">
              <MoveLeft color="white" />
            </div>
            <div className="items-start text-start ">
              <div className=" text-center text-white  font-normal font-['Bree Serif'] tracking-tight">
                Transaction Successful
              </div>
              <div className=" text-wrap text-stone-50/80 text-[10px] font-normal font-['Bree Serif'] tracking-tight">
                {date ? (
                  <div className="">{date}</div>
                ) : (
                  "04:02 PM on 25 Jul 2019"
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Transaction ID */}
        <div className="px-4 py-3 border-b-4  ">
          <div className="text-gray-500 text-sm font-medium text-[10px]">
            Transaction ID
          </div>
          <div className="text-gray-800 text-base font-medium flex justify-between items-center">
            <span className="text-[10px]">
              {transactionId || "P1907251602426300583231"}
            </span>
            <span className="text-blue-600 text-xs font-medium cursor-pointer text-[10px]">
              COPY
            </span>
          </div>
        </div>

        {/* Paid To Section */}
        <div className="px-4 py-3 border-b-4">
          <div className="font-bold text-[12px] pb-6">Paid to</div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovIQy7Sqh32fhLLF9N9_uRE4ZgnwQ4FMu2w&s"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-gray-800 font-medium">{senderName}</div>
              <div className="text-gray-500 text-sm">
                {contactNumber || "7052219319"}
              </div>
            </div>
            <div className="ml-auto text-gray-800 font-medium">{`₹${amount}`}</div>
          </div>
          <div className="flex text-blue-600 text-end  justify-end text-[10px] space-x-4">
            <span className="cursor-pointer">SEND AGAIN</span>
            <span className="cursor-pointer">SHARE</span>
            <span className="cursor-pointer">SAVE CONTACT</span>
          </div>
        </div>

        {/* Debited From Section */}
        <div className="px-4 py-3 border-b">
          <div className="">
            <div className="text-gray-800 font-medium">Debited from</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95S5JToI-Nm_IMDq788tORA0j15OTgRiPwQ&s"
                alt=""
              />
            </div>
            <div className="ml-4 space-y-4">
              <div className="text-gray-500 text-sm">******5246</div>
              <div className="text-gray-500 text-xs">UTR: 920648123127</div>
            </div>
            <div className="ml-auto text-gray-800 font-medium">{`₹${amount}`}</div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="px-4 py-3">
          <div className="text-gray-800 font-medium flex items-center gap-2">
            <div className="">
              <CircleHelp />
            </div>
            Contact PhonePe Support
          </div>
          <div className="bg-slate-200 h-40 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
