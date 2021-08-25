import ChatPage from "../../components/ChatPage";
import CallControlls from "../../components/controls/CallControls";
import ShortcutMenu from "../../components/shortcuts/ShortcutMenu";
import UserList from "../../components/UserList";

export default function Index() {
  return (
    <>
      <div className="flex flex-col h-screen bg-primary font-body text-default">
        <div className="flex-grow">
          <div className="flex flex-row h-full">
            <div className="w-20">
              <ShortcutMenu></ShortcutMenu>
            </div>
            <div className="flex-grow">
              <ChatPage />
            </div>
            <div className="w-52">
              <UserList />
            </div>
          </div>
        </div>
        <div className="h-12">
          <CallControlls />
        </div>
      </div>
    </>
  );
}
