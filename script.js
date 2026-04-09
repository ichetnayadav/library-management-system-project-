function addBook() {
  let book = document.getElementById("bookName").value;

  if (book === "") {
    alert("Enter book name");
    return;
  }

  let li = document.createElement("li");
  li.textContent = book;

  document.getElementById("bookList").appendChild(li);
}
