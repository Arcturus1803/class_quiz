import styled from "@emotion/styled";

export const Seller = styled.input`
  margin: 8px;
`;

export const Name = styled.input`
  margin: 8px;
`;
export const Detail = styled.input`
  margin: 8px;
`;

export const Price = styled.input`
  margin: 8px;
`;
export const Btn = styled.button`
  margin-top: 15px;
  background-color: ${(props) => (props.isActive ? "" : "#dfe6e9")};
  border-color: ${(props) => (props.isActive ? "" : "#dfe6e9")};
`;
