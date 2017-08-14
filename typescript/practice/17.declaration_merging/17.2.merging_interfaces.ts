
interface Box{
    height:number;
    width:number;
}
interface Box{
    scale:number;
}

let box:Box ={height:5, width: 6, scale: 10};


interface Document{
    createElement(tagName: any): Element;
}
interface Document{
    createElement(tagName:'div'): HTMLDivElement;
    createElement(tagName:'span'): HTMLSpanElement;
}
interface Document{
    createElement(tagName:string): HTMLElement;
    createElement(tagName:'canvas'): HTMLCanvasElement;
}

