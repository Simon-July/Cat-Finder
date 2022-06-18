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
                    <p className="place">From your local: ...2km　<span>CLOSE!</span></p>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/closeUpCat.gif"/>
                    <p>Jill</p>
                    <p className="place">From your local: ...7km</p>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/toungCat.gif"/>
                    <p>Chris</p>
                    <p className="place">From your local: ...11km</p>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/winkCat.gif"/>
                    <p>Jessy</p>
                    <p className="place">From your local: ...5km</p>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/cat.gif"/>
                    <p>Cham</p>
                    <p className="place">From your local: ...6km</p>
                </CardWrap>
                <CardWrap>
                    <img className="img" src="img/catKiss.gif"/>
                    <p>Rose</p>
                    <p className="place">From your local: ...10km</p>
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
  /* gap: 15px; */
  margin: 3em 1em 1em 1em;
  text-align:center;
  margin: 0 auto;
`;

const CardWrap = styled.div`
  width: calc((100% - 32px * 3) / 3);
  ${sp`
    margin-left: 1em;
    width: 60%;
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
    font-weight: 600;
    color: red;
    ${sp`
      margin-left: 1em;
    `}
  }

  p{
    margin: 0;
    ${sp`
      margin-left: 3em;
    `}
  
  }
  .place{
      font-size: 10px;
      color: #555;
    ${sp`
      margin-left: 2em;
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