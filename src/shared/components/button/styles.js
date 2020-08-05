import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 50%;
  left: 10px;
  transform: translateY(50%);
`;

export const Container = styled.button`
  position: relative;
  padding: 12px 15px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  :hover {
    background-color: black;
  }
`;
