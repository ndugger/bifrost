import * as Bifrost from 'bifrost';

import Panel from 'bifrost/common/controls/Panel';
import Text from 'bifrost/common/controls/Text';

export default class MainMenu extends Bifrost.GUI.Control {

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <Panel heading='Farmville 2.0'>
                <Text content='Lorem ipsum dolor sit amet'/>
            </Panel>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `
            :host {
                align-items: center;
                background: url(assets/grass.png);
                display: flex;
                justify-content: center;
                height: 100%;
                user-select: none;
                width: 100%;
            }
        `;
    }
}
