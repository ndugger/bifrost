import UUID from '../sys/UUID';
import Component from './Component';

class EntityInstance<Components extends { [ Key in keyof Components ]: Component<unknown> }> {

    public readonly id: UUID;

    public constructor(components: Components & { id: never }) {
        this.id = UUID.random();
        Object.assign(this, components);
    }
}

namespace Entity {
    export type Instance<T extends { [ Key: string ]: Component<unknown> }> = EntityInstance<T>;
}

const Entity = EntityInstance as {
    new<Components>(components: Components): EntityInstance<Components> & Components;
}

export default Entity;
