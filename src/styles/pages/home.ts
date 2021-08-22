import styled from 'styled-components';

export const Container = styled.div`
  Header {
    background-color: ${(props) => props.theme.colors.background};
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
  }

  .Sider {
    background-color: ${(props) => props.theme.colors.primary};
  }

  .Content {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
