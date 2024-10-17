import styled from "@emotion/styled"
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 820px) {
        width: 820px;
    }
`
export const Header = styled.div`
    width: 100vw;
    height: 30vh;
    background: #FF6640;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.5);
    text-align: center;
`

export const MainLogo = styled.img`
    width: 35%;
    height: 30%;
    margin-top: 2vh;
`

export const Header_Group = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: left;
`
export const Header_Text = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem;
`
export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 100vh;
`
export const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 30px 10px;
`

export const List_body_Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content:center;
`

export const ListGroup = styled.div`
    display: flex;
    justify-content: space-around;   
    border-radius: 5%;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.5);
    padding: 1rem;
`

export const ListLabel = styled.div`
    font-size: 2rem;
    font-weight: 700; 
`

export const Listdes = styled.div`
    font-size: 1rem;
    font-weight: 500;
`

export const RoomGroup = styled.div`
     display: flex;
     flex-direction: column; 
`

export const RoomTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`
export const UserCount = styled.div`
    font-size: 1rem;
    font-weight: 500;
`

export const CoinGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: top;
`

export const CoinImage = styled.img`
    width: 1rem;
    height: 20%;
`
export const CoinNumber = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 2px;
`