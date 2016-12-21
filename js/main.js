$(document).ready(function (){
    $('.slider').slider({full_width: true});
    $('.modal-trigger').leanModal();
    $(".button-collapse").sideNav();
    var TechData=Handlebars.templates['TechnicalCommittee'](technicalCommitteeData);
    $('#technical-committee').html(TechData);
    $('.collapsible').collapsible();

});
