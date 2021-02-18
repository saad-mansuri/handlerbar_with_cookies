let taskFirsttask = document.getElementById("txtFirsttask")
let taskSecondtask = document.getElementById("txtSectask")
let Addtask = document.getElementById("btnAddtask")
    // var tasks = []
$(document).ready(function() {

    function init() {
        // debugger;
        cast = getCookie("todoList");
        // debugger;
        if (typeof cast != "" && cast != "") {
            cast = JSON.parse(cast);
        } else {
            cast = [];
        }
    }
    init()

    var cast = {
        "character": [{
            "first_name": "Saad",
            "second_name": "Mansuri"
        }]
    }
    console.log(cast)

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    // tasks = []
    Addtask.addEventListener("click", function() {
        var taskDict = {}
            // var index = tasks.length
            // taskDict[index] = tasks.length
        taskDict["first_name"] = taskFirsttask.value
        taskDict["second_name"] = taskSecondtask.value
        console.log(taskDict)
            // tasks.push(taskDict)
        cast.character.push(taskDict)
        setCookie('todoList', cast, 1);


        var charTemp = $("#character-template").html()
        var compiledCharTemp = Handlebars.compile(charTemp)
        $(".character-list-container").html(compiledCharTemp(cast))
    })

    // var cast = {
    //     "character": [{
    //         "first_name": "Rollins",
    //         "second_name": "Roman",
    //     }, {
    //         "first_name": "rock",
    //         "second_name": "Salman",
    //     }, {
    //         "first_name": "Sajjuda",
    //         "second_name": "luhar",
    //     }]
    // }
    var charTemp = $("#character-template").html()
    var compiledCharTemp = Handlebars.compile(charTemp)
    $(".character-list-container").html(compiledCharTemp(cast))

})

// function showTask() {
//     showTsk.innerHTML = "";
//     let id = 1;
//     myTask.forEach(function(value) {
//         console.log(value)
//         showTsk.innerHTML += id + " " + value['task'] + "<br>"
//         id++;
//     });
// }