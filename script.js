document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  let isLoading = false;

  // Function to add new list items
  function addItems(count) {
    isLoading = true;
    setTimeout(() => {
      for (let i = 0; i < count; i++) {
        const newItem = document.createElement("li");
        newItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(newItem);
      }
      isLoading = false;
    }, 1000); // Simulate loading for 1 second
  }

  // Add about 10 list items by default
  addItems(10);

  // Detect when the user reaches the end of the list
  list.addEventListener("scroll", function () {
    if (!isLoading && list.scrollTop + list.clientHeight >= list.scrollHeight) {
      // Add 2 more list items when the user reaches the end
      addItems(2);
    }
  });
});
