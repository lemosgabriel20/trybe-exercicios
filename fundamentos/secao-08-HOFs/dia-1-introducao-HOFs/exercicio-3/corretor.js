const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (right, student, compareAnswers) => {
    const points = compareAnswers(right, student);
    return points;
};

console.log(checkAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, (right, student) => {
    let points = 0;
    for (let i = 0; i < right.length; i += 1) {
        if (student[i] === right[i]) {
            points += 1;
        } else if (student[i] === 'N.A') {
            points += 0;
        } else {
            points -= 0.5;
        }

    }
    return points;
}));