import * as Bifrost from 'bifrost';

import Icon from './Icon';
import Text from './Text';

export default class BifrostPanel extends Bifrost.GUI.Control {

    public heading: string;
    public icon: string;

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <Icon glyph={ this.icon }/>,
            <Text size={ 1.66 } content={ this.heading }/>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                box-shadow: inset 0 16px 24px rgba(255, 255, 255, 0.2);
                font-weight: 300;
                padding: 12px 24px;
                text-transform: uppercase;
            }
        `;
    }
}
