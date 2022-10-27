//Write a Javascript that adds, remove and clear LI elements from a list when the user clicks

const $ = window.$;

$(document).ready(function () {
  $('div#add_item').click(function () {
    $('ul.my_list').append('<li>Item</li>');
  });
  $('div#remove_item').click(function () {
    $('ul.my_list').children().last().remove();
  });
  $('div#clear_list').click(function () {
    $('ul.my_list').empty();
  });
});
