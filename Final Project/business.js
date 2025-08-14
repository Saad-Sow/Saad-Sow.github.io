function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  event.target.reset(); // Clear form
  return false;
}
