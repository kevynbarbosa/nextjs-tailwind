export default function MeetingChannelButton() {
  return (
    <>
      <div className="flex flex-wrap items-center px-2 py-1 cursor-pointer rounded hover:bg-accent hover:text-active">
        <span className="material-icons text-base">campaign</span>
        <span className="flex-grow ml-1">channel name</span>
      </div>
    </>
  );
}
