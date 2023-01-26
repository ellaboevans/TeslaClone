
export default function Backdrop({closeModal}) {
  return (
    <div className="relative overflow-hidden ">
      <div
        className=" w-full h-screen bg-gray-400 opacity-50 fixed backdrop-blur-3xl blur-3xl   z-20"
        onClick={closeModal}
      ></div>
    </div>
  );
}
