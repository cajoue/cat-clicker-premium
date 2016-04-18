'use strict';

// need some clarity! try creating a Cat class.



// helper functions to display html

var catUnit = '<div class="cat-unit"><figure id="%data%"></figure></div>';
var catName = '<figcaption><h3>%data%</h3></figcaption>';
var catImage = '<picture><img src="%data%" alt="picture of kitten"></picture>';
var catSource = '<figcaption>Kitten thanks to <a href="%data%</a></figcaption>';
var catListItem = '<li class="cat-list-item"><a href="#">%data%</a></li>';


// cat JSON

var cats = {
    cat: [
        {
            id: 'cat01',
            name: 'Katie',
            image: 'http://placekitten.com/300/200',
            sourceURL: 'http://placekitten.com',
            source: 'placekitten.com',
            count: 0
        },
        {
            id: 'cat02',
            name: 'Charlotte',
            image: 'http://placekitten.com/g/300/200',
            sourceURL: 'http://placekitten.com',
            source: 'placekitten.com',
            count: 0
        },
        {
            id: 'cat03',
            name: 'Scott',
            image: 'http://loremflickr.com/300/200/kitten?random=1',
            sourceURL: 'http://loremflickr.com',
            source: 'loremflickr.com',
            count: 0
        },
        {
            id: 'cat04',
            name: 'Adam',
            image: 'http://loremflickr.com/300/200/kitten?random=2',
            sourceURL: 'http://loremflickr.com',
            source: 'loremflickr.com',
            count: 0
        },
        {
            id: 'cat05',
            name: 'Ali',
            image: 'http://loremflickr.com/300/200/kitten?random=3',
            sourceURL: 'http://loremflickr.com',
            source: 'loremflickr.com',
            count: 0
        },
        {
            id: 'cat06',
            name: 'Sean',
            image: 'http://loremflickr.com/300/200/kitten?random=4',
            sourceURL: 'http://loremflickr.com',
            source: 'loremflickr.com',
            count: 0
        },
        {
            id: 'cat07',
            name: 'Reggie',
            image: 'img/cat01.jpg',
            sourceURL: 'http://all-free-download.com/',
            source: 'all-free-download.com',
            count: 0
        }
    ]
};

//************************
// Cat class
// old style create class: var Cat = function () {};
// new ECMAScript 6 style: var Cat = class {};
// num will be index of item in cat array in json
//************************

class Cat {
  constructor(num) {
    this.catID = num;
    this.count = 0;
    this.name = cats.cat[num].name;
    this.image = cats.cat[num].image;
    this.sourceURL = cats.cat[num].sourceURL;
    this.source = cats.cat[num].source;
  }
}

var catArray = [];

function createCats(arrayLength){
  for (var i = 0; i < arrayLength; i++) {
    catArray.push(new Cat(i));
  };
}
createCats(cats.cat.length);
console.log(catArray[2].catID);

//************************
// Cat Navigation
//************************

var catNav = $('#cat-list');

function createCatNav(){
  catNav.append('<ul></ul>');
  for (var i = 0; i < catArray.length; i++) {
    catNav.append('<li><a href="#" class="cat-list-item" id="' + i + '">' + catArray[i].name + '</a></li>');
  }
};



// cats.list = function(){
//   $('#cat-list').append('<ul></ul>');
//   for (var kitty = 0, kittyCount = cats.cat.length; kitty < kittyCount; kitty++){
//     var formatCatList = catListItem.replace('%data%', cats.cat[kitty].name);
//     $('#cat-list').append(formatCatList);
//   }
// };

cats.display = function(){
  for (var kitty = 0, kittyCount = cats.cat.length; kitty < kittyCount; kitty++){
    var formatCatID = catUnit.replace('%data%', cats.cat[kitty].id);
    $('#cat-arena').append(formatCatID);

    var formatCatName = catName.replace('%data%', cats.cat[kitty].name);
    $('figure:last').append(formatCatName);

    var formatCatImage = catImage.replace('%data%', cats.cat[kitty].image);
    $('figure:last').append(formatCatImage);
    $('figure:last').append('<figcaption class="kitInfo"></figcaption>');

    var formatCatSource  = catSource.replace('%data%', cats.cat[kitty].sourceURL + '">' + cats.cat[kitty].source);
    $('figure:last').append(formatCatSource);
  }
};


cats.click = function(){
  //
};

// use $(document).ready() for jQuery code in external js file
// $(function(){}) is shorthand for $(document).ready(function(){})

$(document).ready(function() {



  $('picture').click(function (event) {

    // identify which cat was clicked
    var catID = $(this).parent().attr("id");

    // find index of this cat in cat JSON
    for (var i = 0, numCats = cats.cat.length; i < numCats; i++) {
      if (cats.cat[i].id == catID) {
        var index = i;
      };
    };

    // get the parent and target the required sibling
    // var target = $(this).closest('figure').children('.kitInfo');
    var target = $(this).parent().children('.kitInfo');

    // update number of clicks for the particular cat.
    target.text('I has been clicked ' + ++cats.cat[index].count + ' times');
    // alternatively
    // $(this).next().text('I has been clicked ' + ++cats.cat[index].count + ' times');
  });
});

//cats.list();

createCatNav();

//cats.display();
