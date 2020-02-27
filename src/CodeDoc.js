
class CodeDoc
{
    constructor(isVertical, spanSize, title){
        console.log("CodeDoc(" + isVertical + ", " + spanSize + ", " + title + ")");
        let dt = new Date();
        this.isVertical = isVertical;
        this.spanSize = spanSize;
        this.createdUnixTime = dt.getTime();
        this.updatedUnixTime = dt.getTime();
        this.title = title;
        this.EMPTY_VALUE = "{empty}";
        this.debugPreview = this.EMPTY_VALUE;
        this.characterStream = "";
    }

    calculateDebugPreview(){
        this.debugPreview = "";
        let length = this.characterStream.length();
        let row = 0;
        for(let x = 1; x < length, x++){
            this.debugPreview += this.characterStream[x];
            if(row >= this.spanSize){
                this.debugPreview += "<br/>";
            }
            row += 1;
            if(row == this.spanSize){
                row = 0;
            }
        }
    }

    append(newText){
        console.log("CodeDoc.app(" + newText + ")");
        if(newText === null){
            console.log("CodeDoc.app(...) is null ");
        }else if(newText === undefined){
            console.log("CodeDoc.app(...) is undefined");
        }else if(newText === ""){
            console.log("CodeDoc.app(...) is empty string");
        }else{
            let dt = new Date();
            if(this.debugPreview === this.EMPTY_VALUE){
                //this.debugPreview = newText;
                this.characterStream = newText;
            }else{
                //this.debugPreview += newText;
                this.characterStream += newText;
            }
            this.calculateDebugPreview();
            this.updatedUnixTime = dt.getTime();
            console.log("CodeDoc.app(...) added " + newText);
        }
    }
}


export default CodeDoc;