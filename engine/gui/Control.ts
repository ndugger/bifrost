import * as Cortex from 'cortex';

namespace Control {
    export type Tree = Cortex.Node[];
    export type Style = string;
}

class Control extends Cortex.Component {

    public static createNode = Cortex.render;

}

export default Control;
