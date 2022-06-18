import styled from "styled-components";
import {sp, tab, pc} from "../utils/media"
import Headline from "../component/Headline"
import ChatCat from "../component/ChatCat";
import { useState, useEffect } from "react";

export default function Home() {

  const [catUrls, setCatUrls] = useState([]); 

    useEffect(() => {
      for (let i = 0; i < 6; i++) {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then((response: Response) => response.json())
        .then((json) => {
            const URL = json[0].url;
            setCatUrls([...catUrls, URL])
        })
      }
        
  }, []);

    return (
        <div>
            <Headline />
            <ChatCat />
            <CatWrap>
                <CardWrap>
                    <p>Amanda</p>
                    <img className="img" src={catUrls[0]}/>
                    <p>From your local: ...15km</p>
                </CardWrap>
                <CardWrap>
                    <p>Jill</p>
                    <img className="img" src={catUrls[1]}/>
                    <p>From your local: ...7km</p>
                </CardWrap>
                <CardWrap>
                    <p>Chris</p>
                    <img className="img" src={catUrls[2]}/>
                    <p>From your local: ...11km</p>
                </CardWrap>
                <CardWrap>
                    <p>Jessy</p>
                    <img className="img" src={catUrls[3]}/>
                    <p>From your local: ...5km</p>
                </CardWrap>
                <CardWrap>
                    <p>Cham</p>
                    <img className="img" src={catUrls[4]}/>
                    <p>From your local: ...3km</p>
                </CardWrap>
                <CardWrap>
                    <p>Rose</p>
                    <img className="img" src={catUrls[5]}/>
                    <p>From your local: ...10km</p>
                </CardWrap>

            </CatWrap>
        </div>
    )
}

const CatWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  z-index: 0;
  margin: 3em 1em 1em 1em;
  text-align:center;
  /* position: absolute; */
`;

const CardWrap = styled.div`
  margin: 0 auto;
  width: calc((100% - 30px * 2) / 3);
  border-radius: 39px;
  background: #f8f8f8;
  box-shadow:  12px 12px 24px #bcbcbc,
               -12px -12px 24px #ffffff;
  ${sp`
    width: 60%;
  `}
  ${tab`
    width: 40%;
  `}
  ${pc`
    width: 30%;
  `}

  .img{
    margin: 0 auto;
  ${sp`
    width: 180px;
    height: 180px;
    object-fit: cover;
  `}
  ${tab`
    width: 220px;
    height: 220px;
    object-fit: cover;
  `}
  ${pc`
    width: 250px;
    height: 250px;
    object-fit: cover;
  `}
  }

`;