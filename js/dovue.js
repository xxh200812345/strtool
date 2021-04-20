import * as mstr from './string.js';
$(function () {

  let strDiv = new Vue({
    el: '#strDiv',
    data: {
      inputStr: "",
      outputStr: "",
      strBtns: [{
        name: '反转',
        eventName: 'reverseStr',
      }, {
        name: '简体',
        eventName: 'jiantiStr',
      }, {
        name: '繁体',
        eventName: 'fantiStr',
      }],
    },
    created: function () {
      this.copyOutPutStrToClipboard();
    },

    methods: {
      copyOutPutStrToClipboard() {
        Vue.nextTick(function () {
          // DOM 更新了
          let copyTooltipTriggerList = [].slice.call($('.copyBtn'));
          let tooltipList = copyTooltipTriggerList.map(function (tooltipTriggerEl) {
            let ta = $(tooltipTriggerEl).parent(0).nextAll('textarea');

            $(tooltipTriggerEl).click(async (e) => {
              try {
                await navigator.clipboard.writeText(ta.val());
                tooltipTriggerEl.dataset.bsOriginalTitle = "复制成功";
                $(tooltipTriggerEl).tooltip('show');

                tooltipTriggerEl.addEventListener('hidden.bs.tooltip', function () {
                  tooltipTriggerEl.dataset.bsOriginalTitle = "复制到剪贴板";
                });

              } catch (err) {
                console.error('Failed to copy: ', err);
              }
            });
            return new bootstrap.Tooltip(tooltipTriggerEl);
          })
        })
      },

      handleClick(i) {
        this[i]();
      },

      reverseStr() {
        this.outputStr = [...this.inputStr].reverse().join('');
      },
      jiantiStr() {
        this.outputStr = mstr.jianti(this.inputStr);
      },
      fantiStr() {
        this.outputStr = mstr.fanti(this.inputStr);
      },
    }
  });

});

