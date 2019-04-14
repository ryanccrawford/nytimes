$(document).ready(function () { 


    var endpoint = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    
    $('#clear').click(function () {
        $(input).val('')
    })
    $('#submit').click(function(event){
        event.preventDefault()
        
        var searchFor = $('#articleBox').val().trim()
      
        //TODO: Grab other search filters to the query, like by date or author
        var query = {
                          'api-key': 'uobpTwgmKD1c2H2c4iMrUuBJG6zbPDUv',
                                'a': searchFor
                    }

        var topArticles = $('#topArticles')
        
        $.ajax({
            url: endpoint,
            method: "GET",
            data: data
        }).then(function (response) {
           

            var retrieved = response.response
        
            var articlesLength = retrieved.docs.length

            //loop through the objects array
            for (let i = 0; i < articlesLength; i++){
                var articles = retrieved.docs[i],

                    headline = articles.headline.main,
                    snippit = articles.snippit ? articles.snippit:'', // checks if snippit exist
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