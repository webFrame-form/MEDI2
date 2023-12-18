import colors from "../styles/colors";
import styled from "styled-components";
import Circle from "../assets/images/circle.png";

const BannerContainer = styled.div`
    width: 70%;
    margin-top: 2vw;
    color: ${colors.white};
    text-align: left;
`

const BannerP = styled.p`
    color: ${colors.white};
    font-size: 4vw;
    font-weight: 600;
`

const BannerBar = styled.div`
    width: ${props => props.width};
    height: 0.5vw;
    background-color: ${colors.white};
    margin-top: 4vw;
`

const Banner = ({width}) => {
    return (
        <BannerContainer>
            <img src={Circle} alt="circle" style={{width: "20vw", height: "20vw", zIndex: "-1", position: "absolute", marginLeft: "6vw"}}/>
            <BannerP style={{marginTop: "3.5vw"}}>MEDI:</BannerP>
            <BannerP style={{fontSize: "1.2vw", marginTop: "-3.5vw"}}>Make healthy choices for your life.</BannerP>
            <BannerBar width={width}/>
        </BannerContainer>
    );
}

export default Banner;