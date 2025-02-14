import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CommonComponentProps } from "Types/common";

export type ColorSelectorProps = CommonComponentProps & {
  onSelect?: (hex: string) => void;
  colorPalette: string[];
  fill?: boolean;
  defaultValue?: string;
};

const Palette = styled.div<{ fill?: boolean }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: var(--ads-spaces-4) var(--ads-spaces-5);
  width: ${(props) => (props.fill ? "100%" : "234px")};
`;

const ColorBox = styled.div<{ selected: string; color: string }>`
  width: var(--ads-spaces-8);
  height: var(--ads-spaces-8);
  margin: 0 var(--ads-spaces-2) var(--ads-spaces-2) 0;
  background-color: ${(props) => props.color};
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 0px calc(var(--ads-spaces-1) - 1px)
      var(--ads-color-selector-shadow-color);
  }

  // TODO: Either this component should be responsible for the entire layout, or
  //  the parent component should force the margin to not exist for this line.
  //  This is hacky and prevents reusability.
  &:nth-child(9n) {
    margin-right: 0px;
  }

  ${(props) =>
    props.selected === props.color
      ? `&::before {
    content: "";
    position: absolute;
    left: calc(var(--ads-spaces-3) - 1px);
    top: calc(var(--ads-spaces-1) - 1px);
    width: calc(var(--ads-spaces-2) - 1px);
    height: calc(var(--ads-spaces-4) - 1px);
    border: 2px solid var(--ads-color-selector-checkmark-color);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }`
      : `
  &::before {
    display: none;
  }
  `}
`;

function ColorSelector(props: ColorSelectorProps) {
  const { onSelect } = props;
  const [selected, setSelected] = useState<string>(
    props.defaultValue || props.colorPalette[0],
  );

  useEffect(() => {
    if (props.defaultValue) {
      setSelected(props.defaultValue);
    }
  }, [props.defaultValue]);

  return (
    <Palette data-cy={props.cypressSelector} fill={props.fill}>
      {props.colorPalette.map((hex: string, index: number) => {
        return (
          <ColorBox
            className={
              selected === hex ? "t--color-selected" : "t--color-not-selected"
            }
            color={hex}
            key={index}
            onClick={() => {
              if (selected !== hex) {
                setSelected(hex);
                onSelect && onSelect(hex);
              }
            }}
            selected={selected}
          />
        );
      })}
    </Palette>
  );
}

ColorSelector.defaultProps = {
  fill: false,
};

export default ColorSelector;
