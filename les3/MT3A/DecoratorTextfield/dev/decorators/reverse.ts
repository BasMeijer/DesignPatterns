/// <reference path="../text.ts"/>

class Reverse extends Txt
{
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public getText(): string
    {
        return this.reverseText(this.base.getText());
    }

    private reverseText(text : string){
        return(text.split("").reverse().join(""))
    }
}


