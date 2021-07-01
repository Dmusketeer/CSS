let div = document.querySelectorAll(".ani");
div.forEach((ele) => {
    let content = ele.innerHTML;
    ele.addEventListener("click", () => {
        alert(content);
    });
});