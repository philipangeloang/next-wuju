import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { api } from "~/utils/api";

const Modal = ({ modality }: any) => {
  const [capital, showCapital] = useState(true);
  const [reminder, showReminder] = useState(false);

  const [title, setTitle] = useState("");
  const [actionType, setActionType] = useState("Expense");
  const [source, setSource] = useState("Budget");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState(0);

  const { user } = useUser();

  if (!user) return <div>Log in first...</div>;

  const createAction = api.action.action.useMutation({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createAction.mutate({
      title: title,
      userId: user.id,
      actionType: actionType,
      source: source,
      category: category,
      amount: amount,
    });
  };

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
          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-4 p-6">
            <div className="col-span-12 flex flex-col">
              <label>Title</label>
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                className="rounded-lg border px-2 py-1"
              />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Type</label>
              <select
                defaultValue="Expense"
                value={actionType}
                onChange={(e) => {
                  setActionType(e.target.value);
                }}
                className="rounded-lg border px-2 py-1"
              >
                <option>Expense</option>
                <option>Gain</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Source</label>
              <select
                defaultValue="Budget"
                value={source}
                onChange={(e) => {
                  setSource(e.target.value);
                }}
                className="rounded-lg border px-2 py-1"
              >
                <option>Budget</option>
                <option>Savings</option>
              </select>
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Category</label>
              <select
                defaultValue="Food"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="rounded-lg border px-2 py-1"
              >
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
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(parseInt(e.target.value));
                }}
                type="number"
                className="rounded-lg border px-2 py-1"
              />
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
