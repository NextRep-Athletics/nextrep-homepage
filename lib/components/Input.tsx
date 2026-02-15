import styled from "styled-components";
import { theme } from "@/styles/theme";

// STYLED COMPONENTS

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  color: ${theme.colors.dark};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  font-family: ${theme.fonts.montserrat};
  font-size: 0.9rem;
  color: ${theme.colors.dark};
  background: #f5f5f5;
  border: 2px solid transparent;
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.normal};

  &::placeholder {
    color: #999;
  }

  /* HOVER NOTE: Add subtle border color change on hover */
  &:hover {
    background: #ececec;
  }

  &:focus {
    outline: none;
    background: white;
    border-color: ${theme.colors.blue};
  }

  &:disabled {
    background: #e0e0e0;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// TYPES

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
    <InputWrapper>
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
