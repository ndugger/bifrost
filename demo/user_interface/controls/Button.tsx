import * as Bifrost from 'bifrost';

export default class DemoButton extends Bifrost.GUI.Control {

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <HTMLButtonElement>
                <HTMLSlotElement/>
            </HTMLButtonElement>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                display: contents;
            }

            .${ HTMLButtonElement.name } {
                
            }
        `;
    }
}
