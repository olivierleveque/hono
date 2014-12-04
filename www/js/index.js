/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).ready(function() {
    //dimension hauteur menu
    //$(".page_accueil").show();
    $(".menu_accueil").css("height", $(".menu_accueil").width() + "px");


    //affiche profil
    delay(300);
    $(".page_accueil").css({"opacity":1});

    $$(".menu_accueil a, .menu_profil a").tap(function(e) {
        e.preventDefault();
        var cible = $(this).attr("data-cible");

        if (cible != "") {
            $(".page").css("z-index", 1);
            $("."+cible).css("z-index", 100);
            $(".page").css("opacity", 0);
            $("."+cible).css("opacity", 1);
        }
    });
});

function delay( ms ) {
    var end = new Date().getTime() + ms;
    while (end > new Date().getTime() );
}