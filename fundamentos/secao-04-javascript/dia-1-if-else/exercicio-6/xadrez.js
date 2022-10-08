let piece = "QuEeN";
piece = piece.toLowerCase();

let move = '';

switch (piece) {
    case 'king': {
        move = 'move from it square to a neighboring square';
    } break;

    case 'queen': {
        move = 'move in its line or row or diagonally';
    } break;

    case 'rook': {
        move = 'move in its line or row';
    } break;

    case 'bishop': {
        move = 'moves diagonally';
    } break;

    case 'kinght': {
        move = 'jumps in making the shortest move that is not a straight one';
    } break;

    case 'pawn': {
        move = 'moves one square straight ahead';
    } break;

    default: {
        console.log('INVALID PIECE!');
    } break;
}

console.log(move);