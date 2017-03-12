/// <reference path="../text.ts"/>

class Summary extends Txt
{
    private base : TextObject = null;

    constructor(base:TextObject)
    {
        super();

        this.base = base;
    }

    public getText(): string
    {
        return this.makeSummary(this.base.getText())
    }

    private makeSummary(text : string){
        return text.split(' ').slice(0,5).join(' ');
    }
}
