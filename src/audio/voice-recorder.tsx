import { useId } from "react";
import Controllers from './components/controllers';
import { AudioProvider, UserPropsProvider } from './context';
import './styles/voice-recorder.scss';
import { VoiceRecorderProps } from "../types";

export const VoiceRecorder: React.FC<VoiceRecorderProps> = (props) => {
  const {
    mainContainerStyle,
    height,
    width,
    ...rest
  } = props;
  const id = useId();

  const mainContainerStyleComplete = {
    ...mainContainerStyle,
    height,
    width,
  }

  const rootElementId = `voice-recorder-${id}`;

  return (
    <AudioProvider>
      <UserPropsProvider userPropsValue={{...rest, rootElementId}}>
        <div id={rootElementId} className="voice-recorder_maincontainer" style={mainContainerStyleComplete}>
          
          <Controllers />
        </div>
      </UserPropsProvider >
    </AudioProvider>
  );
};
