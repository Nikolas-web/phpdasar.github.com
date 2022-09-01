$(document).ready(function() {

   // cara menghilangkan tombol cari
   $('#tombol-cari').hide();

   // event ketika keyword ditulis
   $('#keyword').on('keyup', function() {
      // memunculkan icon loading
      $('.loader').show();
      // ajax menggunakan load

      //$('#container').load('ajax/mahasiswa.php?keyword=' + $('#keyword').val());

      $.get('ajax/mahasiswa.php?keyword=' + $('#keyword').val(), function(data) {
         $('#container').html(data);
         $('.loader').hide();
      });
   });
});

