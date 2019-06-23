import * as Bifrost from 'bifrost';

export default class DemoPane extends Bifrost.GUI.Control {

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <HTMLElement tag='section'>
                <HTMLSlotElement/>
            </HTMLElement>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            section.${ HTMLElement.name } {
                background-image: url(assets/wood.png);
                height: 600px;
                width: 800px;
            }
        `;
    }
}
