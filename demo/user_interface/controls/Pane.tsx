import * as Bifrost from 'bifrost';

export default class BifrostPane extends Bifrost.GUI.Control {

    public render(): Bifrost.GUI.Control.Tree {
        return [
            
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                background-color: #252525;
                border-radius: 20px;
                display: block;
                height: 480px;
                opacity: 0.95;
                position: relative;
                width: 640px;
            }
        `;
    }
}
