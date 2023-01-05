import CloseButton from "./CloseButton";
import data from "./data";
// console.log(data);

export default function Modal() {
  const links = data.map((link) => {
    return (
      <div
        className="mb-5 mt-8 py-2 px-8 hover:bg-slate-200 w-full"
        key={link.id}
      >
        <a href={link.path}>{link.LinkName}</a>
      </div>
    );
  });

  function handleModalWithBtn() {
  console.log("You clicked")
  }

  return (
    <>
      <div className="h-full p-16 bg-white z-50 fixed right-0 shadow-2xl shadow-gray-800 overflow-y-auto  text-slate-600 font-medium font-Gotham transition-transform delay-150 ease duration-120">
        <CloseButton closeModalButton={handleModalWithBtn}/>
        {links}
      </div>
    </>
  );
}
