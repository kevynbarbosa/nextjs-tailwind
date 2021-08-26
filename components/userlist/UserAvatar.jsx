export default function UserAvatar() {
  return (
    <>
      <div className="h-14 flex flex-wrap items-center hover:text-active cursor-pointer">
        <img
          className="rounded-full w-10 h-10"
          src="https://64.media.tumblr.com/207c1735b3a380845a68a0b5ef1ac0ab/81101002ea7e82aa-08/s400x600/12f6c2a3680cc3e57d4495fe10aab59ed7bd071b.png"
          alt=""
        />
        <div className="flex flex-wrap flex-col pl-2 items-center">
          <span className="text-lg">Sebastião</span>
          <span className="text-sm">Barbosa</span>
        </div>
      </div>
    </>
  );
}
