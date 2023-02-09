import React from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";

// TODO: startIcon, endIcon type should be a list containing names of allowed icons
export type LinkProps = {
  /** (try not to) pass addition classes here */
  className?: string;
  /** the words you want to display */
  children: string;
  /** the place to navigate to */
  to: string;
  /** the icon at the beginning of the link */
  startIcon?: string;
  /** the icon at the end of the link */
  endIcon?: string;
} & RouterLinkProps;
