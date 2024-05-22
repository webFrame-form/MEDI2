import styled from "styled-components";
import Banner from "../components/banner";

const CommunityContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Community = () => {
    return (
        <CommunityContainer>
            <Banner 
                width="26%" 
                BannerP1="올바르지 않은 영양제 섭취는 건강에 악영향을 끼쳐요."
                BannerP2="모르는 부분이 있다면 고민하지말고,"
                BannerP3="MEDI:에서 고민을 나눠주세요."
                RightPadding="1vw"
            />
        </CommunityContainer>
    )
}


export default Community;