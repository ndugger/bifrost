import * as Bifrost from 'bifrost';

export default class BifrostText extends Bifrost.GUI.Control {

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                color: #61524b;
                font-family: Averia Serif Libre, serif;
                font-size: 24px;
            }
        `;
    }
}
