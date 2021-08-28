export default function Tooltip(props) {
  return (
    <>
      <div className="inline-block relative min-w-max min-h-max ">
        {props.children}
        <div className="absolute min-w-max -inset-x-0.5 p-1 mt-1 rounded bg-black text-white text-center z-10">
          <svg
            className="absolute text-black h-2 w-full left-0 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
          Tooltip
        </div>
      </div>
    </>
  );
}
