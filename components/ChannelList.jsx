import MeetingChannelButton from "./MeetingChannelButton";
import TextChanellButton from "./TextChannelButton";

export default function ChannelList() {
  return (
    <>
      <div className="w-full p-2">
        <div>
          <div className="flex flex-wrap items-center">
            <span className="material-icons">expand_more</span>
            <span className="flex-grow">Canais de texto</span>
          </div>

          <div>
            <TextChanellButton />
            <TextChanellButton />
            <TextChanellButton />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-center hover:text-active cursor-pointer">
            <span className="material-icons">expand_more</span>
            <span className="flex-grow">Canais de audiovisual</span>
          </div>

          <div className="pl-2">
            <div>
              <MeetingChannelButton />
            </div>
            <div className="pl-4">
              <span>User</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
