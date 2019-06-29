import ECSComponent from './ecs/Component';
import ECSEntity from './ecs/Entity';
import ECSSystem from './ecs/System';

import GFXCamera from './gfx/Camera';
import GFXMaterial from './gfx/Material';
import GFXRenderer from './gfx/Renderer';

import GUIControl from './gui/Control';
import GUIFragment from './gui/Fragment';

import SYSUUID from './sys/UUID';

export namespace ECS {
    export import Component = ECSComponent;
    export import Entity = ECSEntity;
    export import System = ECSSystem;
}

export namespace GFX {
    export import Camera = GFXCamera;
    export import Material = GFXMaterial;
    export import Renderer = GFXRenderer;
}

export namespace GUI {
    export import Control = GUIControl;
    export import Fragment = GUIFragment;
}

export namespace SYS {
    export import UUID = SYSUUID;
}
