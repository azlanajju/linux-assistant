function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  const commandSets = document.querySelectorAll(".commandsSet");

searchInput.addEventListener("keyup", function () {
  const searchTerm = searchInput.value.toLowerCase();

  // Iterate through each command set
  for (const commandSet of commandSets) {
    const tags = commandSet.getAttribute("data-tags").toLowerCase();
    const commandDiv = commandSet;

    // Show or hide the command set based on the search term and tags
    if (
      tags.includes(searchTerm) ||
      commandSet.querySelector("textarea").value.toLowerCase().includes(searchTerm)
    ) {
      commandDiv.style.display = "block";
    } else {
      commandDiv.style.display = "none";
    }
  }
});


const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const textarea = button.parentNode.querySelector('textarea');
        textarea.select();
        document.execCommand('copy');
        textarea.blur();
        copyButtons.innerHTML = "azlan";
    });
});
