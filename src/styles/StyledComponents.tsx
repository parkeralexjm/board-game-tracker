import styled from "@emotion/styled";

const Background = styled.div`
    width: 100vw; 
    min-height: 100vh;
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

const StyledGameBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 100;
`;

const StyledGameDivider = styled.div`
    height: 3px;
    width: 100px;
    background-color: #6B6A69;
    border-radius: 5px;
`;

const StyledGameOutline = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export { 
    Background, 
    StyledMainBorder, 
    StyledCollectionBorder, 
    StyledGameBorder, 
    StyledGameDivider,
    StyledGameOutline,
};
