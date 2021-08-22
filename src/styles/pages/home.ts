import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
  }
`;
