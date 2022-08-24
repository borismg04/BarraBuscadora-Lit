import { LitElement, html, css } from 'lit';
import './LitSearch.js';
export class AppBarrabuscadora extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <lit-search></lit-search>
    `;
  }
}
