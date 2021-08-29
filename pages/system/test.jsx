import Tooltip from "../../components/common/Tooltip";

export default function test(props) {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-primary text-active">
        <Tooltip direction="top" label="Tooltip text">
          <div className="border-2 rounded w-32 h-42">Element</div>
        </Tooltip>
      </div>
    </>
  );
}
