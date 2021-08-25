export default function ShortcutButton(props) {
  return (
    <>
      <div className="w-full h-20 flex flex-wrap flex-col items-center justify-center hover:bg-accent hover:text-active cursor-pointer">
        <span className="material-icons">{props.icon}</span>
        <span className="text-sm text-center">{props.label}</span>
      </div>
    </>
  );
}
