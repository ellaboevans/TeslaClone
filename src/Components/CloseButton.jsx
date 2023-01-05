
export default function CloseButton(props) {
//   console.log(props);
  return (
    <div className=" ml-20">
      <span
        className="text-4xl ml-36 cursor-pointer"
        onClick={props.closeModalButton}
      >
        &times;
      </span>
    </div>
  );
}
