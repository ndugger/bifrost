import * as Bifrost from 'bifrost';

export default class BifrostText extends Bifrost.GUI.Control {

    public content: string;
    public size: number;

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <HTMLSlotElement/>,
            <HTMLSpanElement textContent={ this.content }/>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                font-family: Quicksand, sans-serif;
                font-size: ${ this.size || 1 }rem;
            }
        `;
    }
}
