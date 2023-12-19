import ItemAnswer from "../listItem/item-answer";

// 스크롤 보기 위한 임의 리스트
const ListAnswer = ({data}) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <ItemAnswer
                        key = {index}
                        id = {item.id}
                        name = {item.name}
                        text = {item.text}
                    />
                )
            })}
        </>
    )
}

export default ListAnswer;