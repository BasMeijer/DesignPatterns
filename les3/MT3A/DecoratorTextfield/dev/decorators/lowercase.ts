/// <reference path="../text.ts"/>

class LowerCase extends Txt
{
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public getText(): string
    {
        return this.base.getText().toLowerCase();
    }

}


