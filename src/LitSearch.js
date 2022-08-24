import { LitElement,html,css } from "lit-element";

export class LitSearch extends LitElement {
  static get properties() {
    return {
      data : { type : Array },
      result : { type : Array }
    };
  }

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
      ul {
        display: block;
        list-style: none;
        padding: 10px;
        margin: 0;
        margin-top: auto;
        padding: 20px;
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    this.data = [
      {name : 'Iphone', value: '$1000'},
      {name : 'Samsung', value: '$2000'},
      {name : 'Xbox', value: '$3000'},
      {name : 'Playstation', value: '$4000'},
      {name : 'Tv LG', value: '$5000'},
      {name : 'Tv Samsung', value: '$6000'},
      {name : 'Tv Sony', value: '$7000'},
      {name : 'Tv Panasonic', value: '$8000'},
      {name : 'Dell', value: '$9000'},
      {name : 'Mac', value: '$10000'},
    ];
    this.result = this.data;
  }

  render() {
    return html`
      <div class="search">
        <input id="form" type="text" placeholder="Search" />
        <button>Search</button>
        <ul>
        ${this.result.map(item => html`
          <li>${item.name} - ${item.value}</li>
        `)}
      </ul>
      </div>
    `;
  }

  filterData() {
    const input = this.shadowRoot.querySelector('#form').value.toLowerCase();
    this.data.map(product => {
      const name = product.name.toLowerCase();

      if(name.indexOf(input) !== -1) {
        this.result.push(product);
      }
    }
    );
  }
}

customElements.define("lit-search", LitSearch);
