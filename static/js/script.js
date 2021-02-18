let taskFirstname = document.getElementById("txtFirsttask")
let taskSecondname = document.getElementById("txtSectask")
let Addtask = document.getElementById("btnAddtask")
    // var tasks = []
$(document).ready(function() {
    var cast = {
        "character": []
    }


    function init() {
        // debugger;
        cast = getCookie('todoList');
        // debugger;
        if (typeof cast != "" && cast != "") {
            cast = JSON.parse(cast);
        } else {
            cast = [];
        }
    }
    init()

    // var cast = {
    //     "character": [{
    //         "first_name": "Saad",
    //         "second_name": "Mansuri"
    //     }]
    // }

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
        taskDict["first_name"] = taskFirstname.value
        taskDict["second_name"] = taskSecondname.value
        console.log(taskDict)
            // tasks.push(taskDict)
        cast.character.push(taskDict)
        setCookie('todoList', cast, 1)
            // taskFirsttask.value = ""
            // taskSecondtask.value = ""
        console.log(cast)


        var charTemp = $("#character-template").html()
        var compiledCharTemp = Handlebars.compile(charTemp)
        $(".character-list-container").html(compiledCharTemp(cast))
    })

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