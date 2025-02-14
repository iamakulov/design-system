import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Text } from "../Text";

export default {
  title: "Design System/Tooltip",
  component: Tooltip,
  argTypes: {
    content: {
      control: {
        type: "text",
      },
    },
    trigger: {
      control: {
        type: "select",
        options: ["click", "hover", "focus"],
      },
      description: "The action that will trigger the tooltip",
      table: {
        type: {
          summary: "click | hover | focus",
        },
        defaultValue: {
          summary: "hover",
        },
      },
    },
    showArrow: {
      control: {
        type: "boolean",
      },
      description: "Whether to show the arrow",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    placement: {
      control: {
        type: "select",
        options: [
          "left",
          "right",
          "top",
          "bottom",
          "topLeft",
          "topRight",
          "bottomLeft",
          "bottomRight",
          "rightTop",
          "rightBottom",
          "leftTop",
          "leftBottom",
        ],
      },
      description: "The placement of the tooltip",
      table: {
        type: {
          summary:
            "left | right | top | bottom | topLeft | topRight | bottomLeft | bottomRight | rightTop | rightBottom | leftTop | leftBottom",
        },
        defaultValue: {
          summary: "top",
        },
      },
    },
    visible: {
      control: {
        type: "boolean",
      },
      description: "Whether the tooltip is visible. (Controlled)",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    onVisibleChange: {
      control: {
        type: "object",
      },
      description: "Callback when the visibility of the tooltip changes",
      table: {
        type: {
          summary: "(visible: boolean) => void",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Tooltip {...args}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        <br />
      </Text>
    </Tooltip>
  );
};

// eslint-disable-next-line react/function-component-definition
const TemplateButton: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Tooltip {...args}>
      {/* Replace this with DS button once button is in live */}
      <button>Focus here</button>
    </Tooltip>
  );
};

export const TooltipStory = Template.bind({});
TooltipStory.storyName = "Tooltip";
TooltipStory.args = {
  content: "This is a tooltip",
  trigger: "hover",
};

export const TooltipButtonStory = TemplateButton.bind({});
TooltipButtonStory.storyName = "Tooltip Button Trigger";
TooltipButtonStory.args = {
  content: "This is a tooltip",
  trigger: "focus",
};
