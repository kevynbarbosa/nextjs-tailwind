import UserAvatar from "./UserAvatar";

export default function UsersList() {
  return (
    <>
      {/* <div className="h-full p-4 bg-primary flex flex-wrap flex-col overflow-y-scroll">
       
      </div> */}

      <div className="flex flex-col h-full bg-primary">
        <div className="flex-grow overflow-y-auto h-1 p-4">
          <div>
            <span className="text-lg">Online - #</span>

            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
          </div>

          <div className="mt-6 text-lg">
            <span>Offline - #</span>

            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
            <UserAvatar />
          </div>
        </div>
      </div>
    </>
  );
}
