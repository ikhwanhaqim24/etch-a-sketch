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

const buttonFunction = () => {
    let data = parseInt(prompt("Put grid"));

    if (isNaN(data) || null) return;

    if (data <= 0) data = 1;
    if (data > 100) data = 100;

    // deletes the child
    container.innerHTML = "";
}