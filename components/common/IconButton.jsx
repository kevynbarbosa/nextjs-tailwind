export default function IconButton(props) {
  return (
    <>
      <span className="material-icons px-1 py-1 cursor-pointer rounded hover:text-active">
        {props.icon}
      </span>
    </>
  );
}
