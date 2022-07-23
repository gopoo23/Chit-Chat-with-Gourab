var audio = new Audio('assets\\assets_sentmessage.mp3');
var contactString = "<div class='social'> <a href='mailto:gouravdasrrr123@gmail.com'><div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div></a> <a target='_blank' href='https://github.com/gopoo23'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://leetcode.com/gourabdas/'> <div class='socialItem'><img class='socialItemI' src='images/leetcode.svg' alt=''></div> </a> <a target='_blank' href='https://www.codingninjas.com/codestudio/profile/dc6f428d-2b2b-4a4e-ab69-bf199ca095a0'> <div class='socialItem'><img class='socialItemI' src='images/coding ninja.svg' alt=''></div> </a> <a href='https://www.linkedin.com/in/gourab-das23/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Gourab's Resume.pdf</label></div><a href='assets/Gourab&#39;s Resume.pdf' download='Gourab's Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5190.248763705491!2d86.21896854200845!3d23.094895790122926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5d8f61b58cc7d%3A0x9daa5f2378c4f101!2sBalarampur%2C%20West%20Bengal%20723143!5e0!3m2!1sen!2sin!4v1658260159145!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address> 'Balarampur'<br>Purulia, West Bengal, INDIA 723143</address>";



var repliesfForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesfForLove = ["Sorry i am engaged with someone, but Yeah! love you as a friend |", "You are day-dreaming again!", "I love You........Tube! LOL!", "Are you sure you aren't sick or something?", "I love you too!", "You are not my type!", "❤️"]
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'start' to know more about usage.", "I didn't get it.", "Please can you repeat it?<br>"];
var repliesForVoiceAssistants = ["Yes! I know her.", "Of-cource! Who don't know her?", "I'm teching lessions from her!", "She is my BFF!", "My childhood friend!"];



function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Gourab Das </a>.</span><br><br>Bron and raised in Purulia West Bengal Currently i am graduate in Mechanical Engineering from Maulana Abul Kalam Azad University of Technology,West Bengal with an aggregate of 92% 👨🏻‍💻📚</span><br><br> I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'start'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "start":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I can comfortably write code in following languages :<br><span class='bold'>C++<br>Java<br>CSS<br>HTML</span><br><br>I have experience in UI/UX design following software<br><span class='bold'>Adobe Photoshop<br>Adobe Illustrator<br>Canva</span><br><br>I use <span class='bold'>Window 10</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Window 10<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am graduate B.Tech degree in Mechanical engineering from Maulana Abul Kalam Azad University of Technology, Kolkata West Bengal<br>Passing Year: 2022<br>Result: 92%<br><br>I did my Diploma in Mechanical Engineering from NS Polytechnic College in Burdwan<br>Passing Year: 2019<br>Result: 70%<br><br>I have completed my Secondary school from state government<br>Passing Year: 2016<br>Result: 69%");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS, JavaScript and Cloud APIs from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://www.linkedin.com/in/gourab-das23/'><span class='bold'>Gourab Das</a> ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("<span class='bold'><a class='alink'>Sorting Algorithm Visualizer</a></span><br><br> Is a web application created with the help of HTML, CSS, JavaScript.This web app is used to visualize different sorting algorithms like bubble sort, selection sort, quick sort etc.<div class='social'><a target='_blank' href='https://gopoo23.github.io/sorting-visualizer/'><div class='socialItem'><img class='socialItemI' src='images/github2.svg' alt=''></div> </a></div> You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/gopoo23'><div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);q``
            break;
            default:
                ifElseThinkAndExecute(inputText.toLowerCase().trim());
                break;
    }
}



function ifElseThinkAndExecute(textString) {
    if (textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesfForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going" || textString.includes("how it's going") || textString.includes("what are you doing")))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesfForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri" || textString.includes("alexa") || textString.includes("cortana")))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }
}



function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}



function playSound() {
    audio.play();
}
