class Shape {

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

export class Circle extends Shape{
    render(){
        // complete return
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
export class Square extends Shape{
    render(){
        // complete return
        return `<rect x="50" width="200" height="200" fill="${this.color}"/>`
    }
}
export class Triangle extends Shape{
    render(){
        // complete return
        return `<polygon height"100%" width="100%" points="0,200 300, 200 150,0" fill="${this.color}"/>`
    }
};
