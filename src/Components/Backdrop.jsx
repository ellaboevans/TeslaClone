import Modal from "./Modal";

export default function Backdrop(props) {
  return (
    <div className="relative overflow-hidden ">
      <div
        className=" w-full h-screen bg-gray-500 opacity-50 fixed  backdrop-blur-3xl  z-20"
        onClick={props.closeModal}
      ></div>
    </div>
  );
}
