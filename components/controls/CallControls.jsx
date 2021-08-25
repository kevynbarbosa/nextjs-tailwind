import CameraControlButton from "./CameraControlButton";
import HangUpButton from "./HangUpButton";
import MicrophoneControlButton from "./MicrophoneControlButton";
import MuteSoundControlButton from "./MuteSoundControlButton";
import RaiseHandControlButton from "./RaiseHandControlButton";
import ScreenShareControlButton from "./ScreenShareControlButton";

export default function CallControls() {
  return (
    <>
      <div className="w-full h-full flex flex-wrap items-center justify-center">
        <MicrophoneControlButton />
        <MuteSoundControlButton />
        <HangUpButton />
        <CameraControlButton />
        <ScreenShareControlButton />
        <RaiseHandControlButton />
      </div>
    </>
  );
}
