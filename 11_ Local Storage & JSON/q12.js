// Select the container div
const container = document.getElementById("container");

// Select buttons
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// Function to add a new paragraph
addBtn.addEventListener("click", function () {
    // Step 1: Create a <p> element
    const para = document.createElement("p");

    // Step 2: Add text to the paragraph
    para.innerText = "This is a new paragraph.";

    // Step 3: Append the new paragraph to the container
    container.appendChild(para);
});

// Function to remove the last paragraph
removeBtn.addEventListener("click", function () {
    // Get all paragraphs inside the container
    const paras = container.getElementsByTagName("p");

    // Only remove if there is at least one paragraph
    if (paras.length > 0) {
        const lastPara = paras[paras.length - 1]; // Last paragraph
        container.removeChild(lastPara);           // Remove it
    }
});
