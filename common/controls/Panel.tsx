import * as Bifrost from 'bifrost';

import Icon from './Icon';
import Text from './Text';

export default class BifrostPanel extends Bifrost.GUI.Control {

    public heading: string;
    public icon: string;

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <HTMLElement tag='header'>
                <Icon glyph={ this.icon }/>
                <Text size={ 1.66 } content={ this.heading }/>
            </HTMLElement>,
            <HTMLElement tag='section'>
                <HTMLSlotElement/>
            </HTMLElement>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                background-color: rgba(40, 40, 40, 0.85);
                border-radius: 20px;
                color: rgb(255, 255, 255);
                filter: drop-shadow(0 16px 16px rgba(0, 0, 0, 0.5));
                overflow: hidden;
                position: relative;

                width: 640px;
            }

            header {
                border-bottom: 2px solid rgba(0, 0, 0, 0.1);
                box-shadow: inset 0 16px 24px rgba(255, 255, 255, 0.2);
                font-weight: 300;
                padding: 12px 24px;
                text-transform: uppercase;
            }

            header h1 {
                margin: 0;
                padding: 0;
            }

            section {
                border-radius: 0 0 16px 16px;
                height: 320px;
                margin: 0 4px 4px;
                padding: 16px;
            }
        `;
    }
}
