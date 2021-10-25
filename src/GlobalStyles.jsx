import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        ::after,
        ::before {
          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: currentColor;
        }
        ::after,
        ::before {
          --tw-content: "";
        }
        html {
          line-height: 1.5;
          -webkit-text-size-adjust: 100%;
          -moz-tab-size: 4;
          tab-size: 4;
        }
        body {
          margin: 0;
          line-height: inherit;
        }
        hr {
          height: 0;
          color: inherit;
          border-top-width: 1px;
        }
        abbr[title] {
          text-decoration: underline dotted;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-size: inherit;
          font-weight: inherit;
        }
        a {
          color: inherit;
          text-decoration: inherit;
        }
        b,
        strong {
          font-weight: bolder;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: theme(
            "fontFamily.mono",
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            "Liberation Mono",
            "Courier New",
            monospace
          );
          font-size: 1em;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        table {
          text-indent: 0;
          border-color: inherit;
          border-collapse: collapse;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font-family: inherit;
          font-size: 100%;
          line-height: inherit;
          color: inherit;
          margin: 0;
          padding: 0;
        }
        button,
        select {
          text-transform: none;
        }
        [type="button"],
        [type="reset"],
        [type="submit"],
        button {
          -webkit-appearance: button;
          background-color: transparent;
          background-image: none;
        }
        :-moz-focusring {
          outline: auto;
        }
        :-moz-ui-invalid {
          box-shadow: none;
        }
        progress {
          vertical-align: baseline;
        }
        ::-webkit-inner-spin-button,
        ::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        ::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        summary {
          display: list-item;
        }
        blockquote,
        dd,
        dl,
        figure,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p,
        pre {
          margin: 0;
        }
        fieldset {
          margin: 0;
          padding: 0;
        }
        legend {
          padding: 0;
        }
        ol,
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        textarea {
          resize: vertical;
        }
        input::placeholder,
        textarea::placeholder {
          opacity: 1;
          color: theme("colors.gray.4", #9ca3af);
        }
        [role="button"],
        button {
          cursor: pointer;
        }
        :disabled {
          cursor: default;
        }
        audio,
        canvas,
        embed,
        iframe,
        img,
        object,
        svg,
        video {
          display: block;
          vertical-align: middle;
        }
        img,
        video {
          max-width: 100%;
          height: auto;
        }
        [hidden] {
          display: none;
        }
        body {
          font-family: "Noto Sans Bengali", sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
