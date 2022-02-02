Webcam.set({
    width:350,
    hieght:300,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("cameras");
    Webcam.attach('#camera');
    
    function take_snapshot() 
    {
         Webcam.snap(function(data_uri)
          {
               document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
            }); 
        } 
        console.log('ml5 version:', ml5.version);
        classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);
    
        function modelLoaded(){
            console.log('Model Loaded');
        }
        function check(){
            img = docuumen.getElementById('captured_image');
            classifier.classify(img, gotResult);
                if (error){
                    console.error(error);
                  
                }
                else{
                    console.log(results);
                    document.getElementById("result_object_name").innerHTML = result[0].label;
                    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
                }
            }
        