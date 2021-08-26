import ChannelList from "./ChannelList"
import Chat from "./Chat"
export default function ChatPage() {
    return (
        <>
            <div className="w-full h-full bg-secondary flex flex-row">
                <div className="w-60">
                    <ChannelList />
                </div>
                <div className="w-full bg-accent">
                    <Chat />
                </div>
            </div>
        </>
    )
}