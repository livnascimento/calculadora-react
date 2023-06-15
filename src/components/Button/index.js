import { ButtonContainer, LargeButtonContainer } from "./styles";

export const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
}

export const LargeButton = ({label, onClick}) => {
    return (
      <LargeButtonContainer onClick={onClick}>
        {label}
      </LargeButtonContainer>
    );
}