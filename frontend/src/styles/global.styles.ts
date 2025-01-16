import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    // links default styling
    text-decoration: none;

    // lists default styling
    list-style-type: none;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
