var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

// var Textbox = $('#textbox');
var instructions = $('instructions');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {

  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;
 
    Content += transcript;
    // Textbox.val("Content");
    console.log(Content)
    if (Content !== '') {

      if (sessionStorage.getItem('sesi') == 1) {
        document.getElementById('textquest').innerHTML =""
        document.getElementById('textquest').innerHTML ="Hello "+Content+", Choose The Options Bellow: <br>- See The Resume <br> - Email to Muhammad Husen"
        
        sessionStorage.setItem('sesi',2)
        // setInterval(function (){
        //   window.location.href ="https://mhusendev.github.io"
        // },5000)

      } if(sessionStorage.getItem('sesi') == 2) {

        if (Content.includes('resume')) {
          document.getElementById('textquest').innerHTML =""
        document.getElementById('textquest').innerHTML ="Ok let we go..."
            setInterval(function (){
          window.location.href ="https://mhusendev.github.io/profile.html"
        },5000)

        }else if (Content.includes('email')) {

          window.open('mailto:mhusendev@gmail.com');
        }

      }
    }
  
};

recognition.onstart = function() { 
  instructions.text('Voice recognition is ON.');
}

recognition.onspeechend = function() {
  instructions.text('No activity.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('Try again.');  
  }
}


$(document).ready(function(){
    if (Content.length) {
    Content += ' ';
  }
  recognition.start();
  document.getElementById('textquest').innerHTML ="Tell Me Your Name"
  
  sessionStorage.setItem('sesi',1)

 });
// Textbox.on('input', function() {
//   Content = $(this).val();
// })