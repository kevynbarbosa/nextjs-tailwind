import ChatPage from "../../components/channel/ChatPage";
import CallControlls from "../../components/controls/CallControls";
import ShortcutMenu from "../../components/shortcuts/ShortcutMenu";
import UsersList from "../../components/userlist/UsersList";

export default function Index() {
  return (
    <>
      <div className="h-screen flex flex-col bg-primary font-body text-default">
        <div className="flex-grow flex">
          <div className="w-20 flex-shrink-0">
            <ShortcutMenu />
          </div>
          <div className="flex-grow">
            <ChatPage />
          </div>
          <div className="w-52 flex-shrink-0">
            <UsersList />
          </div>
        </div>
        <div className="h-12">
          <CallControlls />
        </div>
      </div>
    </>
  );
}
