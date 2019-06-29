namespace UUID {

}

class UUID extends String {

    public static from(string: string): UUID {

        if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(string)) {
            throw new Error('Invalid UUID');
        }

        return new UUID(string);
    }

    public static random(): UUID {
        const hex = [] as string[];
        const bin = [] as number[];

        for (let i = 0; i < 16; i++) {
          bin.push(Math.floor(Math.random() * 255));
        }

        bin[ 6 ] = (bin[ 6 ] & 0x0f) | 0x40;
        bin[ 8 ] = (bin[ 8 ] & 0x3f) | 0x80;

        for (let i = 0; i < 256; i++) {
            hex[ i ] = (i + 0x100).toString(16).substr(1);
        }

        return new UUID(
            hex[ bin[ 0 ] ] + hex[ bin[ 1 ] ] +
            hex[ bin[ 2 ] ] + hex[ bin[ 3 ] ] + '-' +
            hex[ bin[ 4 ] ] + hex[ bin[ 5 ] ] + '-' +
            hex[ bin[ 6 ] ] + hex[ bin[ 7 ] ] + '-' +
            hex[ bin[ 8 ] ] + hex[ bin[ 9 ] ] + '-' +
            hex[ bin[ 10 ] ] + hex[ bin[ 11 ] ] +
            hex[ bin[ 12 ] ] + hex[ bin[ 13 ] ] +
            hex[ bin[ 14 ] ] + hex[ bin[ 15 ] ]
        );
    }

    private constructor(string: string) {
        super(string);
    }
}

export default UUID;
