import { LitElement, html, css } from 'lit';
import './LitSearch.js';
export class AppBarrabuscadora extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      h1{
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <h1>Search in LitElement</h1>
      <lit-search></lit-search>
    `;
  }
}
