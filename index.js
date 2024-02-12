let btnWidth = 50;
let btnHeight = 45;
let fontSize = 1;
let count = 0;
let words = [
    'Sure na jud',
    'Yawaa ba',
    'Go na',
    'Bagon ulo ron',
    'Geh atayng buang choosyha'
];

$('#btn-yes').css('width', btnWidth);
$('#btn-yes').css('height', btnHeight);
$('#btn-yes').css('font-size', fontSize+'rem');

$('#btn-no').on('mouseover',function (e) { 
    e.preventDefault();
    $('#btn-yes').css('width', btnWidth + 20);
    $('#btn-yes').css('height', btnHeight + 20);
    $('#btn-yes').css('font-size', 0.5+fontSize+'rem');
    $('#btn-yes').css('transition','500ms');
    btnWidth = btnWidth + 20
    btnHeight = btnHeight + 20
    fontSize = fontSize + 0.5



    $(this).css('top', random(700)+'px');
    $(this).css('left', random(1000)+'px');
    

    $(this).text(words[random(words.length)]);
    
    count += 1

    if(count >= words.length){
        count = 0
    }
});

function random(num){
    return Math.floor(Math.random() * num);
}


$('#btn-yes').click(function (e) { 
    e.preventDefault();

    console.log('clicked')
});
