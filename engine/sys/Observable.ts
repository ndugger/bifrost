class Observable<Value> {

    private actions: [ Observable.Action, (value: Value) => any ][];
    private stream: Value[];

    public debounce(action: (value: Value) => number): this {
        this.actions.push([ Observable.Action.DEBOUNCE, action ]);
        return this;
    }

    public filter(action: (value: Value) => boolean): this {
        this.actions.push([ Observable.Action.FILTER, action ]);
        return this;
    }

    public forEach(action: (value: Value) => void): this {
        this.actions.push([ Observable.Action.FOR_EACH, action ]);
        return this;
    }

    public map<To>(action: (value: Value) => To): Observable<To> {
        this.actions.push([ Observable.Action.MAP, action ]);
        return null;
    }

    public async pipe(value: Value): Promise<void> {
        this.stream.push(value);

        for (const [ type, action ] of this.actions) switch (type) {
            case Observable.Action.DEBOUNCE: {
                continue;
            }
            case Observable.Action.FILTER: {
                continue;
            }
            case Observable.Action.FOR_EACH: {
                this.stream.forEach(action);
                continue;
            }
            case Observable.Action.MAP: {
                continue;
            }
        }

        this.stream.splice(0, this.stream.length);
    }
}

namespace Observable {

    export enum Action {
        DEBOUNCE,
        FILTER,
        FOR_EACH,
        MAP
    }
}

export default Observable;
