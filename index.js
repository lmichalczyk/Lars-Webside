document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('blinkingName');
    
    setInterval(function() {
        name.classList.toggle('blink');
    }, 500);
});
