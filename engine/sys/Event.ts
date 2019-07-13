class Event<Detail extends object = any> extends CustomEvent<Detail> {

    public constructor(detail: Detail) {
        super('bifrost', { detail });
    }
}

namespace Event {

}

export default Event;
