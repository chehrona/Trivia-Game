$(document).ready(function () {
    let questionsArr = [
        {
            "q": "The concept of gravity was discovered by which famous physicist?",
            "a": ["Albert Einstein", "Marie Curie", "Ernest Rutherford", "Isaac Newton"]
        },
        {"q": "Which is the most abundant element in the universe?", "a": ["Oxygen", "Hydrogen", "Sulfur", "Iron"]},
        {
            "q": "What is a material that will not carry an electrical charge called?",
            "a": ["Conductor", "Inductor", "Insulator", "Resistor"]
        },
        {"q": "What does an atom consist of?",
            "a": ["Electrons, neutrons, alpha-particles", "Electrons, gamma-rays, neutrinos", "Electrons, protons, neutrons", "Electrons, neutrinos, protons"]
        },
        {"q": "What element does not allow radioactive rays to go through?", "a": ["Lead", "Gold", "Zinc", "Cobalt"]},
        {"q": "What organ in humans is responsible for maintaining balance?", "a": ["Legs", "Arms", "Ears", "Eyes"]},
        {"q": "What is the largest human organ?", "a": ["Liver", "Brain", "Stomach", "Skin"]},
        {"q": "What element generates the most amount of energy in a nuclear reactor?", "a": ["Plutonium", "Americium", "Radium", "Uranium"]},
        {"q": "What is the body's energy currency?", "a": ["ATP", "CTP", "TTP", "GTP"]},
        {"q": "How many color receptors are in the human eye?", "a": ["Seven", "Three", "Five", "Ten"]},
        {"q": "Who discovered penicillin?", "a": ["Dimitri Mendeleev", "James Watson & Francis Crick", "Alexander Fleming", "Jennifer Doudna"]},




    ];

    let questionCount = 0;
    let corrects = 0;
    let timeOuts = 0;
    let wrongs = 0;


    let correctAnswers = ["Isaac Newton", "Hydrogen", "Insulator", "Electrons, protons, neutrons", "Lead", "Ears", "Skin", "Uranium", "ATP", "Three", "Alexander Fleming"];
    let imageArr = ["newton.gif", "hydrogen.gif", "insulator.gif", "atom.gif", "lead.gif", "ears.gif", "skin.gif", "uranium.gif", "atp.gif", "eye.gif"];


    let questionsPrint = function () {
        $("#questionText").text(questionsArr[questionCount].q);
        $("#answerBox").append('<p id="firstA" class="answers"></p>')
        $("#firstA").text(questionsArr[questionCount].a[0]);
        $("#answerBox").append('<p id="secondA" class="answers"></p>')
        $("#secondA").text(questionsArr[questionCount].a[1]);
        $("#answerBox").append('<p id="thirdA" class="answers"></p>')
        $("#thirdA").text(questionsArr[questionCount].a[2]);
        $("#answerBox").append('<p id="forthA" class="answers"></p>')
        $("#forthA").text(questionsArr[questionCount].a[3]);
    }

     let callNext = function () {
        questionCount++;
        if (questionCount < questionsArr.length) {
            $("#timer").text("0:10");
            timerStart = 10;
            $("#image").remove();
            questionsPrint();
            answerClicking();
        } else {
            $("#timer").addClass("startAgain");
            $("#timer").text("Start Over");
            $(".answers").remove();
            $("#image").remove();
            $("#questionText").text("All done! Here's how you did");
            $("#answerBox").append('<p id="firstA" class="answers"></p>')
            $("#firstA").text("Unanswered: " + timeOuts);
            $("#answerBox").append('<p id="secondA" class="answers"></p>')
            $("#secondA").text("Correct: " + corrects);
            $("#answerBox").append('<p id="thirdA" class="answers"></p>')
            $("#thirdA").text("Wrong: "  + wrongs);
            $("#timer").on("click", function () {
                $("#timer").text("0:10");
                $("#timer").css({"background-color": "#629819", "color": "black"});
                $(".answers").remove();
                timerStart = 10;
                questionCount = 0;
                corrects = 0;
                wrongs = 0;
                timeOuts = 0;
                questionsPrint();
                answerClicking();
            })
        }
    };

    let timerStart = 10;


    let answerClicking = function () {
        let timerPrint = function () {
            if (timerStart > 0) {
                timerStart--;
                if (timerStart >= 10) {
                    $("#timer").text("0:" + timerStart);
                } else if (timerStart < 10) {
                    $("#timer").text("0:0" + timerStart);
                }
            }
        }

        let timerInterval = setInterval(timerPrint, 1000);

        let timerStop = function () {
            clearInterval(timerInterval);
        }


        $(".answers").on("click", function () {
            timerStop();
            if (($(this).text() === correctAnswers[questionCount]) && timerStart > 0) {
                $("#questionText").text("Correct!");
                $(".answers").remove();
                $("#answerBox").append('<img id="image" src="./assets/images/' + imageArr[questionCount] + '"/>');
                $("#image").css({
                    "height": "300px",
                    "width": "300px",
                    "margin": "10px",
                    "border-radius": "20px",
                    "border": "3px solid #0086a2",
                    "box-shadow": "grey 2px 2px"
                });
                corrects++;
            } else if (($(this).text() !== correctAnswers[questionCount]) && timerStart > 0) {
                $("#questionText").html("Wrong!<br><br>" + "The Correct Answer Was: " + correctAnswers[questionCount]);
                $(".answers").remove();
                $("#answerBox").append('<img id="image" src="./assets/images/' + imageArr[questionCount] + '"/>');
                $("#image").css({
                    "height": "300px",
                    "width": "300px",
                    "margin": "10px",
                    "border-radius": "20px",
                    "border": "3px solid #0086a2",
                    "box-shadow": "grey 2px 2px"
                });
                wrongs++;
            }
            setTimeout(callNext, 3000);
        });

    };

    questionsPrint();
    answerClicking();

    if (timerStart === 0) {
        $("#timer").html("0:00")
        $("#questionText").html("Ran out of time!<br><br>" + "The Correct Answer Was: " + correctAnswers[questionCount]);
        $(".answers").remove();
        $("#answerBox").append('<img id="image" src="./assets/images/' + imageArr[questionCount] + '"/>');
        $("#image").css({
            "height": "300px",
            "width": "300px",
            "margin": "10px",
            "border-radius": "20px",
            "border": "3px solid #0086a2",
            "box-shadow": "grey 2px 2px"
        });
            timeOuts++;
            callNext();
        }


});


