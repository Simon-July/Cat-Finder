import styled from "styled-components";
import {sp, tab, pc} from "../utils/media"

export default function Headline() {
    return (
        <MainWrap>
            <HeadlineContainer>
            <img className="subtitle" src="/img/icon.png" style = {{width: "120px", height:"100px"}}/>
            <h1 className="title">X Cat Finder</h1>
            <h3 className="subtitle">Find Hot Local Cats in YOUR AREA</h3>
            </HeadlineContainer>
            <p>Are you having a hard time finding local cats in your area? 
               Do you wish there was a way to connect instantly with one online, at any time? Now you can!
With X Cat Finder, you're never more than one click away from chatting with a hot, local cat in your area!</p>
        </MainWrap>
    )
}

const MainWrap = styled.div`
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
    ${sp`
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 350%;
        font-weight: 850;
        line-height: 100px;
        color: #34495E;
        margin: 0;
    `}

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 400%;
        font-weight: 900;
        line-height: 100px;
        color: #34495E;
        margin: 0;

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
