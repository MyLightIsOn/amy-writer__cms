$(document).ready(function(){
    openSamplesMenu();
    internalLinks();
});

function openSamplesMenu(){
    $('.samples_content__list-item').click(function(){
        $('.sample_list').removeClass('active');
        $(this).next().addClass('active');
    })
}

function internalLinks(){
    $('.internal a').click(function(){

        var links = $(this).parents('.active').find('li'),
            sampleContent = $('.samples_content__sample'),
            linksId = {};

        for(var i = 0; links.length > i; ++i){
            $(links[i]).attr('id', i)
        }

        linksId = $(this).parent().attr('id');
        $(sampleContent[linksId]).addClass('active');
        $('.online-links__mobile').addClass('active');
        return false;
    })
}