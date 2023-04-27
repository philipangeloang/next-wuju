import { useState } from "react";

const Modal = ({ modality }: any) => {
  const [capital, showCapital] = useState(true);
  const [reminder, showReminder] = useState(false);
  return (
    <div className="fixed z-10 flex h-screen w-screen items-center justify-center bg-gray-700/50">
      <div className="h-[33rem] w-[25rem] rounded-xl bg-off-white">
        <div className="grid grid-cols-12 items-center justify-center">
          <div
            onClick={() => {
              showCapital(true);
              showReminder(false);
            }}
            className={
              capital
                ? "col-span-6 cursor-pointer rounded-tl-xl bg-main-black p-3 text-center font-semibold text-white"
                : "col-span-6 cursor-pointer rounded-tl-xl bg-white p-3 text-center font-semibold"
            }
          >
            Capital
          </div>
          <div
            onClick={() => {
              showCapital(false);
              showReminder(true);
            }}
            className={
              reminder
                ? "col-span-6 cursor-pointer rounded-tr-xl bg-main-black p-3 text-center font-semibold text-white"
                : "col-span-6 cursor-pointer rounded-tr-xl bg-white p-3 text-center font-semibold"
            }
          >
            Reminder
          </div>
        </div>
        {capital && (
          <form className="grid grid-cols-12 gap-4 p-6">
            <div className="col-span-12 flex flex-col">
              <label>Title</label>
              <input type="text" className="rounded-lg border px-2 py-1" />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Type</label>
              <select className="rounded-lg border px-2 py-1">
                <option>Expense</option>
                <option>Gain</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Source</label>
              <select className="rounded-lg border px-2 py-1">
                <option>Budget</option>
                <option>Savings</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Category</label>
              <select className="rounded-lg border px-2 py-1">
                <option>Food</option>
                <option>Transportation</option>
                <option>Utilities</option>
                <option>Healthcare</option>
                <option>Entertainment</option>
                <option>Education</option>
                <option>Gifts</option>
                <option>Personals</option>
                <option>Other Expenses</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Amount</label>
              <input type="number" className="rounded-lg border px-2 py-1" />
            </div>

            <div className="col-span-12 mt-4 flex justify-around gap-4">
              <div
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  modality(false);
                }}
                className="w-full cursor-pointer rounded-lg bg-red-500 p-2 text-center font-semibold text-white"
              >
                Cancel
              </div>
              <button className="w-full rounded-lg bg-emerald-500 p-2 text-center font-semibold text-white">
                Post
              </button>
            </div>
          </form>
        )}

        {reminder && (
          <form className="grid grid-cols-12 gap-4 p-6">
            <div className="col-span-12 flex flex-col">
              <label>Reminder</label>
              <input type="text" className="rounded-lg border px-2 py-1" />
            </div>

            <div className="col-span-12 flex flex-col">
              <label>Deadline</label>
              <input type="date" className="rounded-lg border px-2 py-1" />
            </div>

            <div className="col-span-12 mt-60 flex justify-around gap-4">
              <div
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  modality(false);
                }}
                className="w-full cursor-pointer rounded-lg bg-red-500 p-2 text-center font-semibold text-white"
              >
                Cancel
              </div>
              <button className="w-full rounded-lg bg-emerald-500 p-2 text-center font-semibold text-white">
                Post
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
