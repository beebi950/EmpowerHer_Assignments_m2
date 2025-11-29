// Selecting elements from the DOM
const noteBox = document.getElementById("noteBox");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const clearBtn = document.getElementById("clearBtn");

// --------------------------
// 1. Load saved notes on page load automatically
// --------------------------
window.addEventListener("load", function () {
    const savedNotes = localStorage.getItem("userNotes");

    // If notes exist in localStorage, display them
    if (savedNotes) {
        noteBox.value = savedNotes;
    }
});

// --------------------------
// 2. Save notes to localStorage
// --------------------------
saveBtn.addEventListener("click", function () {
    const notes = noteBox.value.trim(); // Remove extra spaces

    // Validation to avoid saving empty notes
    if (notes === "") {
        alert("Cannot save empty notes!");
        return;
    }

    // Save notes in localStorage
    localStorage.setItem("userNotes", notes);
    alert("Notes saved successfully!");
});

// --------------------------
// 3. Load notes manually when clicking "Load Notes"
// --------------------------
loadBtn.addEventListener("click", function () {
    const savedNotes = localStorage.getItem("userNotes");

    if (savedNotes) {
        noteBox.value = savedNotes;
        alert("Notes loaded!");
    } else {
        alert("No notes found!");
    }
});

// --------------------------
// 4. Clear notes from localStorage and screen
// --------------------------
clearBtn.addEventListener("click", function () {
    localStorage.removeItem("userNotes"); // Delete from storage
    noteBox.value = "";                  // Clear text area
    alert("Notes cleared!");
});
