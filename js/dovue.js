$(function () {


  let strDiv = new Vue({
    el: '#strDiv',
    data: {
      inputStr: "",
      outputStr: "aaa",
    },
    created: function () {
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

    methods: {
      copyOutPutStrToClipboard() {
        try {
          //await navigator.clipboard.writeText(outputStr);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      },
    }
  });

});

