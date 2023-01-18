//Giá trị cần đoán là ngẫu nhiên 1-20
const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let high_score = 0;

document.querySelector('.check').addEventListener('click',function(){
    var guess = Number(document.querySelector('.guess').value);
    //Người chơi không điền giá trị
    if(!guess){
        document.querySelector('.message').textContent = "⚠️ No Number!"
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = "🎉 Correct Number!"
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(high_score < score){
            high_score = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if(guess !== secretNumber){
            if(score>1){
            //Giá trị cao hơn thấp hơn giá trị phải đoán
            document.querySelector('.message').textContent = guess > secretNumber ? "😟 Too high!" : "😟 Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "😭 You lose the game!"
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
})


//Reset game 
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    const secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.highscore').textContent = 0;
})