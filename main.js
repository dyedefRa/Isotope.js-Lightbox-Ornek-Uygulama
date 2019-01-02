 //Burası nesnelerin içinde bulunudugu Selecktoru secmelıyız..
 var $grid=$('#nav-content').isotope({

  });
// BURASINA BUTONLARIN ICINDE BULUNDUGU DIV SELECTOR ETMEYLIZ => nav-filter
  $('#nav-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

//https://isotope.metafizzy.co/filtering.html

//UI JS DYE GIT

  // EK OLARAK FILTRELRI KURCAZ

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});