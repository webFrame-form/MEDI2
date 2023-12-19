import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../../styles/colors";

const NavButton = styled.div`
    width: 13.8rem;
    height: 4.4rem;
    background-color: ${colors.black};
    border: none;
    color: ${(props) =>
        props.isclick === "true" ? colors.logoBlue : colors.white};
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${colors.logoBlue};
    }
`;


const ButtonNav = ({ buttonText, linkTo }) => {
    const location = useLocation();
    let isclick = "false";

    if (linkTo === "/calc" && location.pathname === "/result") {
        isclick = "true";
    } else if (linkTo === "/community" && location.pathname === "/upload") {
        isclick = "true";
    } else if (linkTo === "/community" && location.pathname === "/edit") {
        isclick = "true";
    } else if (linkTo === "/community" && location.pathname === "/post") {
        isclick = "true";
    } else if (location.pathname === linkTo) {
        isclick = "true";
    }

    return (
        <Link to={linkTo}>
            <NavButton isclick={isclick}>{buttonText}</NavButton>
        </Link>
    );
};

export default ButtonNav;
