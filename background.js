// background.js

chrome.runtime.onInstalled.addListener(function () {
    console.log('Note Taker Extension Installed');
  });
  
  // Example of communication between background script and popup script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'getNote') {
      // In a real-world scenario, you might perform some background action here
      // For now, let's just log a message
      console.log('Background script received request to get note');
      
      // You can send a response back if needed
      sendResponse({ note: 'Note from background script' });
    }
  });
  