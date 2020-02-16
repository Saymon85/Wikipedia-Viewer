
$(function(){

    const input = document.getElementById('inputTxt');
    const first = $('.first');
    $('img').click(function(){
        $(this).parent().css('display', 'none');
        $('.input').removeClass('hide').animate({display: 'block'}, 1200); 
    });
    $('.fas').on('click', function(){
        input.value = " ";
    });

    //AJAX call with jQuery
    
    input.onkeypress = function(e){
        if(e.key === "Enter"){
        const searchValue = input.value;
        const div = document.getElementsByClassName('results-container')[0];
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+searchValue+'&limit='+10;
        first.animate({'margin':'15px'}, 800);
        $('#clickText').hide();    
        div.innerHTML = " ";
        $.ajax({
            headers: {
            Accept : "application/json",
                "Content-Type" : "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin':'*'
            },
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            success: function(data){
                for(let i = 1; i < data[1].length; i++){

                    const a = document.createElement('a');
                    const h2 = document.createElement('h2');
                    const p = document.createElement('p');
                    a.href=data[3][i];
                    a.target = '_blank';
                    a.className = 'link';
                    h2.textContent = data[1][i];
                    p.textContent = data[2][i];
                    a.append(h2);
                    a.append(p);
                    div.append(a);
                } 
            }
        })
      };   
   }
});

