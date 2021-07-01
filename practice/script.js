let div = document.querySelectorAll(".col");
div.forEach((ele) => {
    let content = ele.innerHTML;
    ele.addEventListener("click", () => {
        alert(content);
    });
});