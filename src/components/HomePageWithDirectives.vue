<template>
  <div class="page">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-5">
          <v-card-title>Home Page</v-card-title>
          <v-card-text>
            Welcome to the home page. This page is accessible to everyone.
            <br>
            <p v-color v-change-font-size="fontSize">Text with directives</p>
            <p>Text without directive</p>
            <v-label>Font size<input v-model.number="fontSize" type="number" min="5"/></v-label>
            <v-btn v-tooltip-activate="'It`s tooltip!'" color="primary">Point at me</v-btn>
            <v-btn v-tooltip-activate="'You can drag and drop this button'" v-draggable color="primary">Move me</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
  import {Tooltip} from "bootstrap";
  export default {
    name: 'HomePageWithDirectives',
    data() {
      return {
        fontSize: 25,
      }
    },
    directives: {
      color: {
        mounted(el) {
          el.style.color = 'red';
        }
      },
      changeFontSize: {
        updated(el, fontSize) {
          el.style.fontSize = fontSize ? fontSize.value + 'px' : '25px';
        }
      },
      draggable: {
        mounted(el) {
          el.style.position = 'absolute';
          el.style.cursor = 'move';
          el.onmousedown = function(cursor) {

            const coords = getCoords(el);
            const shiftX = cursor.pageX - coords.left;
            const shiftY = cursor.pageY - coords.top;
            function moveAt(cursor) {
              el.style.left = (cursor.layerX - shiftX) + 'px';
              el.style.top = (cursor.layerY - shiftY) + 'px';
            }

            document.onmousemove = function(cursor) {
              moveAt(cursor);
            };

            el.onmouseup = function() {
              document.onmousemove = null;
              el.onmouseup = null;
            };
          };

          function getCoords(elem) {
            const box = elem.getBoundingClientRect();
            return {
              top: box.top + scrollY,
              left: box.left + scrollX
            };
          }

          el.ondragstart = function() {
            return false;
          };
        }
      }
    }
};
</script>

<style>

</style>