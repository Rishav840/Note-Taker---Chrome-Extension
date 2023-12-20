document.addEventListener('DOMContentLoaded', function () {
  var noteInput = document.getElementById('noteInput');
  var deleteButton = document.getElementById('deleteNote');
  var saveTimeout;

  // Load saved note
  chrome.storage.sync.get(['note'], function (result) {
    if (result.note) {
      noteInput.value = result.note;
    }
  });

  // Save note on input change with debounce
  noteInput.addEventListener('input', function () {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(function () {
      var note = noteInput.value;
      chrome.storage.sync.set({ 'note': note });
    }, 500); // Adjust the debounce time as needed
  });

  // Delete note with confirmation
  deleteButton.addEventListener('click', function () {
    // Uncomment the lines below if you want to prompt for confirmation
    // var confirmation = confirm('Are you sure you want to delete the note?');
    // if (confirmation) {
    chrome.storage.sync.remove(['note'], function () {
      noteInput.value = '';
    });
    // }
  });
});
