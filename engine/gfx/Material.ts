import * as Vincent from 'vincent';

import FragmentShader from './shaders/FragmentShader';
import VertexShader from './shaders/VertexShader';

import Renderer from './Renderer';

class Material<Attributes = any, Inputs = any, Uniforms = any> {

    public parameters: Material.Parameters<Attributes, Inputs, Uniforms>;

    public constructor(parameters: Material.Parameters<Attributes, Inputs, Uniforms>) {
        this.parameters = parameters;
    }

    public paint(attributes: Attributes): { inputs: Inputs, uniforms: Uniforms } {
        return this.parameters.paint(attributes);
    }
}

namespace Material {

    export interface Parameters<Attributes, Inputs, Uniforms> {
        attributes: Attributes,
        inputs: Inputs,
        program: Vincent.Program;
        uniforms: Uniforms,
        paint(attributes: Attributes): {
            inputs: Inputs,
            uniforms: Uniforms
        }
    };
}

export default Material;
