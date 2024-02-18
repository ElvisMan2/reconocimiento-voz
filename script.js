    //obteniendo los elementos HTML
    const btnStart=document.getElementById('btnStart');
    const btnStop=document.getElementById('btnStop');
    const textArea=document.getElementById('textArea');

    const recognition= new webkitSpeechRecognition();
    recognition.continous=true;
    recognition.lang='es-ES';
    recognition.interimResult=true;

    btnStart.addEventListener('click',()=>{
        recognition.start();
    });

    btnStop.addEventListener('click',()=>{
        recognition.abort();
    });

    recognition.onresult = (event) => {
        const texto = event.results [event.results.length - 1][0].transcript;
        textArea.value = texto;
        leerTexto(texto);
    }

    function leerTexto (text) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        speech.lang = 'es-ES'
        window.speechSynthesis.speak(speech);
    }