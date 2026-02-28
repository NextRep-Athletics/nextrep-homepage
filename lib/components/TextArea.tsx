import styled from "styled-components";
import { theme } from "@/styles/theme";

//#region styled components
const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  color: ${theme.colors.dark};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.875rem 1rem;
  font-size: 0.9rem;
  color: ${theme.colors.dark};
  background: ${theme.colors.inputBg};
  border: 2px solid transparent;
  border-radius: ${theme.borderRadius.md};
  resize: vertical;
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
    resize: none;
  }
`;
//#endregion

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
}

// COMPONENT

export default function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  rows = 5,
}: TextareaProps) {
  return (
    <TextareaWrapper className="montserrat">
      <Label htmlFor={name}>
        {label}
        {required && <span style={{ color: theme.colors.red }}> *</span>}
      </Label>
      <StyledTextarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
      />
    </TextareaWrapper>
  );
}
