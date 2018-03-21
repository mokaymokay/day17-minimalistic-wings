$.ajax({
  url: "https://www.redbullshopus.com/products.json",
  success: function(data) {

    let products = data.products;
    $(products).each(function(i) {
      $('#container').append($('<figure></figure>').addClass('item'));
    })

    let items = $('.item');
    $(products).each(function(i) {
      $(items[i]).append($('<figcaption></figcaption>'));
      $(items[i]).append($('<img>').addClass('product-image'));
      $(items[i]).append($('<p class="description"></p>'));
    })

    let captions = $('figcaption');
    $(products).each(function(i){
      $(captions[i]).text(products[i].title);
    })

    let images = $('.product-image');
    $(products).each(function(i) {
      $(images[i]).attr("src", `${products[i].images[0].src}`);
    })

    let description = $('.description');
    let paraRegex = '<p>(.*?)</p>';
    $(products).each(function(i) {
      let descriptionText = products[i].body_html.match(paraRegex);
      if (descriptionText !== null) { descriptionText = descriptionText[1] };
      $(description[i]).append(descriptionText);
    })
  }
})
