// import {
//     MultiChatWindow,
//     MultiChatSocket,
//     useMultiChatLogic,
//   } from 'react-chat-engine-advanced';

// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         'f5be3df2-65a0-4a69-b165-c04b61e393e7', 
//         props.user.username, 
//         props.user.secret
//     );
//     return (
//         <div style={{height: '100vh'}}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{height: '100%'}} />
//         </div>
//     );
// };
// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;