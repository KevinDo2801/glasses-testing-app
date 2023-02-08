export class GlassesList {
    constructor(glasses) {
        this.gList = [];
    }
    addGlasses(glasses) {
        this.gList.push(glasses);
    }
    renderGlasses(){
        // elements HTML contain the content of the list glasses
        let content = "";
        content =  this.gList.reduce((glContent, item, index)=>{
            glContent += `
                <div class = "col-4">
                    <img class = "img-fluid" onclick = "tryOnGlasses(event)" data-id = "${item.id}" src = "${item.src}" alt = "Glasses">
                </div>
            `;

            return glContent;
        },'');

        return content;
    }
}