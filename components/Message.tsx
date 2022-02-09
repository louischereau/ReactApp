import { UnityContext } from "react-unity-webgl";

export interface MessageProp {
    unityContext: UnityContext,
    message: string | number | boolean 
}

const Message = (props: MessageProp) => {
    function send(){
        console.log("function called")
        console.log("message is:", props.message)
        props.unityContext.send("datareadcontroller", "GetNFTData", props.message)
    }
    return(
       <div>
           <button onClick={send}> Message </button>
       </div>
   )
  }

 
export default Message