var dice_1_img = document.querySelector('.dice-1');
var dice_2_img = document.querySelector('.dice-2');

var random_number_1 = Math.floor(Math.random() * 6) + 1;
var random_number_2 = Math.floor(Math.random() * 6) + 1;

dice_1_img.setAttribute("src", "images/dice"+random_number_1+".png");
dice_2_img.setAttribute("src", "images/dice"+random_number_2+".png");

if(random_number_1 > random_number_2){
    document.querySelector('.title').textContent = "Player 1 Wins!";
}

else if(random_number_1 === random_number_2){
    document.querySelector('.title').textContent = "Draw";
}

else{
    document.querySelector('.title').textContent = "Player 2 Wins!";
}