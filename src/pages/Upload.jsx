import styled from "styled-components";
import colors from "../styles/colors";
import Banner from "../components/banner";

const UploadContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UploadBar = styled.div`
    display: flex;
    align-items: center;
    margin-top: 7vw;
    gap: 1vw;
    width: 70%;
    border: none;
    border-radius: 1.75vw;
    background-color: ${colors.bannerBlue};
`

const UploadP = styled.p`
    color: ${colors.white};
    font-size: 1vw;
`

const UploadInput = styled.input`
    width: 69%;
    height: 4vw;
    border: none;
    border-bottom: 0.1vw solid ${colors.white};
    outline: none;
    background-color: ${colors.bgColor};
    color: ${colors.white};
    font-size: 1.1vw;
`

const UploadTextarea = styled.textarea`
    width: 69%;
    height: 30vw;
    border: none;
    border-bottom: 0.1vw solid ${colors.white};
    outline: none;
    background-color: ${colors.bgColor};
    color: ${colors.white};
    font-size: 1.1vw;
    padding: 1vw 0 1vw 0;
    resize: none;

    &::placeholder {
        text-align: center;
        line-height: 30vw;
    }

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

const UploadButton = styled.button`
    width: 6.8vw;
    height: 2.5vw;
    border: none;
    border-radius: 1.25vw; 
    font-size: 1vw;
    color: ${colors.white};
    background-color: ${colors.bannerBlue};

    &:hover {
        border: 0.2vw solid ${colors.white};
    }
`

const Upload = () => {
    return (
        <UploadContainer>
            <Banner 
                width="26%" 
                BannerP1="상담을 해줄 친구가 있으니, 걱정하지 마세요."
                BannerP2="당신이 모르는 부분은 무엇인가요?"
                BannerP3="고민하지말고, 내용을 작성해주세요."
                RightPadding="2.5vw"
            />

            <UploadBar>
                <UploadP style={{marginLeft: "2vw"}}>글쓰기</UploadP>
                <UploadP style={{fontSize: "0.8vw"}}>고민을 적어주세요.</UploadP>
            </UploadBar>

            <UploadInput placeholder="제목을 입력해주세요"/>
            <UploadTextarea placeholder="내용을 입력해주세요"/>

            <div style={{width: "70%", display: "flex", justifyContent: "right", marginTop: "2vw"}}>
                <UploadButton>등록하기</UploadButton>
            </div>
        </UploadContainer>
    );
}

export default Upload;