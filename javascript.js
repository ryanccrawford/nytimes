$(document).ready(function () { 


    
    
    $('#submit').click(function(){
    
        
        var apikey = '&api-key=uobpTwgmKD1c2H2c4iMrUuBJG6zbPDUv';
        var query = 'SpaceX' //$('#articleBox').val().trim();
       // var filter = //$('#filter').val()
        var endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
            query //+
           // '&fq='
           // + filter
            + "&"
            + apikey

        $.ajax({
            url: endpoint,
            method: "GET"
        }).then(function (response) {
            
            var retrieved = response.response



        })
})

    




})
