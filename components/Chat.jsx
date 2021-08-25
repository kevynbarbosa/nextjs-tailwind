import IconButton from "./common/IconButton";

IconButton;
export default function Chat() {
  return (
    <>
      <div className="h-full flex flex-col">
        <div className="h-12 p-2 border-b border-primary shadow flex flex-wrap content-center">
          <div className="flex-grow text-lg text-active">
            # text-channel-name
          </div>
          <div>
            <IconButton icon="push_pin" />
            <IconButton icon="person_add" />
            <IconButton icon="settings" />
          </div>
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
