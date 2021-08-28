import IconButton from "../common/IconButton";
import ChatTextArea from "./ChatTextArea";
import MessageList from "./MessageList";

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
        <div className="flex-grow">
          <MessageList />
        </div>
        <div className="p-2">
          <ChatTextArea />
        </div>
      </div>
    </>
  );
}
