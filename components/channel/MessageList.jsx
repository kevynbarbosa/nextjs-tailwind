import Message from "./Message";

export default function MessageList() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-end p-2">
        <div className="flex-grow overflow-y-scroll h-1">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </>
  );
}
