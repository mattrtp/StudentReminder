function onExecuted(result) {
  console.log('We executed in tab');
}

function onError(error) {
  console.log('Error: ${error}');
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
	var executing = chrome.tabs.executeScript(
	  tabId, {
		file: "/reminder.js"
	});
	executing.then(onExecuted, onError);
  }
}

chrome.tabs.onUpdated.addListener(handleUpdated);