import styled from "styled-components";
import colors from "../../styles/colors";
import Medi from "../../assets/images/mediCharacter.png";

const StyleItem = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 3vw;
`

const AnswerP = styled.p`
    font-size: 1vw;
    color: ${colors.white};
`

const AnswerPHover = styled.p`
    font-size: 0.7vw;
    color: ${colors.white};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`

const ItemAnswer = ({ id, name, text}) => { 
    return (
        <StyleItem key={id}>
            <div className="left" style={{width: "8.5%"}}>
                <img src={Medi} alt={name} style={{width: "3.8vw", height: "3.8vw"}}/>
            </div>
            <div className="right" style={{width: "86%", marginLeft: "0.5vw"}}>
                <div className="rightTop" style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <AnswerP style={{fontWeight: "bold"}}>{name}</AnswerP>
                    <AnswerPHover>삭제하기</AnswerPHover>
                </div>
                <AnswerP style={{marginTop: "0.5vw"}}>{text}</AnswerP>
                <AnswerP style={{fontSize: "0.7vw", marginTop: "-0.5vw"}}>6시간전</AnswerP>
            </div>
        </StyleItem>
    );
};

export default ItemAnswer;