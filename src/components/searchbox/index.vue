<template>
  <div class="searchbox">
    <div class="searchbox-container">
      <div class="searchbox-content">
        <input 
          type="text" 
          class="searchbox-input" 
          placeholder=""
          autocomplete="off"
          @input="filterImmediate"
          @focus="handleFocus">
        <div class="searchbox-input-clear" title="清除">
          <i>x</i>
        </div>
      </div>
    </div>
    <button type="button" class="searchbox-button">搜索</button>
    <div class="searchbox-card searchbox-card0"></div>
    <div class="searchbox-card searchbox-card1"></div>
    <div class="searchbox-card searchbox-card2"></div>
    <div class="searchbox-suggest-dropdown" v-show="displaySuggestion">
      <div class="searchbox-suggest-scroll">
        <ul class="searchbox-history">
          <li 
            v-for="(item, index) in searchRecord" 
            :key="index"
            :title="item.wd">
            <i></i>
            <span>{{ item.wd }}</span>
            <!-- <button type="button" class="button-remove" @click="removeRecord(item)">x</button> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WxSearchbox',
    data() {
      return {
        form: {
          keyword: ''
        },
        displaySuggestion: false,
        searchRecord: [
          {"qt":"s","wd":"武汉市","ctime":"1597734797","platform":"3"},
          {"qt":"s","wd":"百联奥特莱斯广场","wd2":"武汉市黄陂区","ctime":"1597734686","platform":"3"},
          {"qt":"s","wd":"武汉站","wd2":"武汉市洪山区","ctime":"1597734676","platform":"3"},
          {"qt":"s","wd":"阿迪达斯(维佳佰港城店)武汉市洪山区","wd2":"武汉市洪山区","ctime":"1597734667","platform":"3"},
          {"qt":"s","wd":"梅苑小区-地铁站","wd2":"武汉市武昌区","ctime":"1597734659","platform":"3"},
          {"qt":"s","wd":"武汉市光谷第九小学","wd2":"武汉市江夏区","ctime":"1597734384","platform":"3"},
          {"qt":"s","wd":"光谷九小","ctime":"1597734374","platform":"3"},
          {"qt":"s","wd":"光谷师范学校","ctime":"1520326267","platform":"3"},
          {"qt":"s","wd":"上海虹桥机场","ctime":"1511348217","platform":"3"},
          {"qt":"s","wd":"三阳路-地铁站","wd2":"武汉市江岸区","ctime":"1506057393","platform":"3"},
          {"qt":"s","wd":"湖南师范大学招生办","wd2":"湖南师范大学","ctime":"1495442459","platform":"3"},
          {"qt":"nb","wd":"医院","ctime":"1494924837","platform":"3"},
          {"qt":"nb","wd":"中关村","ctime":"1486717984","platform":"3"}
        ]
      }
    },
    methods: {
      filterImmediate(e) {
        let val = e.target.value.trim();
        if(val === this.form.keyword) return;
        this.form.keyword = val;
      },
      handleFocus() {
        if(this.displaySuggestion) return;
        if(!this.form.keyword) {
          this.displaySuggestion = true;
        }
      }
    },
    watch: {
      'form.keyword': () => {

      }
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {

    }
  }
</script>

<style lang="scss">
  .searchbox {
    position: relative;
    width: 425px;
    border-radius: 2px;
    pointer-events: auto;
  }

  .searchbox-container {
    position: relative;
    width: 368px;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
  }

  .searchbox-content {
    position: relative;
    width: 368px;
    border-radius: 2px 0 0 2px;
    background-color: #fff;
  }

  .searchbox-input {
    display: block;
    width: 100%;
    height: 40px;
    padding: 9px 50px 9px 15px;
    border: 0;
    outline: 0;
  }

  .searchbox-input-clear {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 40px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #999;
    cursor: pointer;

    i {
      font-style: normal;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-left: 1px solid #eee;
    }
  }

  .searchbox-button {
    position: absolute;
    right: 0;
    top: 0;
    width: 57px;
    height: 40px;
    border: 0;
    padding: 0;
    outline: 0;
    cursor: pointer;
    color: #fff;
    border-radius: 0 2px 2px 0;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
    background-color: #3385ff;
  }

  .searchbox-card {
    position: relative;
    width: 368px;
  }
</style>