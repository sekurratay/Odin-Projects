var defSize=4;

$(document).ready(function(){
    createGrid(defSize);
	$('.square').on({
    mouseenter: function()
    {
        $(this).fadeOut();
        alert("mouseenter");
    },
    mouseleave: function()
    {
        $(this).fadeIn();
        alert("mouseleave");
    },
});
});

$('.resize').click(function(){
        newGrid();
});

function createGrid(size){
    for(i=0;i<size;i++)
    {
        $('table').append('<tr></tr>');
    }
    
    for(x=0;x<size;x++)
    {
        $('tr').append('<td class="square"></td>');
    }
    var width = $('table').width()/size;
    $('.square').css({"width":width,"height":width});
};

function newGrid() {
    $('.square').remove();
    var c = parseInt(prompt("Enter a size (1-100): ",10),10);
    createGrid(c);
}


