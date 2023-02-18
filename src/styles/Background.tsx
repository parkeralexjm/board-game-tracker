import styled from "@emotion/styled";

const Background = styled.div`
    width: 100vw; 
    height: 100vh;
    background-color: #012835 ;
    padding-top:64px;
    display: flex;
    flexDirection: column;
`;

const StyledMainBorder = styled.div`
    background-color: #2D5C62; 
    margin: 2rem; 
    display: flex; 
    flex-direction: column; 
    align-items: center;
    width: 100%;
    border-radius: 15px;
    padding: 1rem;
`;

const StyledCollectionBorder = styled.div`
    background-color: #2D5C62; 
    margin: 2rem; 
    display: flex; 
    flex-direction: column; 
    width: 100%;
    border-radius: 15px;
    padding: 1rem;
`;

export { Background, StyledMainBorder, StyledCollectionBorder };