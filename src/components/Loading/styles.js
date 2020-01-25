import styled from 'styled-components';

export const Spinner = styled.div`
  border: 0.8rem solid rgba(0, 0, 0, 0.1);
  border-left-color: ${props => (props.color ? props.color : 'fucchia')};
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
