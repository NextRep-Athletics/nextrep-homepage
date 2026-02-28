import styled from "styled-components";
import { theme } from "@/lib/styles/theme";

//#region styled components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  color: ${theme.colors.dark};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  color: ${theme.colors.dark};
  background: ${theme.colors.inputBg};
  border: 2px solid transparent;
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};

  &::placeholder {
    color: ${theme.colors.placeholder};
  }

  /* HOVER NOTE: Add subtle border color change on hover */
  &:hover {
    background: ${theme.colors.inputBgHover};
  }

  &:focus {
    outline: none;
    background: white;
    border-color: ${theme.colors.blue};
  }

  &:disabled {
    background: ${theme.colors.inputBgDisabled};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
//#endregion

interface InputProps {
  label: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// COMPONENT

export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <InputWrapper className="montserrat">
      <Label htmlFor={name}>
        {label}
        {required && <span style={{ color: theme.colors.red }}> *</span>}
      </Label>
      <StyledInput
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </InputWrapper>
  );
}
