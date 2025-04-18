const cannonSound = document.getElementById('cannonSound');
function playCannonSound() {
    cannonSound.currentTime = 0;
    cannonSound.play().catch(error => console.log('Audio play failed:', error));
}
setInterval(playCannonSound, 1500);
playCannonSound();