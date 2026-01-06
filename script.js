//your JS code here. If required.
// Get references to the select and button
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector('input[type="button"]');

// Add click event listener to the button
removeButton.addEventListener("click", () => {
  // Get the index of the selected option
  const selectedIndex = colorSelect.selectedIndex;

	
  // If an option is selected, remove it
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});
