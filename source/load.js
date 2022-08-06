const max = 1;
function getmax() {
    return max;
}
function inval() {
    alert("Invalid page number, please try pages 1 to " + getmax());
}

function load(index) {
    console.log(index);
    if (index > 0 && index <= getmax()) {
        window.location.href = "blog" + index + ".html";
    }
    else inval();
}