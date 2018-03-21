$.ajax({
    url: "https://www.redbullshopus.com/products.json",
    success: function(data) {

      let products = data.products;
      $(products).each(function(i) {
        addFigures();
        addInnerElements(i);
        addFigcaptionText(i);
        addImgSrc(i);
        addDescription(i);
      })

      function addFigures() {
        $('#container').append($('<figure></figure>').addClass('item'));
      }

      function addInnerElements(i) {
          let items = $('.item');
          $(items[i]).append($('<figcaption></figcaption><img class="product-image">'));
          $(items[i]).append($('<p class="description"></p>'));
      }

      function addFigcaptionText(i) {
        let captions = $('figcaption');
        $(captions[i]).text(products[i].title);
      }

      function addImgSrc(i) {
        let images = $('.product-image');
        $(images[i]).attr("src", `${products[i].images[0].src}`);
      }

      function addDescription(i) {
        let description = $('.description');
        let paraRegex = '<p>(.*?)</p>';
        let descriptionText = products[i].body_html.match(paraRegex);
        if (descriptionText !== null) { descriptionText = descriptionText[1] };
        $(description[i]).append(descriptionText);
      }
    }
  })

$(document).ready(function() {

  $('#container').on('mouseenter', '.item .product-image', function() {
      if ( $(window).width() > 992 )
      $(this).next('.description').fadeIn(500);
  }).on('mouseleave', '.item .product-image', function() {
      if ( $(window).width() > 992 )
      $(this).next('.description').fadeOut(100);
  });

})
