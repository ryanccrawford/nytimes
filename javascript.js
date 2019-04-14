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
                                'q': searchFor
                    }

        var topArticles = $('#topArticles')

        $.ajax({
            url: endpoint,
            method: "GET",
            data: query
        }).then(function (response) {
           

            var retrieved = response.response
        
            var articlesLength = retrieved.docs.length

            //loop through the objects array
            for (let i = 0; i < articlesLength; i++){
                //get articles 
                var articles = retrieved.docs[i],

                    headline = articles.headline.main, // Headline
                    snippit = typeof(articles.snippit) != 'undefined' ? articles.snippit:'', // checks if snippit exist
                    date = articles.pub_date, //TODO: need to fix this here or the front end
                    link = articles.web_url 
                
                var linkA = $('<a>').attr('href', link) //create a link with href set to the article URL
                var headlineH2 = $('<h2>').text(headline).addClass('') // creates h2 element with headline
                var dateP = $('<p>').text(date).addClass('') // Date is in pure database format with time. Needs to parsed and cleaned up
                var snippitP = $('<p>').text(snippit).addClass('') // the breif snippit from 
               
                $(linkA).append(headlineH2)//append h2 to link so that link surrounds the h2 tag
                var articleBlock = $('<div>').addClass('articleBlock') // creates the block to hold the articles

                $(articleBlock).append(linkA).append(dateP).append(snippitP) // append snippit

                topArticles.prepend(articleBlock)// prepend to main display block
            }
            


        })
})




})