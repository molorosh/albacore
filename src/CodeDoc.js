
class CodeDoc
{
    constructor(isVertical, spanSize, title){
        let dt = new Date();
        this.isVertical = isVertical;
        this.spanSize = spanSize;
        this.createdUnixTime = dt.getTime();
        this.title = title;
        console.log("CodeDoc(" + isVertical + ", " + spanSize + ", " + title + ")");
    }
}


export default CodeDoc;