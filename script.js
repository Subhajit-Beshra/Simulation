const messages = [
"Eto din tui jante cheyechilis j ami tor dike keno takai?\n\n",
"Asol e ajkal I feel something weird... amar tor proti attachment bereche.\n\n",
"Ami bolte chaini karon amar nijer kache eta faltu mone hoyechilo.\n\n",
"But jedin tor sathe kotha bola bondho korlam... tokhon bujhlam.\n\n",
"Ami onek lonely feel kortesi.\n\n",
"Kemon ekta ojana kosto amake kheye felche.\n\n",
"Tui thakle haste pari. Valo lage. Oto kosto hoy na.\n\n",
"I don't know why... but I feel happy around you."
];

let msgIndex = 0;
let charIndex = 0;
let currentText = '';

function startExperience(){
    document.getElementById('bgMusic').play();
    showScreen(2);
    typeWriter();
}

function typeWriter(){
    if(msgIndex < messages.length){
        if(charIndex < messages[msgIndex].length){
            currentText += messages[msgIndex].charAt(charIndex);
            document.getElementById('textArea').innerText = currentText;
            charIndex++;
            setTimeout(typeWriter, 40);
        } else {
            msgIndex++;
            charIndex = 0;
            setTimeout(typeWriter, 1000);
        }
    } else {
        document.getElementById('cursor').style.display='none';
        document.getElementById('nextBtn').style.display='inline-block';
    }
}

function showScreen(n){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen'+n).classList.add('active');
}

function sendWhatsApp(follow){
    let msg = document.getElementById('msgBox').value;
    let base = follow ? "I choose to follow" : "I choose to unfollow";
    let finalMsg = base + " | Message: " + msg;

    let url = "https://wa.me/916297432203?text=" + encodeURIComponent(finalMsg);
    window.open(url,'_blank');
}