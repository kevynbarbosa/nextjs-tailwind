import TextChanellButton from "./TextChannelButton";

export default function ChannelList() {
  return (
    <>
      <div className="w-full p-2">
        <div>
          <div>Canais de texto</div>

          <div>
            <TextChanellButton />
            <TextChanellButton />
            <TextChanellButton />
          </div>
        </div>

        <div className="mt-8">
          <div>Canais de audiovisual</div>

          <div className="pl-2">
            <div># channel name</div>
            <div className="pl-4">
              <span>User</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
