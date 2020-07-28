import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.i`
  position: absolute;
  color: #747474;
  left: 35px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 1px solid #e8e7e7;
  padding: 10px 10px 10px 40px;
  margin: 0 20px;
  border-radius: 50px;
  background-color: #f8f8f8;
`;

export const SearchResultList = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 350px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  overflow: scroll;
  position: absolute;
  top: 42px;
  border-bottom: 20px solid #000;

  @media (max-width: 800px) {
    height: 100vh;
  }

  & li {
    display: flex;
  }

  & li + li {
    margin-top: 10px;
  }

  & img {
    height: 140px;
    width: 140px;
    border-radius: 10px;
    margin-right: 10px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 140px;

  & a:hover {
    text-decoration: underline;
  }
`;

export const ClearQuery = styled.button`
  position: absolute;
  right: 35px;
  background: none;
  border: none;
  height: 16px;
`;
