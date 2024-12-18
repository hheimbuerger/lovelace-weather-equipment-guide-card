import { css } from "lit";

export const styles = css`
  .error {
    color: red;
  }
  .dl {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .dt {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }
  .dd {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, auto) minmax(0, 2fr));
    margin: 0;
  }
  .toggle {
    padding: 0.6em;
    border: grey;
    border-radius: 50%;
  }
  .toggle.on {
    background-color: green;
  }
  .toggle.off {
    background-color: red;
  }
  .button {
    display: block;
    border: outset 0.2em;
    border-radius: 50%;
    border-color: silver;
    background-color: silver;
    width: 1.4em;
    height: 1.4em;
  }
  .value {
    padding-left: 0.5em;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
  }

  .recommendations-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 30px;
  }

  .fade-in {
    opacity: 0;
    animation: var(--pop-duration) fadeIn calc(max(var(--pop-delay) * var(--pop-index), 0s)) forwards;
  }
  .fade-in-1 {
    --pop-index: 0;
  }
  .fade-in-2 {
    --pop-index: 1;
  }
  .fade-in-3 {
    --pop-index: 2;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  };
`;
