$(document).ready(function () {
    let questionsArr = [
        {"q": "The concept of gravity was discovered by which famous physicist?", "a": ["Albert Einstein", "Marie Curie", "Ernest Rutherford", "Isaac Newton"]},
        {"q": "Which is the most abundant element in the universe?", "a": ["Oxygen", "Hydrogen", "Sulfur", "Iron"]},
        {"q": "What is a material that will not carry an electrical charge called?", "a": ["Conductor", "Transistor", "Insulator", "Resistor"]},
        {"q": "What does an atom consist of?", "a": ["Electrons, neutrons, alpha-particles", "Electrons, gamma-rays, neutrinos", "Electrons, protons, neutrons", "Electrons, neutrinos, protons"]},
        {"q": "What element does not allow radioactive rays through?", "a": ["Lead", "Gold", "Zinc", "Cobalt"]},
        {"q": "What organ in humans is responsible for maintaining balance?", "a": ["Legs", "Arms", "Ears", "Eyes"]},
    ];

    let questionCount = 0;

    let correctAnswers = ["Isaac Newton", "Hydrogen", "Insulator", "Electrons, protons, neutrons", "Lead", "Ears"];

    $("#questionText").text(questionsArr[questionCount].q);
        $("#firstA").text(questionsArr[questionCount].a[0]);
        $("#secondA").text(questionsArr[questionCount].a[1]);
        $("#thirdA").text(questionsArr[questionCount].a[2]);
        $("#forthA").text(questionsArr[questionCount].a[3]);

     $(".answers").on("click", function () {
        if ($(this).text() === correctAnswers[questionCount]) {
            $("#questionText").text("Correct!");
            $(".answers").remove();
            $("#answerBox").append('<img id="newton" src="../images/newton.gif"/>');
            questionCount++;
        } else if ($(this).text() !== correctAnswers[questionCount]) {
            $("#questionText").text("Wrong!");
            $(".answers").remove();
            $("#answerBox").append('<img id="newton" src="../images/newton.gif"/>');
        }
        })

});
