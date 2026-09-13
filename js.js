const textArea = document.getElementById("textArea");
const count = document.getElementById("count");
textArea.addEventListener("input", function () {
    let text = textArea.value;
    // حذف المسافات والأرقام والأقواس 
    let lettersOnly = text.replace(/[\s0-9٠-٩()[\]{}]/g, "");
    count.textContent = lettersOnly.length;
});