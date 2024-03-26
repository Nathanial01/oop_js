class Controls {
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.right = false;
        this.left = false;

        this.#addkeyboardListeners(); // Private method for setting up event listeners

    }

    #addkeyboardListeners() {
        // Add keydown event listener
        document.onkeydown = (event)=> {//function of event => if we dont put ir like thes then this event will point on function event than constractor
            switch (event.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
   /// console.table(this);//just vor debugging 
        }
       
        // Add keyup event listener
        document.onkeyup = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
       /// console.table(this);//just vor debugging 

        }
    }
}
