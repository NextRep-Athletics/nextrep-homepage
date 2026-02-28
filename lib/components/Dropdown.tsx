import styled from "styled-components";
import { theme } from "@/styles/theme";
import { FaChevronDown } from "react-icons/fa";

//#region styled components
const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  color: ${theme.colors.dark};
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledDropdown = styled.select`
  width: 100%;
  padding: 0.875rem 1rem;
  padding-right: 2.5rem; /* Space for dropdown arrow */
  font-size: 0.9rem;
  color: ${theme.colors.dark};
  background: ${theme.colors.inputBg};
  border: 2px solid transparent;
  border-radius: ${theme.borderRadius.md};
  appearance: none; /* Remove default arrow */
  cursor: pointer;
  transition: all ${theme.transitions.normal};

  /* Placeholder styling */
  &:invalid {
    color: ${theme.colors.placeholder};
  }

  option {
    color: ${theme.colors.dark};
  }

  option[value=""][disabled] {
    display: none;
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

const DropdownIcon = styled(FaChevronDown)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.875rem;
  color: ${theme.colors.dark};
  pointer-events: none; /* Click passes through to Dropdown */
`;
//#endregion

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: DropdownOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// COMPONENT

export default function Dropdown({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Dropdown an option",
  required = false,
  disabled = false,
}: DropdownProps) {
  return (
    <DropdownWrapper className="montserrat">
      <Label htmlFor={name}>
        {label}
        {required && <span style={{ color: theme.colors.red }}> *</span>}
      </Label>
      <DropdownContainer>
        <StyledDropdown
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledDropdown>
        <DropdownIcon />
      </DropdownContainer>
    </DropdownWrapper>
  );
}
