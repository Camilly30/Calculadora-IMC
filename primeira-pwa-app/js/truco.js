
window.onload = () => {
    "use strict";
    if("ServiceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

const teamAName = document.getElementById('teamA');
const teamBName = document.getElementById('teamB');
const teamAScore = document.getElementById('teamAScore');
const teamBScore = document.getElementById('teamBScore');
const resetbotao = document.getElementById('reset');

const onePForA = document.getElementById('oneForA');
const threePForA = document.getElementById('threeForA');
const sixPForA = document.getElementById('sixForA');
const twelvePForA = document.getElementById('twelveForA');

const onePForB = document.getElementById('oneForB');
const threePForB = document.getElementById('threeForB');
const sixPForB = document.getElementById('sixForB');
const twelvePForB = document.getElementById('twelveForB');

let scoreTeamA = 0;
let scoreTeamB = 0;

resetbotao.addEventListener('click', resetScore);

onePForA.addEventListener('click', () => updateScoreA(1));
threePForA.addEventListener('click', () => updateScoreA(3));
sixPForA.addEventListener('click', () => updateScoreA(6));
twelvePForA.addEventListener('click', () => updateScoreA(12));

onePForB.addEventListener('click', () => updateScoreB(1));
threePForB.addEventListener('click', () => updateScoreB(3));
sixPForB.addEventListener('click', () => updateScoreB(6));
twelvePForB.addEventListener('click', () => updateScoreB(12));


function updateScoreA(points) {
    scoreTeamA += points;
    teamAScore.textContent = scoreTeamA;
    
    if (scoreTeamA >= 12) {
        alert(`${teamAName.value} ganhou o jogo!`);
        resetScore();
        return;
    }
    
}

function updateScoreB(points) {
    scoreTeamB += points;
    teamBScore.textContent = scoreTeamB;
    
    if (scoreTeamB >= 12) {
        alert(`${teamBName.value} ganhou o jogo!`);
        resetScore();
        return;
    }
}

function resetScore() {
    scoreTeamA = 0;
    scoreTeamB = 0;
    teamAScore.textContent = scoreTeamA;
    teamBScore.textContent = scoreTeamB;
}
