const container = document.body.querySelector("#container");

const createBox = (number) => {
    const totalDivs = Math.pow(number, 2) + number;
    const mod = number + 1;

    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement('div');
        const size = 798 / number;
        let isClicked = false;

        if (i % mod === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%";
        } else div.style.cssText = `border: 1px thin black; height: ${size}px; width: ${size}px`;

        let currentColor = `${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}`;

        div.addEventListener("click", (box) => {
            if (!isClicked) {
                div.style.backgroundColor = `rgb(${currentColor})`;
                isClicked = true;
            }
        });

        div.addEventListener("mouseover", (box) => {
            currentColor = `${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}`;
            if (div.style.backgroundColor == "") div.style.backgroundColor = `rgb(${currentColor})`;
            // div.style.opacity = div.style.opacity + 0.1;
        });
    
        div.addEventListener("mouseout", (box) => {
            if (!isClicked) setTimeout(() => {
                div.style.backgroundColor = "";
            }, 0);
        });

        container.appendChild(div);
    }
};

createBox(16);

const buttonFunction = () => {
    let number = parseInt(prompt("Put grid", "16"));

    if (isNaN(number) || null) return;

    if (number <= 0) number = 1;
    if (number > 100) number = 100;

    // deletes the child
    container.innerHTML = "";
    createBox(number);
}