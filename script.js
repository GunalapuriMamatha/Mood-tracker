// script.js

// Simple mock auth
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // For demo: accept any non-empty
  if(username && password) {
    // redirect to tracker page
    window.location.href = 'tracker.html';
  } else {
    alert('Please enter username and password');
  }
}

// Mood detection / setting (very basic)
function submitMood(event) {
  event.preventDefault();
  const mood = document.getElementById('mood').value;
  const notes = document.getElementById('notes').value;
  
  // Save mood into localStorage (demo)
  const moodRecord = {
    mood: mood,
    notes: notes,
    time: new Date().toLocaleString()
  };
  let history = JSON.parse(localStorage.getItem('moodHistory') || '[]');
  history.push(moodRecord);
  localStorage.setItem('moodHistory', JSON.stringify(history));
  
  // Redirect to booster if mood is sad/disappointed
  if(mood === 'sad' || mood === 'disappointed' || mood === 'angry') {
    window.location.href = 'mood_booster.html';
  } else {
    document.getElementById('trackerFeedback').innerText = 'Great! Hope you continue feeling good 😊';
  }
}

// On booster page: display a random joke + motivational story
function loadBooster() {
  const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
  ];
  const stories = [
    "Once there was a tiny seed that was afraid it would never sprout. But day by day it pushed through the soil, and one morning, it bloomed beautifully.",
    "A man was walking by the seashore, picking up starfish one by one and throwing them into the sea. A boy asked why, when there were so many. He said, “It made a difference to that one.”"
  ];
  
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  const story = stories[Math.floor(Math.random() * stories.length)];
  
  document.getElementById('joke').innerText = joke;
  document.getElementById('story').innerText = story;
}

window.addEventListener('DOMContentLoaded', function(){
  if(document.getElementById('moodBoosterPage')) {
    loadBooster();
  }
});
