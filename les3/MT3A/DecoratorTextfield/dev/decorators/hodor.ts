/// <reference path="../text.ts"/>

class Hodor extends Txt {
    private base: TextObject = null;

    constructor(base: TextObject) {
        super();

        this.base = base;
    }

    public getText(): string {
        return this.makeHodorProof(this.base.getText())
    }

    private makeHodorProof(text: string) {
        let hodors = text.split(' ').length;
        let hodorText : string = "";

        for (let _i = 0; _i < hodors; _i++) {
            hodorText = hodorText + " " + "Hodor";
        }

        return hodorText;
    }
}
