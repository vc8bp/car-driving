class Controlls {
    constructor() {
        this.left = false;
        this.right = false;
        this.forword = false;
        this.backword = false;

        this.#addKeyboardLisners()
    }

    #addKeyboardLisners() {
        document.onkeydown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowUp" :
                    this.forword = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown" :
                    this.backword = true;
                    break;
            }
        }
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowUp" :
                    this.forword = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown" :
                    this.backword = false;
                    break;
            }

        }
    }
}