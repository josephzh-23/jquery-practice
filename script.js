$(document).ready(function(){



    // AddClass()
    // 1. Here we change the text color using addClass ()
    // then we add the images in a <div></div>

    var button = $('.pdf_button');
    var placeholder = document.querySelector('.placeholder');

    var src = 'image-1.jpg'
    var markup = `<img src=${src} style="height:100px; width:100px;"></img>`
    
    button.on('click', function(){
        $('a[href$=".pdf"]').toggleClass('pdflink');

        
       placeholder.insertAdjacentHTML('beforeend', markup)
    })




// Here we find the text with id "joseph" using filter 
// make background red 

//note we can apply more than 1 styling 
    $('.add-color').on('click', function(){
        $('div').filter (function (index) {
           return $(this).attr('id') === "joseph"; 
        })
        .css ('background-color',  'red')
        .css('margin-left', '30px');
    })




// Task 3
// Using the change() on the input fname 

    var fname = $('input').filter('#fname').css('color','red');

    fname.change(function(){

        alert('the input name has changed')
    })



    const box = $('#box')
    const myBtn =$('#myBtn')

    box.click(function(){
        $(this).css('background-color', 'red')
    })

    myBtn.click(function(e){
        console.log("the button is clicked")
        e.stopPropagation();
    })
    
})


// Task 4: stopPropagation