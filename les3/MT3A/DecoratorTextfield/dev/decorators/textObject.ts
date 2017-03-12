/// <reference path="../text.ts"/>

class TextObject extends Txt
{

    constructor(text : string)
    {
        super();
        this.text = text;
    }

    public getText(): string
    {
        return this.text.toString();
    }
}

