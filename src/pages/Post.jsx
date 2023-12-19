import styled from "styled-components";
import colors from "../styles/colors";
import Banner from "../components/banner";
import User from "../assets/images/user.png";
import AButton from "../assets/images/aButton.png";

// 스크롤을 위해 임의로 넣은 리스트
import ListAnswer from "../components/list/list-answer";
import AnswerData from "../util/answer";
import answerData from "../util/answer";

const PostContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostMiddle = styled.div`
    width: 100%;
    background-color: ${colors.postgray};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
    border: 0.05vw solid ${colors.postgray2};
`

const PostP = styled.p`
    font-size: 0.7vw;
    color: ${colors.white};
`

const PostPHover = styled.p`
    font-size: 0.7vw;
    color: ${colors.postgray3};
    cursor: pointer;

    &:hover {
        font-weight: bold;
        color: ${colors.white};
    }
`

const QBox = styled.div`
    width: 100%;
    background-color: ${colors.postgray4};
    border: 0.05vw solid ${colors.postgray2};
    border-radius: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.75vw 0 1.75vw 0;
`

const ABox = styled.div`
    width: 56%;
    margin-left: 11%;
    margin-top: 2vw;
    margin-bottom: 4vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AInput = styled.input`
    width: 91%;
    height: 3.5vw;
    font-size: 1vw;
    border: none;
    border-radius: 2.2vw;
    outline: none;
    color: ${colors.white};
    background-color: ${colors.postgray6};
    box-sizing: border-box;
    padding: 0 2vw 0 2vw;

    &::placeholder {
        color: ${colors.white};
    }
`

const AList = styled.div`
    width: 52%;
    height: 32.5rem;
    margin-left: 7%;
    margin-top: 4vw;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.8vw;
    }

    &::-webkit-scrollbar-track {
        background: ${colors.bgColor};
    }

    &::-webkit-scrollbar-thumb {
        background: ${colors.gray};
        border: none;
        border-radius: 1vw;
    }
`

const Post = () => {
    return (
        <PostContainer>
            <Banner 
                width="26%" 
                BannerP1="당신의 경험과 지식을 나누어요."
                BannerP2="알고 있는 내용이 있나요?"
                BannerP3="고민하지말고, 댓글을 작성해주세요."
                RightPadding="2.5vw"
            />

            <PostMiddle>
                <div className="middleContainer" style={{width: "58%", display: "flex"}}>
                    <div className="left" style={{width: "11%", paddingTop: "4.65vw"}}>
                        <img src={User} alt="user" style={{width: "5vw", height: "5vw"}}/>
                    </div>

                    <div className="right" style={{width: "89%", paddingTop: "4.2vw"}}>
                        <div className="rightTop" style={{display: "flex", gap: "0.5vw", justifyContent: "flex-end"}}>
                            <PostPHover>수정하기</PostPHover>
                            <PostP style={{color: colors.postgray3}}>|</PostP>
                            <PostPHover>삭제하기</PostPHover>
                        </div>
                        <QBox>
                            <div className="QInner" style={{width: "90%"}}>
                                <PostP style={{fontSize: "1.3vw", backgroundColor: colors.postgray5, display: "inline-block"}}>
                                    비타민과 홍차 같이 먹어도 되나요?
                                </PostP>
                                <PostP style={{fontSize: "1vw", marginTop: "0.1vw"}}>
                                    제가 이번에 비타민 새로 먹으려고 하는데 집에 홍차 밖에 없어요.. 그냥 홍차랑 비타민 같이 먹어도 되겠죠?
                                </PostP>
                            </div>
                        </QBox>
                    </div>
                </div>

                <ABox>
                    <AInput placeholder="댓글을 입력해주세요." />
                    <img src={AButton} alt="button" style={{width: "3.5vw", height: "3.5vw", cursor: "pointer"}}/>
                </ABox>
            </PostMiddle>

            <AList>
                <ListAnswer data={answerData} />
            </AList>
        </PostContainer>
    );
}

export default Post;