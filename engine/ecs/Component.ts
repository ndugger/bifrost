namespace Component {

}

class Component<Properties extends Component<Properties>> {

    public constructor(properties: Properties) {
        Object.assign(this, properties);
    }
}

export default Component;
