const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#chapterList');
button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please enter a chapter name.");
        return;
    }
const li = document.createElement('li');
const deleteButton = document.createElement('button');
deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
    });

    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();
});
