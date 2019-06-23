import * as Bifrost from 'bifrost';

import Pane from '../controls/Pane';

export default class MainMenu extends Bifrost.GUI.Control {

    public render(): Bifrost.GUI.Control.Tree {
        return [
            <Pane/>
        ];
    }

    public theme(): Bifrost.GUI.Control.Style {
        return `

        `;
    }
}
