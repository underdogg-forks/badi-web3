<template>
  <table class="Grid19"
         v-bind:class="{ayyamiha: info.ayyamiha}"
         v-bind:data-dummy="showDelayed">
    <tr>
      <th colspan=19>
        <div class="header">
          <span class="desc"
                v-html="info.desc"></span>
          <span class="type"
                v-html="info.mid"></span>
          <span v-if="false" class="type">
                <span v-html="info.type"></span>
                <span v-if="info.type2">
                        (<span v-html="info.type2"></span>)
                </span>
          </span>
        </div>
      </th>
    </tr>
    <tr class="gridRow">
      <td class="cell row1 cell1"><span class=a></span><span class=b></span></td>
      <td class="cell row1 cell2"><span class=a></span><span class=b></span></td>
      <td class="cell row1 cell3"><span class=a></span><span class=b></span></td>
      <td class="cell row2 cell4"><span class=a></span><span class=b></span></td>
      <td class="cell row2 cell5"><span class=a></span><span class=b></span></td>
      <td class="cell row2 cell6"><span class=a></span><span class=b></span></td>
      <td class="cell row2 cell7"><span class=a></span><span class=b></span></td>
      <td class="cell row3 cell8"><span class=a></span><span class=b></span></td>
      <td class="cell row3 cell9"><span class=a></span><span class=b></span></td>
      <td class="cell row3 cell10"><span class=a></span><span class=b></span></td>
      <td class="cell row3 cell11"><span class=a></span><span class=b></span></td>
      <td class="cell row3 cell12"><span class=a></span><span class=b></span></td>
      <td class="cell row3 cell13"><span class=a></span><span class=b></span></td>
      <td class="cell row4 cell14"><span class=a></span><span class=b></span></td>
      <td class="cell row4 cell15"><span class=a></span><span class=b></span></td>
      <td class="cell row4 cell16"><span class=a></span><span class=b></span></td>
      <td class="cell row4 cell17"><span class=a></span><span class=b></span></td>
      <td class="cell row4 cell18"><span class=a></span><span class=b></span></td>
      <td class="cell row4 cell19"><span class=a></span><span class=b></span></td>
    </tr>
    <tr class="elements" v-if="info.mode==='year'">
      <td class="row1 past" v-bind:class="{active: info.elementNum===1}" colspan="3"><span class=a>Fire</span></td>
      <td class="row2 past" v-bind:class="{active: info.elementNum===2}" colspan="4"><span class=a>Air</span></td>
      <td class="row3 past" v-bind:class="{active: info.elementNum===3}" colspan="6"><span class=a>Water</span></td>
      <td class="row4 past" v-bind:class="{active: info.elementNum===4}" colspan="6"><span class=a>Earth</span></td>
    </tr>
  </table>
</template>
<style src="./Grid19.vue.css"></style>
<script src="./Grid19.vue.js"></script>
