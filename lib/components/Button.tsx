"use client";

import Link from "next/link";
import styled, { css } from "styled-components";
import { theme } from "@/lib/styles/theme";

type ButtonVariant = "primary" | "secondary" | "outline" | "dark";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

//#region styled components
function getVariantStyles(variant: ButtonVariant) {
  switch (variant) {
    case "primary":
      return css`
        background: ${theme.colors.blue};
        color: white;

        &:hover {
          background: ${theme.colors.royal};
          box-shadow: ${theme.shadows.lg};
          transform: translateY(-2px);
        }
      `;
    case "secondary":
      return css`
        background: ${theme.colors.gold};
        color: ${theme.colors.dark};

        &:hover {
          background: ${theme.colors.goldDark};
          color: white;
          box-shadow: ${theme.shadows.lg};
          transform: translateY(-2px);
        }
      `;
    case "outline":
      return css`
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        color: white;
        border: 2px solid ${theme.colors.blue};

        &:hover {
          background: ${theme.colors.blue};
          color: white;
          box-shadow: ${theme.shadows.lg};
        }
      `;
    case "dark":
      return css`
        background: ${theme.colors.dark};
        color: white;
        padding: 0.75rem 2rem;
        font-weight: ${theme.fontWeights.bold};
        font-size: 1.125rem;

        &:hover {
          background: ${theme.colors.navy};
        }
      `;
  }
}

// BASE STYLES
const baseStyles = css<{ $variant: ButtonVariant }>`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  text-align: center;
  cursor: pointer;
  border: none;

  ${(props) => getVariantStyles(props.$variant)}

  &:focus-visible {
    outline: 3px solid ${theme.colors.blue};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`
  ${baseStyles}
`;

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  ${baseStyles}
`;
//#endregion

export default function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
}: ButtonProps) {
  if (href && !disabled) {
    return (
      <StyledLink href={href} $variant={variant} className={`montserrat ${className}`.trim()}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
      className={`montserrat ${className}`.trim()}
    >
      {children}
    </StyledButton>
  );
}
