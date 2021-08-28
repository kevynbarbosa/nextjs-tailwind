import Tooltip from "../../components/common/Tooltip";

export default function test(props) {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-primary text-active">
        <Tooltip>Element</Tooltip>
      </div>
    </>
  );
}
