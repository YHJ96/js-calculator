class App {
    constructor() {
        this.$calculator = document.querySelector("#calculator");
    }

    init = () => {
        this.$calculator.addEventListener("click", ({ target }) => {
            if (this.checkedTarget(target, "pad") === "gray") {
                target.classList.add("click-color-gray");
                setTimeout(() => target.classList.remove("click-color-gray"), 100);
            }
            if (this.checkedTarget(target, "pad") === "orange") {
                target.classList.add("click-color-orange");
                setTimeout(() => target.classList.remove("click-color-orange"), 100);
            }
        });
    }

    checkedTarget = (target, className) => {
        const colorType = [...target.classList].flatMap((node) => node.split('-'));
        const bool = target.classList.contains(className);
        if (colorType.includes("gray") && bool) return "gray";
        if (colorType.includes("orange") && bool) return "orange";
        return;
    }
}

const app = new App();
app.init();