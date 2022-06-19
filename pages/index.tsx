import styled from "styled-components";
import {sp, tab, pc} from "../utils/media"
import Headline from "../component/Headline"
import ChatCat from "../component/ChatCat";
import { useState, useEffect } from "react";

export default function Home() {

  const [catUrls, setCatUrls] = useState([]); 

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then((response: Response) => response.json())
        .then((json) => {
            const URL = json[0].url;
            setCatUrls([...catUrls, URL])
        })
  }, []);

    return (
        <div>
            <Headline />
            <ChatCat />
            <CatWrap>
                <CardWrap>
                    <img className="img" src={catUrls[0]}/>
                    <p>Amanda</p>
                    <span>From your local...<span className="place">2km</span><span className="close">CLOSE</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/closeUpCat.gif"/>
                    <p>Jill</p>
                    <span>From your local...<span className="place">7km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/toungCat.gif"/>
                    <p>Chris</p>
                    <span>From your local...<span className="place">11km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/winkCat.gif"/>
                    <p>Jessy</p>
                    <span>From your local...<span className="place">5km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/cat.gif"/>
                    <p>Cham</p>
                    <span>From your local...<span className="place">8km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/catKiss.gif"/>
                    <p>Rose</p>
                    <span>From your local...<span className="place">13km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/standingCat.gif"/>
                    <p>Abigale</p>
                    <span>From your local...<span className="place">20km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/tom.gif"/>
                    <p>Tom</p>
                    <span>From your local...<span className="place">20km</span></span>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/turnningCat.gif"/>
                    <p>Sherry</p>
                    <span>From your local...<span className="place">20km</span></span>
                </CardWrap>

            </CatWrap>
        </div>
    )
}

const CatWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  z-index: 0;
  padding-top: 3em;
  padding-bottom: 7em;
  text-align:center;
  margin: 0 auto;
`;

const CardWrap = styled.div`
  width: calc((100% - 30px * 3) / 3);
  ${sp`
    margin-left: 1em;
    width: 100%;
  `}
  ${tab`
    margin: 0 auto;
    width: 47%;
  `}
  ${pc`
    margin: 0 auto;
    width: 28%;
  `}

  span{
    font-size: 13px;
    color: #555;

    .place{
      display: inline-block;
      background: #777;
      border-radius: 3px;
      color: #fff;
      font-size: .83em;
      height: 18px;
      line-height: 18px;
      margin-left: 4px;
      padding: 0 3px;
      position: relative;
      vertical-align: top;
    }

    .close{
      display: inline-block;
      background: #e350e2;
      border-radius: 3px;
      color: #fff;
      font-size: .83em;
      height: 18px;
      line-height: 18px;
      margin-left: 4px;
      padding: 0 3px;
      position: relative;
      vertical-align: top;
    }
  }

  p{
    margin: 0;
    ${sp`
      // margin-left: 3em;
    `}
  
  }

  .img{
    margin-top: 1em;
  ${sp`
    width: 209px;
    height: 117px;
    object-fit: cover;
  `}
  ${tab`
    width: 209px;
    height: 117px;
    object-fit: cover;
  `}
  ${pc`
    width: 209px;
    height: 117px;
    object-fit: cover;
  `}
  }

`;