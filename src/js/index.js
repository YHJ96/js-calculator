class App {
    #checked = false;
    #$main = document.querySelector("main");
    constructor() {
        this.#init();
    }
    #init() {
        this.#$main.addEventListener("click", () => {
            if(!this.#checked) {
                alert("준비중인 기능입니다.");
                this.#checked = true;
            } else {
                console.log("준비중인 기능입니다.")
            }
        });
    }
}

new App();