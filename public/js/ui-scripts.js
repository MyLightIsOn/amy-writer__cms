$(document).ready(function(){

    openSamplesMenu();
    openInternalLinks();
    closeInternalLinks();
    closeList();
});

var myPos;

function setScrollPosition(position){
    var windowScrollPosition = position;
    return myPos = windowScrollPosition
}


function openSamplesMenu(){
    $('.samples_content__list-item').click(function(){
        $('.sample_list').removeClass('active');
        $('.samples_content__list-item').removeClass('active');
        $('.sample_list').css('height', 'auto');
        $(this).addClass('active');
        $(this).next().addClass('active');
    })
}

function openInternalLinks(){
    $('.internal a').click(function(){

        var links = $(this).parents('.active').find('li'),
            sampleContent = $('.samples_content__sample'),
            scrollPosition = $(this).offset(),
            linksId = {};


        for(var i = 0; links.length > i; ++i){
            $(links[i]).attr('id', i)
        }

        linksId = $(this).parent().attr('id');
        $(sampleContent[linksId]).addClass('active');
        $(sampleContent[linksId]).css({top: scrollPosition.top + 40});

        $('.online-links__mobile').addClass('active');
        setScrollPosition(scrollPosition.top);
        activateCloser();
        return false;
    })
}

function closeInternalLinks(){
    $('.sample_content__sample_close').click(function(){
        $('.samples_content__sample').removeClass('active');
        $('.online-links__mobile').removeClass('active');

        $('html, body').animate({
            scrollTop: myPos
        });
        deactivateCloser();
    })
}

function closeList(){
    $('.desktop-close-list').click(function(){
        $('.sample_list').animate({
            height: 0
        });
        $(this).parent().removeClass('active');
    });
}

function activateCloser(){
    $('.sample_content__sample_close').addClass('active');
}

function deactivateCloser(){
    $('.sample_content__sample_close').removeClass('active');
}