let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

// Seleciona a barra de progresso
song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Faz a troca de ícone e classe de Play/Pause
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

// Faz o marcador na barra de progresso se mover a cada meio segundo, enquanto a música toca.
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    },500);
}

// Permite avançar ou voltar na música pela barra de progresso.
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}