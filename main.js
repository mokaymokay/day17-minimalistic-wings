// AJAX should append all src (images) to div#container, each in a div with class of .item
// as well as append title (product name) underneath the images

$.ajax({
  url: "https://www.redbullshopus.com/products.json",
  success: function(data) {
    let products = data.products;
    $(products).each(function(i) {
      // console.log(products[i]);
      $('#container').append($('<div></div>').addClass('item'));
    })
    let items = $('.item');
    $(items).each(function(i) {
      // console.log(products[i].title);
      $(items[i]).append($('<p></p>')).text(products[i].title);
    })

  }
})
