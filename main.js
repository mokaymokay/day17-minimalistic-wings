$.ajax({
  url: "https://www.redbullshopus.com/products.json",
  success: function(data) {

    let products = data.products;
    $(products).each(function(i) {
      $('#container').append($('<figure></figure>').addClass('item'));
    })

    let items = $('.item');
    $(items).each(function(i) {
      $(items[i]).append($('<figcaption></figcaption>'));
      $(items[i]).append($('<img>').addClass('product-image'));
    })

    let captions = $('figcaption');
    $(captions).each(function(i){
      $(captions[i]).text(products[i].title)
    })

    let images = $('.product-image');
    $(images).each(function(i) {
      $(images[i]).attr("src", `${products[i].images[0].src}`);
    })

  }
})
