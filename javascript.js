$(document).ready(function () { 


    
    
    $('#submit').click(function(){
    
        
        var apikey = '&api-key=uobpTwgmKD1c2H2c4iMrUuBJG6zbPDUv';
        var query = $('#articleBox').val().trim();
      
        var endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' +
            query 
            + "&"
            + apikey
        var topArticles = $('#topArticles')
        $.ajax({
            url: endpoint,
            method: "GET"
        }).then(function (response) {
           
            var retrieved = response.response
            console.log(retrieved)
            
            console.log(retrieved.docs)
            var articlesLength = retrieved.docs.length
            for (let i = 0; i < articlesLength; i++){
                var articles = retrieved.docs[i],

                    headline = articles.headline.main,
                    snippit = articles.snippit,
                    date = articles.pub_date,
                    link = articles.web_url
                
                var headlineH1 = $('<h1>').text(headline).addClass('')
                var dateP = $('<p>').text(date).addClass('')
                var snippitP = $('<p>').text(snippit).addClass('')
                var linkA = $('<a>').attr('href', link)
                $(linkA).append(headlineH1)
                var articleBlock = $('<div>').addClass('articleBlock')

                $(articleBlock).append(linkA).append(dateP).append(snippitP)

                topArticles.prepend(articleBlock)
            }
            


        })
})

    
    




})
