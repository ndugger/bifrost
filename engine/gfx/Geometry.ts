import Material from './Material';

namespace Geometry {

    export interface Options {
        materials: Material[];
        points: number[];
    }
}

class Geometry implements Geometry.Options {

    public readonly materials: Material[];
    public readonly points: number[];

    public constructor(options: Geometry.Options) {
        Object.assign(this, options);
    }
}

export default Geometry;
