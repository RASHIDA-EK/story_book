var tiny=document.createElement('script');
tiny.type='text/javascript';
tiny.src='https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js'

document.head.appendChild(tiny);

tiny.onload=function() {
    tinymce.init({
        selector: '#id_des',
        width: 600,
        height: 300,
        plugins: [
          'advlist autolink link image lists charmap print preview hr anchor pagebreak',
          'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
          'table emoticons template paste help'
        ],
        toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
          'bullist numlist outdent indent | link image | print preview media fullpage | ' +
          'forecolor backcolor emoticons | help',
        menu: {
          favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
        },
        menubar: 'favs file edit view insert format tools table help',
        content_css: 'css/content.css'
      });
}