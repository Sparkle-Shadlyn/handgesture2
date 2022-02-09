Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
    });
    camera = document.getElementById("camera");
    function take_snapshot()
    {
        Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"';
        });
    }
    console.log('ml5 version:', ml5.version);
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KrBPtxbEj/model.json', modelReady);
    function modelLoaded(){
        console.log('Model Loaded!');
    }
    function speak(){
        var synth = window.SpeechSynthesis;
        speak_data_1 = "The first prediction"+ prediction_1;
        speak_data_2 = "And the second prediction"+prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_1);
synth.speak(UtterThis);
    }