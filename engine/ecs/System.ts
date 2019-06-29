import Component from './Component';
import Entity from './Entity';

namespace System {

}

class System<Guard extends { [ Key in keyof Guard ]: Component<unknown> }> {

    private action: (entity: Entity.Instance<Guard> & Guard) => void;

    public constructor(action: (entity: Entity.Instance<Guard> & Guard) => void) {
        this.action = action;
    }

    public run(entity: Entity.Instance<Guard> & Guard): void {
        this.action(entity);
    }
}

export default System;
