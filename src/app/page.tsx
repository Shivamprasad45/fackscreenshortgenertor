"use client";

import { useState } from "react";
import { toPng } from "html-to-image";
import {
  ArrowLeft,
  Battery,
  Check,
  Copy,
  HelpCircle,
  Share2,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export default function Component() {
  const [paymentApp, setPaymentApp] = useState("phonepe");
  const [amount, setAmount] = useState("500");
  const [recipientName, setRecipientName] = useState("RAMESH NAYAK MUDAVAT");
  const [recipientNumber, setRecipientNumber] = useState("9381978288");
  const [date, setDate] = useState("20 May 2023");
  const [time, setTime] = useState("10:58 AM");
  const [transactionId, setTransactionId] = useState(
    "T23052010583667546287773"
  );

  const handleDownload = () => {
    const node = document.getElementById("screenshot-preview");
    if (node) {
      toPng(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `${paymentApp}-screenshot.png`;
          link.click();
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-gray-100 p-4 gap-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">
          Payment App Screenshot Generator
        </h2>
        <div className="space-y-4">
          <RadioGroup defaultValue="phonepe" onValueChange={setPaymentApp}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="phonepe" id="phonepe" />
              <Label htmlFor="phonepe">PhonePe</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gpay" id="gpay" />
              <Label htmlFor="gpay">Google Pay</Label>
            </div>
          </RadioGroup>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <div>
            <Label htmlFor="recipientName">Recipient Name</Label>
            <Input
              id="recipientName"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter recipient name"
            />
          </div>
          <div>
            <Label htmlFor="recipientNumber">Recipient Number</Label>
            <Input
              id="recipientNumber"
              value={recipientNumber}
              onChange={(e) => setRecipientNumber(e.target.value)}
              placeholder="Enter recipient number"
            />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter date"
            />
          </div>
          <div>
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Enter time"
            />
          </div>
          <div>
            <Label htmlFor="transactionId">Transaction ID</Label>
            <Input
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter transaction ID"
            />
          </div>
          <Button className="w-full" onClick={handleDownload}>
            Download Screenshot
          </Button>
        </div>
      </div>

      <div
        id="screenshot-preview"
        className={cn(
          "w-full max-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden",
          paymentApp === "gpay" && "bg-blue-50"
        )}
      >
        {paymentApp === "phonepe" ? (
          <>
            <div className="bg-green-600 text-white p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-1">
                  <span className="text-xs">Airtel</span>
                  <Wifi className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1">
                  <Battery className="w-4 h-4" />
                  <span className="text-xs">100%</span>
                  <span className="text-xs">{time}</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <ArrowLeft className="w-6 h-6 mr-4" />
                <div>
                  <h2 className="font-semibold text-lg">
                    Transaction Successful
                  </h2>
                  <p className="text-sm opacity-80">
                    {date} at {time}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-sm text-gray-500">Transaction ID</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium">{transactionId}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 p-0"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    COPY
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">Paid to</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-semibold text-lg">
                        {recipientName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{recipientName}</p>
                      <p className="text-sm text-gray-500">{recipientNumber}</p>
                    </div>
                  </div>
                  <p className="font-semibold">₹{amount}</p>
                </div>
                <div className="flex justify-end space-x-4 mt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 p-0"
                  >
                    SEND AGAIN
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 p-0"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    SHARE
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">Debited from</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-lg">
                        HD
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">XXXXXXXX8289</p>
                      <p className="text-xs text-gray-500">UTR: 350679646058</p>
                    </div>
                  </div>
                  <p className="font-semibold">₹{amount}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-purple-600"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Contact PhonePe Support
              </Button>
            </div>
            <div className="bg-purple-100 p-4">
              <p className="text-sm text-purple-600">
                Bike insurance from ₹ 1.5/day*
              </p>
            </div>
            <div className="bg-gray-100 p-2 text-center">
              <p className="text-xs text-gray-500">Powered by UPI</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-1">
                  <span className="text-xs">Airtel</span>
                  <Wifi className="w-4 h-4" />
                </div>
                <div className="flex items-center space-x-1">
                  <Battery className="w-4 h-4" />
                  <span className="text-xs">100%</span>
                  <span className="text-xs">{time}</span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <ArrowLeft className="w-6 h-6 mr-4" />
                <div>
                  <h2 className="font-semibold text-lg">Payment successful</h2>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">₹{amount}</p>
                <p className="text-gray-600">Paid to {recipientName}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-600">UPI transaction ID</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-600 p-0"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    COPY
                  </Button>
                </div>
                <p className="text-sm">{transactionId}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-gray-600 mb-2">Paid from</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-semibold text-lg">
                      HD
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">HDFC Bank ••• 8289</p>
                    <p className="text-xs text-gray-500">Savings Account</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 border-blue-600"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Get help
                </Button>
              </div>
            </div>
            <div className="bg-white p-4 text-center">
              <p className="text-xs text-gray-500">
                Google Pay: secure payments by Google
                <br />
                All transactions are protected by SSL encryption
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
