import { useUser } from "@clerk/nextjs";

interface ModalProps {
  title: string;
  modality: (modality: boolean) => void;
}

const Topbar = ({ title, modality }: ModalProps) => {
  const { user } = useUser();
  if (!user) return <div>Log in first...</div>;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex gap-4">
          <p
            onClick={() => {
              modality(true);
            }}
            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border p-5 text-4xl"
          >
            +
          </p>
          {/* <UserButton /> */}
          <img
            alt="profile"
            src={user.profileImageUrl}
            className="h-14 w-14 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Topbar;
