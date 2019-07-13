import Material from './Material';

namespace Geometry {

    export interface Options {
        points: Float32Array;
    }
}

class Geometry implements Geometry.Options {

    public readonly points: Float32Array;

    public constructor(options: Geometry.Options) {
        Object.assign(this, options);
    }
}

export default Geometry;
