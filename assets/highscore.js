function printHighscores() {
    // get scores from localstorage or empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores 
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // list for highscores
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  printHighscores();