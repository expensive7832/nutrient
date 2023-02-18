$(document).ready(function(){


   
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://edamam-recipe-search.p.rapidapi.com/search?q=rice",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "1b73e796c3msh8a55e1c908f94b8p10eb8ajsnf5936fc1f32c",
            "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
        }

    }).done(function (result) {
        console.log(result);
    });

    

    $("#btn").click(function(){
        var search = $("#input").val()
        if(search === ""){
            alert("search field is empty")
        }else{

            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": `https://edamam-recipe-search.p.rapidapi.com/search?q=${search}`,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "1b73e796c3msh8a55e1c908f94b8p10eb8ajsnf5936fc1f32c",
                    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
                }
        
            }).done(function (result) {
                console.log(result);
            });
            
        }
    })
})