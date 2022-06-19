import styled from "styled-components";
import { pc, sp, tab } from '.././utils/media';
import HardChatCat from "../component/HardChatCat";
import Link from "next/link"

export default function about() {
    return (
        <MainWrap>
            <HeadlineContainer>
            <img className="subtitle" src="/img/icon.png" style = {{width: "120px", height:"100px"}}/>
            <h1 className="title">X Cat Finder</h1>
            <h3 className="subtitle">Find Hot Local Cats in YOUR AREA</h3>
            </HeadlineContainer>
            <p>Thanks for access this page.<br/>
               This homepage refers <a href="https://adultcatfinder.com/">this page</a>  and use <a href="https://thecatapi.com">this API</a> <br/>
               to create this homepage.
               It is impossible to find how to use Script of Adult Cat Finder through Typescript, 
               so I made mock contents from 1. <br/>
               The chat system doesn't work, but it looks like chatting you.
               I appreciate your awesome inspiration for creating funny contents, thanks!!<br />
               I'm a dog person, by the way.
            </p>
            <ul>
                <p>【Reference】</p>
                <li>Adult Cat Finder：<a href="https://adultcatfinder.com/">https://adultcatfinder.com/</a></li>
                <li>Cat API：<a href="https://thecatapi.com">https://thecatapi.com</a></li>
            </ul>
            <Link href="/">
              Back
            </Link>
            <HardChatCat/>
        </MainWrap>
    )
}

const MainWrap = styled.div`
    padding-bottom: 10em;
    ${sp`
    font-family: sans-serif;
    width: 70%;
    padding-top: 2em;
    font-size: 18px;
    margin: 0 auto;
    padding-right: 2%;
        `}
    ${tab`
    font-family: sans-serif;
    width: 60%;
    padding-top: 2em;
    font-size: 18px;
    margin: 0 auto;
    padding-right: 2%;
        `}
    ${pc`
    font-family: sans-serif;
    width: 55%;
    padding-top: 2em;
    font-size: 18px;
    margin: 0 auto;
    padding-right: 2%;
    `}
`;

const HeadlineContainer = styled.div`

    text-align: center;
    .title{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 400%;
        font-weight: 900;
        line-height: 100px;
        color: #34495E;
        margin: 0;
    ${sp`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 220%;
        font-weight: 850;
        line-height: 100px;
        color: #34495E;
        margin: 0;
    `}
    }

    .subtitle{
        line-height: 20px;
        color: #d4d4fd;
        font-size: 1.2em;
        font-weight: 700;
        letter-spacing: -1px;
        margin: 0;
    }

`;
