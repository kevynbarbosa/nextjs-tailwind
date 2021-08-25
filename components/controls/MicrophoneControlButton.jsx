export default function MicrophoneControlButton() {
  return (
    <>
      <div className="w-8 h-8 flex flex-wrap items-center justify-center rounded-full bg-secondary hover:bg-accent hover:text-active cursor-pointer mx-2">
        <span className="material-icons  text-2xl">mic</span>
      </div>
    </>
  );
}
