import { useState, useEffect, useRef } from "react";
import {sp, tab, pc} from "../utils/media"
import styled from "styled-components";

export default function HardChatCat() {

    const [showChat, setShowChat] = useState<string[]>(['meoooooooown!! meooooo!']);
    const [isRunning, setIsRunning] = useState(true);
    const [isCloseChat, setIsCloseChat] = useState("");
  

    let delay = 5000;
    let getIdArray = [0, 1, 2, 3, 4];
    function shuffleArray(getIdArray){
        getIdArray.sort(()=> Math.random() - 0.5);
    }

    // 一定時間でchatを表示させる
    useInterval(
        () => {

            // チャットが大量になるのを防ぐ為、チャット配列の長さが６以上の場合０番目を削除する
            if(showChat.length >= 10){
            setShowChat(showChat.filter((d, index) => (index !== 0)));
            }

            // ランダムにセリフ配列からセリフを取得
            shuffleArray(getIdArray);
            let chatArray: string = ChatCollection[getIdArray[0]];
            setShowChat(showChat => [...showChat, chatArray]);
        },
        isRunning ? delay : null
      );

      const handleIsRunningChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
      ) => {
        setIsRunning(event.target.checked);
        setIsCloseChat("none");
      };

    return (
        <ChatWrap isCloseChat={isCloseChat}>
            <div className="chatTitle">
                <span>X Cat Finder</span>
                <label>
                <input className="chatClose" type="checkbox" checked={isRunning} onChange={handleIsRunningChange}/>{" "}
                    ×
                </label>
            </div>
            <img src="/img/HardTypingCat.gif" />
            <div className="chatBox">
                {showChat.map((dialogue, i) => <li key={i}>Local Cat：{dialogue}</li>)}
            </div>
            <input className="chatSendBox" type="text" />
            <input type="button" value="Send" />
        </ChatWrap>
    )
}

const useInterval = (callback: Function, delay?: number | null) => {
    const savedCallback = useRef<Function>(() => {});
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      if (delay !== null) {
        const interval = setInterval(() => savedCallback.current(), delay || 0);
        return () => clearInterval(interval);
      }
      return undefined;
    }, [delay]);
  };

const ChatCollection = [
    'meooooooooow !!!',
    'meow meow?! MEOW meow meow!?!?',
    'meooooooow??? meoooooow!!!!',
    'meow meow meowwwwwn!',
    'meow meow meow meowwwn'
]

const ChatWrap = styled.div<{ isCloseChat: string }>`
display: ${({ isCloseChat }) => isCloseChat};
    float: right;
    height: auto;
    background-color: #f0f0f0;
    z-index: 99999;
    position: fixed;
    bottom:0;
    right: 0;
  img {
      width: 320px;
      height: 180px;
  }
  .chatTitle{
    color: white;
    text-align: center;
    font-weight: 600px;
    background-color: #34495E;
  }
  label{
      float: right;
      margin-right: 1em;
  }
  .chatClose{
    float: right;
    margin-right: 10px;
    margin-top: 5px;
    display: none;
  }
  .chatBox{
    height: 120px;
    overflow: scroll;
    border: 1px solid #CCC;
    background-color: white;
  }
  li{
    list-style:none;
    font-size: 12px;
    margin-left: 0.2em;
  }
  .chatSendBox{
    width: 19em;
    margin: 0.5em 0.2em 0.3em 0.2em;
  }
`;
