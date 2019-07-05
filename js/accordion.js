function goToTwo() {
    var num2 = '#group-2';

    document.querySelector(num2).scrollIntoView();

    $(num2).trigger('click');
}

function toggleIcon(e) {
    $(e.target)
    .prev('.panel-heading')
    .find(".more-less")
    $(".open").toggle()
    $(".panel-title a").css('font-weight', '500');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);