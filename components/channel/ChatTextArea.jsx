import IconButton from "../common/IconButton";

export default function ChatTextArea() {
  return (
    <>
      <div className="w-full bg-default flex rounded text-accent">
        <IconButton icon="add_circle" />
        <div className="flex-grow">
          {/* <textarea className="w-full my-1 p-1" rows="1"></textarea> */}
          {/* <span class="textarea" role="textbox" contenteditable></span> */}
          <div className="mt-1 focus-visible:border-0" contentEditable></div>
        </div>
        <IconButton icon="emoji_emotions" />
      </div>
    </>
  );
}
