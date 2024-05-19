logical_box = Array(9).fill(null)
boxes = document.querySelectorAll('div');
console.log(boxes)

turn = true

function check_winner(){
    if (
        (logical_box[0] != null && logical_box[0] == logical_box[1] && logical_box[1] == logical_box[2]) ||
        (logical_box[3] != null && logical_box[3] == logical_box[4] && logical_box[4] == logical_box[5]) ||
        (logical_box[6] != null && logical_box[6] == logical_box[7] && logical_box[7] == logical_box[8]) ||
        (logical_box[0] != null && logical_box[0] == logical_box[4] && logical_box[4] == logical_box[8]) ||
        (logical_box[2] != null && logical_box[2] == logical_box[4] && logical_box[4] == logical_box[6]) ||
        (logical_box[0] != null && logical_box[0] == logical_box[3] && logical_box[3] == logical_box[6]) ||
        (logical_box[1] != null && logical_box[1] == logical_box[4] && logical_box[4] == logical_box[7]) ||
        (logical_box[2] != null && logical_box[2] == logical_box[5] && logical_box[5] == logical_box[8])
    ){
        current_player = turn ? "X" : "O"
        console.log(current_player);
        ele = document.getElementsByClassName("show_winner")[0]
        ele.innerHTML = `${current_player} won!`
        console.log(ele);
        ele.style.display = "flex"
    }
}

boxes.forEach(box => {
    box.addEventListener('click', () => {
        current_player = turn ? "X" : "O"
        logical_box[box.id] = current_player
        box.innerHTML = current_player
        check_winner()
        turn = !turn
    });
  });