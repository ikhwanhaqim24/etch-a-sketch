const container = document.body.querySelector("#container");

// Add 16 divs

const totalDivs = 16 * 16;

for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div');
    container.appendChild(div);

    div.addEventListener("mouseover", (box) => {
        div.style.backgroundColor = "red";
    })

    div.addEventListener("mouseout", (box) => {
        setTimeout(() => {
            div.style.backgroundColor = "transparent";
        }, 2_000);
    })
}