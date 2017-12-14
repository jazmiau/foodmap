$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});


$(document).ready(function() {
    $('select').material_select();
  });

var cont = $('#container');

    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "ensaladas") {
      cont.html('<img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal1" src="assets/img/ensaladas.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal2" src="assets/img/ensaladas2.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal3" src="assets/img/ensaladas3.jpg"/>');
      }
      if( selection === "pizzas") {
      cont.html('<img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal4" src="assets/img/pizza.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal5" src="assets/img/pizza2.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal6" src="assets/img/pizza3.jpg"/>');
      }
      if( selection === "sushi") {
      cont.html('<img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal7" src="assets/img/sushi.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal8" src="assets/img/sushi2.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal9" src="assets/img/sushi3.jpg"/>');
      }
      if( selection === "postres") {
      cont.html('<img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal10" src="assets/img/postre.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal11" src="assets/img/postre2.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal12" src="assets/img/postre3.jpg"/>');
      }
      if( selection === "pastas") {
      cont.html('<img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal13" src="assets/img/pasta.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal14" src="assets/img/pasta2.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal15" src="assets/img/pasta3.jpg"/>');
      }
      if( selection === "vegetariana") {
      cont.html('<img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal16" src="assets/img/vegetariana.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal17" src="assets/img/vegetariana2.jpg"/><img class="responsive-img waves-effect waves-light  modal-trigger" href="#modal18" src="assets/img/vegetariana3.jpg"/>');
      }
});

$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});

$('#container').hover(function(){
        $('img').css('opacity','0.5')
    });

   $('#container').mouseout(function(){
        $('img').css('opacity', 'initial');
    });
