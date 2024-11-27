javascript
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');
    const q10 = document.querySelector('input[name="q10"]:checked');

    // Check answers
    let score = 0;

    if (q1 && q1.value === 'C') score++;
    // Add more checks here

    alert(`Sie haben ${score} von 10 Fragen richtig beantwortet!`);
});
