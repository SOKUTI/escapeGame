$(function() {
  function spritNumberMatch(boxNumber, number) {
    var spritNumber = 0;
    
    spritNumber = boxNumber % 10;
    if (spritNumber == number) {
      return true;
    }
    
    if (boxNumber >= 10) {
      spritNumber = Math.floor((boxNumber % 100) / 10);
      if (spritNumber == number) {
        return true;
      }
    }
    
    if (boxNumber >= 100) {
      spritNumber = Math.floor((boxNumber % 1000) / 100);
      if (spritNumber == number) {
        return true;
      }
    }
    
    if (boxNumber >= 1000) {
      spritNumber = Math.floor(boxNumber / 1000);
      if (spritNumber == number) {
        return true;
      }
    }
    
    return false;
    
  }
  
  function matchBoxId() {
    var boxIdList = ["itemSceneFlontBox1", "itemSceneFlontBox2", "itemSceneFlontBox3", "itemSceneFlontBox4", 
                     "itemSceneFlontBox5", "itemSceneFlontBox6", "itemSceneFlontBox7", "itemSceneFlontBox8", 
                     "itemSceneFlontBox9", "itemSceneFlontBox10", "itemSceneFlontBox11", "itemSceneFlontBox12", 
                     "itemSceneFlontBox13", "itemSceneFlontBox14", "itemSceneFlontBox15", "itemSceneFlontBox16"]
    
    for (var i = 0; i < boxIdList.length; i++) {
      if (boxIdList[i] == $(".main_game__game_screen").attr("id")) {
        return true;
      }
    }
    
    return false;
  }
  
  function changeScreen(change) {
    var htmlNormal = 
      `<div class="main_game__game_screen__door"></div>
      <div class="main_game__game_screen__box"></div>
      <div class="main_game__game_screen__tile_p"></div>
      <div class="main_game__game_screen__driver"></div>`;
    
    var htmlSelectBox = 
      `<div class="main_game__game_screen__box_flont1"></div>
      <div class="main_game__game_screen__box_flont2"></div>
      <div class="main_game__game_screen__box_flont3"></div>
      <div class="main_game__game_screen__box_flont4"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    var htmlSelectNoTurn =
      `<div class="main_game__game_screen__return">戻る</div>`;
    
    var htmlSelectGetKey =
      `<div class="main_game__game_screen__get_key"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    var htmlSelectAnother =
      `<div class="main_game__game_screen__tile_data" data-tiles="` + change + `" style="display: none;"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    $(".main_game__game_screen").empty();
    
    if (change == "normal") {
      $(".main_game__game_screen").append(htmlNormal);
    } else if (change == "box") {
      $(".main_game__game_screen").append(htmlSelectBox);
    } else if (change == "key" || change == "driver") {
      $(".main_game__game_screen").append(htmlSelectNoTurn);
    } else if (change == "get_key") {
      $(".main_game__game_screen").append(htmlSelectGetKey);
    } else {
      $(".main_game__game_screen").append(htmlSelectAnother);
    }
  }
  
  function changeBackScreen(change) {
    var htmlSelectBox =
      `<div class="main_game__game_screen__box_flont1"></div>
      <div class="main_game__game_screen__box_flont2"></div>
      <div class="main_game__game_screen__box_flont3"></div>
      <div class="main_game__game_screen__box_flont4"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    var htmlSelectAnother =
      `<div class="main_game__game_screen__tile_data" data-tiles="` + change + `" style="display: none;"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    var htmlSelectBackBox =
      `<div class="main_game__game_screen__back_box"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    var htmlSelectBackTile =
      `<div class="main_game__game_screen__tile"></div>
      <div class="main_game__game_screen__turn">裏返す</div>
      <div class="main_game__game_screen__return">戻る</div>`;
    
    $(".main_game__game_screen").empty();
    
    if (change == "box" && matchBoxId() == true) {
      $(".main_game__game_screen").append(htmlSelectBackBox);
    } else if (change == "box" && ($(".main_game__game_screen").attr("id") == "itemSceneBackBox1" || $(".main_game__game_screen").attr("id") == "itemSceneBackBox2" || $(".main_game__game_screen").attr("id") == "itemSceneBackBox3")) {
      $(".main_game__game_screen").append(htmlSelectBox);
    } else if (change == "tile" && $(".main_game__game_screen").attr("id") == "itemSceneFlontTile") {
      $(".main_game__game_screen").append(htmlSelectBackTile);
    } else {
      $(".main_game__game_screen").append(htmlSelectAnother);
    }
  }
  
  function screenControll(items) {
    var tileNumber = {o: 2, p: 3, e: 4, n: 5}
    changeScreen("normal");
    if (items.box == 0) {
      $(".main_game__game_screen__tile_e").attr("class", "main_game__game_screen__box");
      if (items.tile_p == true && items.driver == false) {
        $(".main_game__game_screen").attr("id", "scene10");
      } else if (items.tile_p == false && items.driver == true) {
        $(".main_game__game_screen").attr("id", "scene11");
      } else if (items.tile_p == true && items.driver == true){
        $(".main_game__game_screen").attr("id", "scene12");
      } else if (items.key == true) {
        $(".main_game__game_screen").attr("id", "scene9");
      } else {
        $(".main_game__game_screen").attr("id", "scene1")
      }
    } else {
      $(".main_game__game_screen__box").attr("class", "main_game__game_screen__tile_e");
      if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == false && 
          (items.driver || items.tile || items.tile_o || items.tile_n || 
           spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == false && 
          (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == false) {
        $(".main_game__game_screen").attr("id", "scene2");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == false &&
                 (items.driver || items.tile || items.tile_o || items.tile_n || 
                  spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == false && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == true) {
        $(".main_game__game_screen").attr("id", "scene3");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == true && 
                 (items.driver || items.tile || items.tile_o || items.tile_n || 
                  spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == false && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == false) {
        $("main_game__game_screen").attr("id", "scene4");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == false && 
                 (items.driver || items.tile || items.tile_o || items.tile_n ||
                  spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == true && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == false) {
        $(".main_game__game_screen").attr("id", "scene5");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == true && 
                 (items.driver || items.tile || items.tile_o || items.tile_n ||
                  spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == false && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == true) {
        $(".main_game__game_screen").attr("id", "scene6");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == false && 
                 (items.driver || items.tile || items.tile_o || items.tile_n ||
                  spritNumberMatch(items.box, tileNumber.o) || spritNUmberMatch(items.box, tileNumber.n)) == true && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == true) {
        $(".main_game__game_screen").attr("id", "scene7");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == true && 
                 (items.driver || items.tile || items.tile_o || items.tile_n ||
                  spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == true && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == false) {
        $(".main_game__game_screen").attr("id", "scene8");
      } else if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == true && 
                 (items.driver || items.tile || items.tile_o || items.tile_n ||
                  spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == true && 
                 (items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == true) {
        $(".main_game__game_screen").attr("id", "scene9");
      }
    }
  }
  
  function sceneChangeBox(boxNumber) {
    if (boxNumber == 1) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox1");
    } else if (boxNumber == 2000) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox2");
    } else if (boxNumber == 300) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox3");
    } else if (boxNumber == 40) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox4");
    } else if (boxNumber == 5) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox5");
    } else if (boxNumber == 2300) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox6");
    } else if (boxNumber == 2040) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox7");
    } else if (boxNumber == 2005) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox8");
    } else if (boxNumber == 340) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox9");
    } else if (boxNumber == 305) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox10");
    } else if (boxNumber == 45) { 
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox11");
    } else if (boxNumber == 2340) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox12");
    } else if (boxNumber == 2305) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox13");
    } else if (boxNumber == 2045) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox14");
    } else if (boxNumber == 345) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox15");
    } else if (boxNumber == 2345) {
      $(".main_game__game_screen").attr("id", "itemSceneFlontBox16");
    }
  }
  
  function selectScreenControll(select, items) {
    changeScreen(select);
    var tileNumber = {o: 2, p: 3, e: 4, n: 5};
    if (select == "box") {
      sceneChangeBox(items.box);
    } else if (select == "tile_o") {
      $(".main_game__game_screen").attr("id", "itemSceneFlontTile_o");
    } else if (select == "tile_p") {
      $(".main_game__game_screen").attr("id", "itemSceneFlontTile_p");
    } else if (select == "tile_e") {
      $(".main_game__game_screen").attr("id", "itemSceneFlontTile_e");
    } else if (select == "tile_n") {
      $(".main_game__game_screen").attr("id", "itemSceneFlontTile_n");
    } else if (select == "driver") {
      $(".main_game__game_screen").attr("id", "itemSceneDriver");
    } else if (select == "tile") {
      $(".main_game__game_screen").attr("id", "itemSceneFlontTile");
    } else if (select == "key") {
      $(".main_game__game_screen").attr("id", "itemSceneKey");
    }
  }
  
  function selectBackScreenControll(items) {
    var tileNumber = {o: 2, p: 3, e: 4, n: 5};
    if (matchBoxId() == true) {
      changeBackScreen("box");
      if (items.tile == false && items.tile_o == false && spritNumberMatch(items.box, tileNumber.o) == false) {
        $(".main_game__game_screen").attr("id", "itemSceneBackBox1");
      } else if ((items.tile || items.tile_o || spritNumberMatch(items.box, tileNumber.o)) == true && (items.tile_n || spritNumberMatch(items.box, tileNumber.n)) == false) {
        $(".main_game__game_screen").attr("id", "itemSceneBackBox2");
      } else if ((items.tile || items.tile_o || spritNumberMatch(items.box, tileNumber.o)) == true && (items.tile_n || spritNumberMatch(items.box, tileNumber.n)) == true) {
        $(".main_game__game_screen").attr("id", "itemSceneBackBox3");
      }
    } else if ($(".main_game__game_screen").attr("id") == "itemSceneBackBox1" || $(".main_game__game_screen").attr("id") == "itemSceneBackBox2" || $(".main_game__game_screen").attr("id") == "itemSceneBackBox3") {
      changeBackScreen("box");
      sceneChangeBox(items.box);
    } else if ($(".main_game__game_screen").attr("id") == "itemSceneFlontTile") {
      changeBackScreen("tile");
      $(".main_game__game_screen").attr("id", "itemSceneBackTile");
    } else if ($(".main_game__game_screen").attr("id") == "itemSceneBackTile") {
      changeBackScreen("tile");
      $(".main_game__game_screen").attr("id", "itemSceneFlontTile");
    } else if ($(".main_game__game_screen").attr("id") == "itemSceneBackOpen") {
      if ($(".main_game__game_screen__tile_data").data("tiles") == "tile_o") {
        changeBackScreen("tile_o");
        $(".main_game__game_screen").attr("id", "itemSceneFlontTile_o");
      } else if ($(".main_game__game_screen__tile_data").data("tiles") == "tile_p") {
        changeBackScreen("tile_p");
        $(".main_game__game_screen").attr("id", "itemSceneFlontTile_p");
      } else if ($(".main_game__game_screen__tile_data").data("tiles") == "tile_e") {
        changeBackScreen("tile_e");
        $(".main_game__game_screen").attr("id", "itemSceneFlontTile_e");
      } else if ($(".main_game__game_screen__tile_data").data("tiles") == "tile_n") {
        changeBackScreen("tile_n");
        $(".main_game__game_screen").attr("id", "itemSceneFlontTile_n");
      }
    } else {
      changeBackScreen($(".main_game__game_screen__tile_data").data("tiles"));
      $(".main_game__game_screen").attr("id", "itemSceneBackOpen");
    }
  }
  
  function iconControll(items) {
    if (items.box != 0 && $(".main_game__items__item__item_icon[id = 'box']").length == 0) {
      $(".main_game__items__item").prepend(`<div class="main_game__items__item__item_icon" id="box"></div>`);
    } else if (items.box == 0 && $(".main_game__items__item__item_icon[id = 'box']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'box']").remove();
    } 
    
    if (items.tile_o == true && $(".main_game__items__item__item_icon[id = 'tile_o']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="tile_o"></div>`);
    } else if (items.tile_o == false && $(".main_game__items__item__item_icon[id = 'tile_o']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'tile_o']").remove();
    }
    
    if (items.tile_p == true && $(".main_game__items__item__item_icon[id = 'tile_p']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="tile_p"></div>`);
    } else if (items.tile_p == false && $(".main_game__items__item__item_icon[id = 'tile_p']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'tile_p']").remove();
    }
    
    if (items.tile_e == true && $(".main_game__items__item__item_icon[id = 'tile_e']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="tile_e"></div>`);
    } else if (items.tile_e == false && $(".main_game__items__item__item_icon[id = 'tile_e']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'tile_e']").remove();
    }
    
    if (items.tile_n == true && $(".main_game__items__item__item_icon[id = 'tile_n']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="tile_n"></div>`);
    } else if (items.tile_n == false && $(".main_game__items__item__item_icon[id = 'tile_n']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'tile_n']").remove();
    }
    
    if (items.driver == true && $(".main_game__items__item__item_icon[id = 'driver']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="driver"></div>`);
    } else if (items.driver == false && $(".main_game__items__item__item_icon[id = 'driver']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'driver']").remove();
    }
    
    if (items.tile == true && $(".main_game__items__item__item_icon[id = 'tile']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="tile"></div>`);
    } else if (items.tile == false && $(".main_game__items__item__item_icon[id = 'tile']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'tile']").remove();
    }
    
    if (items.key == true && $(".main_game__items__item__item_icon[id = 'key']").length == 0) {
      $(".main_game__items__item").append(`<div class="main_game__items__item__item_icon" id="key"></div>`);
    } else if (items.key == false && $(".main_game__items__item__item_icon[id = 'key']").length != 0) {
      $(".main_game__items__item__item_icon[id = 'key']").remove();
    }
  }
  
  var items = {box: 0, tile_o: false, tile_p: false, tile_e: false, tile_n: false, driver: false, tile: false, key: false, user_id: 0};
  var select = "";
  var tileNumber = {o: 2, p: 3, e: 4, n: 5}
  
  $(document).ready(function() {
    if ($(".main_config").data("exist") == 1) {
      $.ajax({
        url: "/main",
        type: "get",
        dataType: "json"
      })
      .done(function(data) {
        items.box = data.box;
        items.tile_o = data.tile_o;
        items.tile_p = data.tile_p;
        items.tile_e = data.tile_e;
        items.tile_n = data.tile_n;
        items.driver = data.driver;
        items.tile = data.tile;
        items.key = data.key;
        items.user_id = data.user_id;
        screenControll(items);
        iconControll(items);
      });
    }
  });
  
  $(document).on("click", ".main_game__game_screen__box", function() {
    if (items.box == 0 && items.key == false) {
      items.box = 1;
      screenControll(items);
      iconControll(items);
    }
  });
  
  $(document).on("click", ".main_game__game_screen__tile_p", function() {
    if ((items.tile_p || spritNumberMatch(items.box, tileNumber.p)) == false && items.key == false) {
      items.tile_p = true;
      screenControll(items);
      iconControll(items);
    }
  });
  
  $(document).on("click", ".main_game__game_screen__driver", function() {
    if ((items.driver || items.tile || items.tile_o || items.tile_n || spritNumberMatch(items.box, tileNumber.o) || spritNumberMatch(items.box, tileNumber.n)) == false && items.key == false) {
      items.driver = true;
      screenControll(items);
      iconControll(items);
    }
  });
  
  $(document).on("click", ".main_game__game_screen__tile_e", function() {
    if ((items.tile_e || spritNumberMatch(items.box, tileNumber.e)) == false && items.key == false) {
      items.tile_e = true;
      screenControll(items);
      iconControll(items);
    }
  });
  
  $(document).on("click", "#box", function() {
    if (select == "") {
      select = "box";
      $("#box").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "box") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "box";
      $("#box").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#tile_o", function() {
    if (select == "") {
      select = "tile_o";
      $("#tile_o").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "tile_o") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "tile_o";
      $("#tile_o").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#tile_p", function() {
    if (select == "") {
      select = "tile_p";
      $("#tile_p").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "tile_p") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "tile_p";
      $("#tile_p").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#tile_e", function() {
    if (select == "") {
      select = "tile_e";
      $("#tile_e").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "tile_e") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "tile_e";
      $("#tile_e").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#tile_n", function() {
    if (select == "") {
      select = "tile_n";
      $("#tile_n").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "tile_n") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "tile_n";
      $("#tile_n").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#driver", function() {
    if (select == "") {
      select = "driver";
      $("#driver").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "driver") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "driver";
      $("#driver").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#tile", function() {
    if (select == "") {
      select = "tile";
      $("#tile").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "tile") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "tile";
      $("#tile").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", "#key", function() {
    if (select == "") {
      select = "key";
      $("#key").attr("class", "main_game__items__item__item_icon main_game__items__item__border");
    } else if (select != "key") {
      select = "#" + select;
      $(select).attr("class", "main_game__items__item__item_icon");
      select = "key";
      $("#key").attr("class", "main_game__items__item__item_icon main_game__items__item__border")
    }
  });
  
  $(document).on("click", ".main_game__items__research", function() {
    if (select != "") {
      selectScreenControll(select, items);
    }
  });
  
  $(document).on("click", ".main_game__game_screen__turn", function() {
    selectBackScreenControll(items);
  });
  
  $(document).on("click", ".main_game__game_screen__return", function() {
    screenControll(items);
  });
  
  $(document).on("click", ".main_game__game_screen__box_flont1", function() {
    if (select == "tile_o") {
      if (items.box == 1) {
        items.box = 0;
      }
      items.tile_o = false;
      items.box = items.box + 2000;
      selectScreenControll("box", items);
      iconControll(items);
      select = "";
    } else if (items.box == 2345) {
      $(".main_game__game_screen").attr("id", "itemSceneOpenBox");
      changeScreen("get_key");
    }
  });
  
  $(document).on("click", ".main_game__game_screen__box_flont2", function() {
    if (select == "tile_p") {
      if (items.box == 1) {
        items.box = 0;
      }
      items.tile_p = false;
      items.box = items.box + 300;
      selectScreenControll("box", items);
      iconControll(items);
      select = "";
    } else if (items.box == 2345) {
      $(".main_game__game_screen").attr("id", "itemSceneOpenBox");
      changeScreen("get_key");
    }
  });
  
  $(document).on("click", ".main_game__game_screen__box_flont3", function() {
    if (select == "tile_e") {
      if (items.box == 1) {
        items.box = 0;
      }
      items.tile_e = false;
      items.box = items.box + 40;
      selectScreenControll("box", items);
      iconControll(items);
      select = "";
    } else if (items.box == 2345) {
      $(".main_game__game_screen").attr("id", "itemSceneOpenBox");
      changeScreen("get_key");
    }
  });
  
  $(document).on("click", ".main_game__game_screen__box_flont4", function() {
    if (select == "tile_n") {
      if (items.box == 1) {
        items.box = 0;
      }
      items.tile_n = false;
      items.box = items.box + 5;
      selectScreenControll("box", items);
      iconControll(items);
      select = "";
    } else if (items.box == 2345) {
      $(".main_game__game_screen").attr("id", "itemSceneOpenBox");
      changeScreen("get_key");
    }
  });
  
  $(document).on("click", ".main_game__game_screen__back_box", function() {
    if (select == "driver" && $(".main_game__game_screen").attr("id") == "itemSceneBackBox1") {
      items.tile = true;
      $(".main_game__game_screen").attr("id", "itemSceneBackBox2");
      iconControll(items);
    } else if ($(".main_game__game_screen").attr("id") == "itemSceneBackBox2") {
      items.tile_n = true
      $(".main_game__game_screen").attr("id", "itemSceneBackBox3");
      iconControll(items);
    }
  });
  
  $(document).on("click", ".main_game__game_screen__get_key", function() {
    items.box = 0;
    items.key = true;
    iconControll(items);
    screenControll(items);
    select = "";
  });
  
  $(document).on("click", ".main_game__game_screen__tile", function() {
    if (select == "driver") {
      items.driver = false;
      items.tile = false;
      items.tile_o = true;
      iconControll(items);
      screenControll(items);
      select = "";
    }
  });
  
  $(document).on("click", ".main_game__game_screen__door", function() {
    if (select == "key") {
      items.key = false;
      iconControll(items);
      screenControll(items);
      select = "";
      if ($(".main_config").data("exist") == 1) {
        $.ajax({
          url: "/main/" + items.user_id,
          type: "PATCH",
          data: items,
          dataType: "json"
        });
      }
      alert("脱出おめでとうございます！（ゲームデータはクリアされました）");
    }
  });
  
  $(document).on("click", ".main_game__config__save", function(e) {
    e.preventDefault();
    items.user_id = $(".main_config").data("uid");
    if($(".main_config").data("exist") == 0) {
      $.ajax({
        url: "/main",
        type: "POST",
        data: items,
        dataType: "json"
      })
      .done(function() {
        $(".main_config").data("exist", 1)
        $(".main_config").attr("data-exist", 1);
        alert("セーブしました")
      })
      .fail(function() {
        alert("セーブに失敗しました。もう一度お試しください");
      });
    } else {
      $.ajax({
        url: "/main/" + items.user_id,
        type: "PATCH",
        data: items,
        dataType: "json"
      })
      .done(function() {
        alert("セーブしました")
      })
      .fail(function() {
        alert("セーブに失敗しました。もう一度お試しください")
      });
    }
  });
  
});
