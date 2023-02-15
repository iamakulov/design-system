import styled, { css } from "styled-components";
import { Kind } from "./Callout.types";
import { Icon } from "../Icon";

const Variables = css`
  --callout-color-background: var(--ads-v2-color-bg);
`;

const Kinds = {
  success: css`
    --callout-color-background: var(--ads-v2-color-bg-success);
  `,
  warning: css`
    --callout-color-background: var(--ads-v2-color-bg-warning);
  `,
  info: css`
    --callout-color-background: var(--ads-v2-color-bg-information);
  `,
  error: css`
    --callout-color-background: var(--ads-v2-color-bg-error);
  `,
};

export const StyledCallout = styled.div<{
  isClosed?: boolean;
  kind: Kind;
}>`
  ${Variables}

  ${({ kind }) => kind && Kinds[kind]}

  // TODO: get minh, minw from vasanth (with all optionals switched off)
  width: 450px;
  min-height: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--ads-v2-spaces-3);
  border-radius: var(--ads-v2-border-radius);
  padding: var(--ads-v2-spaces-3) var(--ads-v2-spaces-4);

  background-color: var(--callout-color-background);

  ${({ isClosed }) => isClosed && `display: none;`}
`;

export const StyledIcon = styled(Icon)`
  margin-left: auto;
  cursor: pointer;
`;
