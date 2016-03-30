var colorChoice = 'black';
$(document).ready(function(){
    createGrid(4);
	
    //Resize grid functionality
    //TODO: Add validation for ONLY integers, ONLY between 1-100
	$('#resize').click(function(){
			newGrid();
	});
    
    //Clear functionality
    $('#clear').click(function(){
        $('.square').css({'background-color':'gray'});
    });
    
    //Set random color
    $('#random').click(function(){
        colorChoice = ('#' + Math.random().toString(16).slice(2, 8).toUpperCase());
        alert(colorChoice.toString());
    });
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
    var width = ($('table').width()/size);
    $('.square').css({"width":width,"height":width});
	
	$('.square').on({
		mouseenter: function()
		{
			$(this).css({'background-color': colorChoice});
		},
	});
};

function newGrid() {
    $('table').remove();
	$('body').append("<table></table>");
    var c = parseInt(prompt("Enter a size (1-100): ",10),10);
    createGrid(c);
}
