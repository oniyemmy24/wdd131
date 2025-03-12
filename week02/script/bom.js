const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
button.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        alert("Please enter a chapter name.");
        input.focus();
        return;
    }
const li = document.createElement("li");
li.textContent = input.value;

const deleteButton = document.createElement("button");
deleteButton.textContent = "❌";
deleteButton.classList.add("delete");

deleteButton.addEventListener("click", function(){
        list.removeChild(li);
        input.focus();
});

    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();
});
