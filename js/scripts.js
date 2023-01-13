/*
-Form gathers input from the user.
-Branching is used to determine the result.
-Web API object properties or methods (not including window methods for alerting, prompting, or confirming) are used to display the result to the user.
-Event handler properties or event listeners are used to handle events.
-When the user submits the form again (for a second or third time) previous results are hidden, cleared, or replaced.
*/

const handleSuggestor(e){
  e.preventDefault();

  const question1 = document.getElementById("question-1").innerHTML

}

window.addEventListener("load", () => {
  const form = document.getElementById("form-id");
  form.addEventListener("submit", handleSuggestor);
});