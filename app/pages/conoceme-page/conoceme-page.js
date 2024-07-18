import {CellsPage} from '@cells/cells-page';
import {html, css} from 'lit-element';
class ConocemePage extends CellsPage {
static get is() {
  return 'conoceme-page';
}
//*/
static get properties() {
    return {
      title: { type: String },
      company: { type: String },
      pokemonList: { type: Array },
    };
  }
constructor() {
  super();
}
}
window.customElements.define(ConocemePage.is, ConocemePage);