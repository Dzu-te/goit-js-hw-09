const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
form.elements.email.value = savedState.email || '';
form.elements.message.value = savedState.message || '';

form.addEventListener('input', evt => {
  const currentState = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(currentState));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });

  localStorage.removeItem(localStorageKey);
  form.reset();
});
