import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Dee';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
