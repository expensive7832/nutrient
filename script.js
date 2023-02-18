$(document).ready(function () {



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

       


        result.hits.forEach((item) => {

            var a = document.createElement("a")
            a.setAttribute("href", item?.recipe?.url)
            a.setAttribute("target", "_blank")
            
            var p = document.createElement("p")
            p.setAttribute("class", "position-absolute top-50 start-50 translate-middle bg-white py-1 px-2")
            p.innerText = item?.recipe?.label

            a.append(p)

            var div1 = document.createElement("div")
            div1.setAttribute("class", "col-md-4 col-12")

            var div2 = document.createElement("div")
            div2.setAttribute("class", "card")

            var div3 = document.createElement("div")
            div3.setAttribute("class", "card-img")

            var img = document.createElement("img")
            img.setAttribute("class", "w-100 img-thumbnail")
            img.setAttribute("src", item?.recipe?.image)

            a.append(img)
            div3.append(a)

            div2.append(div3)

            div1.append(div2)

            


            document.querySelector(".row").append(div1)

        })
    });



    $("#btn").click(function () {
        var search = $("#input").val()
        if (search === "") {
            alert("search field is empty")
        } else {

            
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
                result?.hits?.forEach((item) => {

                    var a = document.createElement("a")
                    a.setAttribute("href", item?.recipe?.url)
                    a.setAttribute("target", "_blank")

                    var p = document.createElement("p")
                    p.setAttribute("class", "position-absolute top-50 start-50 translate-middle bg-white py-1 px-2")
                    p.innerText = item?.recipe?.label
        
                    a.append(p)


                    var div1 = document.createElement("div")
                    div1.setAttribute("class", "col-md-4 col-12")

                    var div2 = document.createElement("div")
                    div2.setAttribute("class", "card")

                    var div3 = document.createElement("div")
                    div3.setAttribute("class", "card-img")

                    var img = document.createElement("img")
                    img.setAttribute("class", "w-100 img-thumbnail")
                    img.setAttribute("src", item?.recipe?.image)

                    a.append(img)

                    div3.append(a)

                    div2.append(div3)

                    div1.append(div2)

                


                    document.querySelector(".row").append(div1)


                })
            });

        }
    })
})