let form = document.querySelector("form");

document.addEventListener("submit", function (event) {
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(`Username is`,user.value);
    console.log(`Password is`,pass.value);

    alert(`Your Username is (${user.value}) And Password is (${pass.value})`);
})

