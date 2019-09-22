$(document).ready(function(){
    console.log("Document loaded successfully");


    function wave(){
        var random_color_1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_3 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_4 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_5 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_6 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_7 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        // var random_color_8 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

        $(".row1").css({"fill" : random_color_1});
        $(".row2").css({"fill" : random_color_1});
        $(".row3").css({"fill" : random_color_1});
        $(".row4").css({"fill" : random_color_1});
        $(".row5").css({"fill" : random_color_1});
        $(".row6").css({"fill" : random_color_1});
        $(".row7").css({"fill" : random_color_1});
        $(".row8").css({"fill" : random_color_1});
    }

    wave();


    function rainbowTrigger(){
        for(var i = 1; i < 9; i++){
            var random_r = parseInt(Math.random() * 255);
            console.log("random red: " + random_r);
            var random_g = parseInt(Math.random() * 255);
            console.log("random green: " + random_g);
            var random_b = parseInt(Math.random() * 255);
            console.log("random blue: " + random_b);
            console.log("--------------------------------------");
            // $(`.row${i}`).css({"fill" : `rgb(${random_r}, ${random_g}, ${random_b}`});
            
            var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            $(`.row${i}`).css({"fill" : random_color});
        }
    }

    // $(".hexagon").hover(function(){
    //     // console.log("Hovering!");
    //     // var random_r = parseInt(Math.random() * 255);
    //     // console.log("random red: " + random_r);
    //     // var random_g = parseInt(Math.random() * 255);
    //     // console.log("random green: " + random_g);
    //     // var random_b = parseInt(Math.random() * 255);
    //     // console.log("random blue: " + random_b);
    //     // console.log("--------------------------------------");
    //     // $(this).css({"fill" : `rgb(${random_r}, ${random_g}, ${random_b}`});

    //     // var colors = ['#ff0000', '#00ff00', '#0000ff'];
    //     // var random_color = colors[Math.floor(Math.random() * colors.length)];
    //     // $(this).css({"fill": random_color});
        
    //     var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    //     $(this).css({"fill": random_color});
    // });

    // rainbowTrigger();


    // var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    // $(".hexagon").css({"stroke" : random_color});




    // loadAtRandom();

    function loadAtRandom(){
        var count = 0; 
        var maxDelay = 2500;
        var minSpeed = 1500;
        var maxSpeed = 2000;
        var fadeTo = 1;
    
        $('.hexagon').each(function(){
            var delay = Math.ceil(Math.random() * maxDelay);
            var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
            count++;
            fadeTo = Math.random(0.5, 1);

            $(this).delay(delay).fadeTo(speed, fadeTo, function(){
                count--;
                if (count == 0){
                    onFinish();
                }
            });
        });
        function onFinish() {
            loadContent();
        }  
      }







    var num_rows = $(window).width() / 175;
    
    var num_hex = $(window).height() / 200;

    var offset = 5;

    //Dynamically set added number depending on screen width
    
    for(var i = 0; i < num_rows/2 + offset; i++){
        if(i <= 0){
            $(".container").append(`<div class="grid-cont grid-container${i}"></div>`);
        } else {
            $(".container").append(`<div class="grid-cont grid-container${i}" style="margin-left: 71px"></div>`);
        }   
        for(var j = 0; j < num_hex + 3; j++){
            $(`.grid-container${i}`).append(`
                <div class="grid-item">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='200' height='200'>
                        <defs>
                            <pattern id="img0" patternUnits="userSpaceOnUse" width="100" height="100">
                            </pattern>
                        </defs>
                        <path d='M64 32 L48 4 L16 4 L0 32 L16 60 L48 60 Z'/>
                    </svg>
                </div>
            `)
        }        
    }
    
    for(var i = 0; i < num_rows/2 + offset; i++){
        if(i <= 0){
            $(".container2").append(`<div class="grid-cont grid-container2${i}"></div>`);
        } else {
            $(".container2").append(`<div class="grid-cont grid-container2${i}" style="margin-left: 71px"></div>`);
        }   
        for(var j = 0; j < num_hex + 3; j++){
            $(`.grid-container2${i}`).append(`
                <div class="grid-item">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='200' height='200'>
                        <defs>
                            <pattern id="img0" patternUnits="userSpaceOnUse" width="100" height="100">
                            </pattern>
                        </defs>
                        <path d='M64 32 L48 4 L16 4 L0 32 L16 60 L48 60 Z'/>
                    </svg>
                </div>
            `)
        }        
    }

    // for(var i = 0; i < num_rows; i++){
    //     for(var j = 0; j < num_hex; j++){
    //         $(".container").append(`<p class="${i}">Row row row row</p>`);
    //     }
    //     $(".container").append(`<p class="${j}">Hex</p>`);
    // }

    console.log($(window).width());

    $("#ajax_about_page").click(function(){
        $.ajax({url: "about.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_projects_page").click(function(){
        $.ajax({url: "projects.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_education_page").click(function(){
        $.ajax({url: "education.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_workhistory_page").click(function(){
        $.ajax({url: "workhistory.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_resume_page").click(function(){
        $.ajax({url: "resume.html", success: function(result){
            $("#main_content").html(result);
        }});
    });
});