import { LitElement,html,css } from "lit-element";

export class LitSearch extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      input {
        width: 50%;
        height: 25px;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 3px;
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
        box-shadow: 0 0 0 1px #ccc;
      }
      button {
        width: 20%;
        height: 2.5rem;
        background: #6af371;
        border: none;
        padding: 0.5rem;
        border-radius: 5px;
        display: block;
        margin: 0 auto;
        margin-top: 1rem;
      }
      button:hover {
        background: #6af371;
        box-shadow: 0 0 0 1px #6af371;
        cursor: pointer;
        box-shadow: 0 0 0 1px #000000;
      }
    `;
  }

  render() {
    return html`
      <div class="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    `;
  }
}

customElements.define("lit-search", LitSearch);
