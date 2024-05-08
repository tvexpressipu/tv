   $(document).ready(function(){
        $('.channel-link').on('click', function(event){
            event.preventDefault();
            var link = $(this).data('link');
            $('#playerContainer iframe').attr('src', link);
        });
    });