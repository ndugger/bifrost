class Shader<Inputs extends object = any, Uniforms extends object = any> {
    public inputs: Inputs;
    public uniforms: Uniforms;
}

type KeyOfInputs<Program extends any> =
    keyof Program[ 'shaders' ][ 'fragment' ][ 'inputs' ] |
    keyof Program[ 'shaders' ][ 'vertex' ][ 'inputs' ];

type ValueOfInput<Program extends any, Id> =
    Id extends keyof Program[ 'shaders' ][ 'fragment' ][ 'inputs' ]
        ? Program[ 'shaders' ][ 'fragment' ][ 'inputs' ][ Id ]
        : Id extends keyof Program[ 'shaders' ][ 'vertex' ][ 'inputs' ]
            ? Program[ 'shaders' ][ 'vertex' ][ 'inputs' ][ Id ]
            : unknown;

class Program<FragmentShader extends Shader, VertexShader extends Shader> {

    public shaders: {
        fragment: FragmentShader;
        vertex: VertexShader;
    }

    public constructor(shaders: { fragment: FragmentShader, vertex: VertexShader }) {
        this.shaders = shaders;
    }

    public setInput<Id extends KeyOfInputs<this>>(id: Id, value: ValueOfInput<this, Id>): void {

    }
}

////////////////////////////////////////////////////////////////////////////////

interface MaterialData<Attributes, Inputs, Uniforms> {
    attributes: Attributes,
    inputs: Inputs,
    uniforms: Uniforms,
    update(attributes: Attributes): {
        inputs: Inputs,
        uniforms: Uniforms
    }
};

class Material<Attributes, Inputs, Uniforms> {

    public constructor(material: MaterialData<Attributes, Inputs, Uniforms>) {

    }
}
