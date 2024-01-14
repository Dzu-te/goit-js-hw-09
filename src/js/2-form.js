const DEFAULT_STATE = {
  email: '',
  message: '',
};
const FORM_FIELDS = Object.keys(DEFAULT_STATE);
const STORAGE_KEY = 'feedback-form-state';

const getInitialState = () => {
  try {
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      ...DEFAULT_STATE,
      ...savedState,
    };
  } catch (e) {
    return DEFAULT_STATE;
  }
};

const state = getInitialState();

const form = document.querySelector('.feedback-form');
populateText();
form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', handleFormChange);

function handleFormSubmit(event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (!email || !message)
    return alert('Please fill in both email and message fields.');
  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function handleFormChange(event) {
  const { name } = event.target;
  if (FORM_FIELDS.includes(name)) state[name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function populateText() {
  form.querySelector('input').value = state.email;
  form.querySelector('textarea').value = state.message;
}
