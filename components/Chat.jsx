export default function Chat() {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="h-12 p-2 border-b border-primary shadow flex flex-wrap content-center">
          <div className="flex-grow text-lg text-active">
            # Text Channel name
          </div>
          <div>Icons</div>
        </div>
        <div className="flex-grow">Body</div>
        <div className="h-16 p-2 flex-col">
          <div className="flex-grow w-full rounded bg-default text-active px-4">
            input
          </div>
          <span>Some hint</span>
        </div>
      </div>
    </>
  );
}
