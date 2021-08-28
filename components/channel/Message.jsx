import Tooltip from "../common/Tooltip";

export default function Message() {
  return (
    <>
      <div className="w-full flex py-2 rounded hover:bg-secondary">
        <Tooltip>
          <img
            className="rounded-full w-10 h-10 mx-2"
            src="https://64.media.tumblr.com/207c1735b3a380845a68a0b5ef1ac0ab/81101002ea7e82aa-08/s400x600/12f6c2a3680cc3e57d4495fe10aab59ed7bd071b.png"
            alt=""
          />
        </Tooltip>
        <div className="flex-grow px-2 border-l-4 rounded">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="flex-shrink cursor-pointer hover:underline hover:text-active">
                Nome do usuário
              </span>
              <span className="flex-shrink text-xs ml-4">01/01/1999 13:45</span>
            </div>
            <span className="flex-grow">
              Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris,
              leite de mula manquis sem cabeça. Admodum accumsan disputationi eu
              sit. Vide electram sadipscing et per. Nullam volutpat risus nec
              leo commodo, ut interdum diam laoreet. Sed non consequat odio.
              Suco de cevadiss deixa as pessoas mais interessantis.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
