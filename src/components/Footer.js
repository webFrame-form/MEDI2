import { useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../styles/colors";
import mediFooter from "../assets/images/footer.png";

const FooterDiv = styled.div`
    width: 100vw;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vw;
    background-color: ${colors.gray};
    position: ${({ islogin, isloading }) => (islogin === "true" || isloading === "true" ? "fixed" : "relative")};
    bottom: 0;
    left: 0;  
    
    & img {
        width: 33.333rem;
    }

    @media (max-width: 650px) {
        ${({ isteam }) =>
        isteam === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    }

    @media (max-width: 1250px) {
        ${({ issign }) =>
        issign === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    }

    @media (max-width: 1250px) {
        ${({ iscalc }) =>
        iscalc === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    } 

    @media (max-width: 1000px) {
        ${({ isUpload }) =>
        isUpload === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    } 

    
    @media (max-width: 1000px) {
        ${({ isEdit }) =>
        isEdit === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    } 

    @media (max-width: 900px) {
        ${({ isPost }) =>
        isPost === "true" &&
        `
            position: fixed;
            bottom: 0;
        `}
    } 
`;


const Footer = () => {
    const location = useLocation();
    const islogin = location.pathname === "/login";
    const isteam = location.pathname === "/team";
    const issign = location.pathname === "/signup";
    const iscalc = location.pathname === "/calc";
    const isloading = location.pathname === "/loading";
    const isUpload = location.pathname === "/upload";
    const isEdit = location.pathname === "/edit";
    const isPost = location.pathname === "/post";

    return (
        <FooterDiv 
            islogin={islogin.toString()} 
            isteam={isteam.toString()} 
            issign={issign.toString()} 
            iscalc={iscalc.toString()} 
            isloading={isloading.toString()} 
            isUpload={isUpload.toString()} 
            isEdit={isEdit.toString()}
            isPost={isPost.toString()}>
            <img src={mediFooter} alt="footer" />
        </FooterDiv>
    );
};

export default Footer;