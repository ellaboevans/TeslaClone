import data from "./data";
// console.log(data);

export default function Modal({closeModalWithButton}) {
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


  return (
    <>
      <div className="h-full p-12 bg-white z-50 fixed right-0 shadow-2xl shadow-gray-800 overflow-y-auto  text-slate-600 font-medium font-Gotham transition-transform delay-150 ease duration-120">
        <div className=" ml-20">
          <span
            className="text-2xl ml-36 cursor-pointer"
            onClick={closeModalWithButton}
          >
            &times;
          </span>
        </div>
        {links}
      </div>
    </>
  );
}
