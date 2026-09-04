const form = document.querySelector('#device-form');
const message = document.querySelector('#form-message');
const processOptions = document.querySelectorAll('input[name="followedProcess"]');
const whyNotField = document.querySelector('#why-not-field');
const whyNotInput = document.querySelector('#why-not');
const issueOptions = document.querySelectorAll('input[name="encounteredIssues"]');
const issuesDescriptionField = document.querySelector('#issues-description-field');
const issuesDescriptionInput = document.querySelector('#issues-description');
const clearBundleButton = document.querySelector('#clear-bundle');

processOptions.forEach((option) => {
  option.addEventListener('change', () => {
    const processWasNotFollowed = option.value === 'no' && option.checked;
    whyNotField.hidden = !processWasNotFollowed;
    whyNotInput.required = processWasNotFollowed;
    if (!processWasNotFollowed) {
      whyNotInput.value = '';
    }
  });
});

issueOptions.forEach((option) => {
  option.addEventListener('change', () => {
    const issuesWereEncountered = option.value === 'yes' && option.checked;
    issuesDescriptionField.hidden = !issuesWereEncountered;
    issuesDescriptionInput.required = issuesWereEncountered;
    if (!issuesWereEncountered) {
      issuesDescriptionInput.value = '';
    }
  });
});

clearBundleButton.addEventListener('click', () => {
  document.querySelectorAll('input[name="bundlePurchased"]').forEach((option) => {
    option.checked = false;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const serialNumber = document.querySelector('#serial-number').value.trim();
  message.textContent = `Entry for ${serialNumber} is ready to save.`;
});

form.addEventListener('reset', () => {
  message.textContent = '';
  whyNotField.hidden = true;
  whyNotInput.required = false;
  issuesDescriptionField.hidden = true;
  issuesDescriptionInput.required = false;
});
