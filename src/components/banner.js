import colors from "../styles/colors";
import styled from "styled-components";
import Circle from "../assets/images/circle.png";
import { useLocation, useNavigate } from "react-router-dom";

const BannerContainer = styled.div`
    width: 70%;
    margin-top: 2vw;
    color: ${colors.white};
    text-align: left;
`

const BannerDiv = styled.div`
    width: 50%;
    padding-top: ${props => props.RightPadding || "0"};
`

const BannerP = styled.p`
    color: ${colors.white};
    font-size: 4vw;
    font-weight: 900;
`

const BannerButton = styled.button`
    width: 13vw;
    min-height: 3.5vw;
    border: none;
    border-radius: 2.5vw;
    background-color: ${colors.bannerBlue};
    font-size: 1.2vw;
    color: ${colors.white};
    position: absolute;
    margin-left: -36%;
    margin-top: 10%;

    &:hover {
        border: 0.2vw solid ${colors.white};
    }
`

const BannerBar = styled.div`
    width: ${props => props.width};
    height: 0.5vw;
    background-color: ${colors.white};
    margin-top: 4vw;
`

const Banner = ({width, BannerP1, BannerP2, BannerP3, RightPadding}) => {
    const location = useLocation();
    const isCommunity = location.pathname === "/community";
    const navigate = useNavigate();

    const goToUpload = () => {
        navigate("/upload");
    }

    return (
        <BannerContainer>
            <div style={{display: "flex"}}>
            <BannerDiv>
                <img src={Circle} alt="circle" style={{width: "20vw", height: "20vw", zIndex: "-1", position: "absolute", marginLeft: "6vw"}}/>
                <BannerP style={{marginTop: "3vw"}}>MEDI:</BannerP>
                <BannerP style={{fontSize: "1.1vw", marginTop: "-3.5vw", fontWeight: "600"}}>Make healthy choices for your life.</BannerP>
            </BannerDiv>
            <BannerDiv RightPadding={RightPadding} style={{textAlign: "right", position: "relative"}}>
                <BannerP style={{fontSize: "0.9vw", fontWeight: "600"}}>{BannerP1}</BannerP>
                <BannerP style={{fontSize: "1.3vw", fontWeight: "600", lineHeight: "2vw"}}>
                    {BannerP2}<br/>
                    {BannerP3}
                </BannerP>
                {isCommunity && <BannerButton onClick={goToUpload}>고민 나누기</BannerButton>}
            </BannerDiv>
            </div>

            <BannerBar width={width}/>
        </BannerContainer>
    );
}

export default Banner;