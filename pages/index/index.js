// index.js
Page({
  data: {
    item: '',
    reason: '',
    showResult: false,
    result: '',
    quip: ''
  },

  onItemInput(e) {
    this.setData({ item: e.detail.value })
  },

  onReasonInput(e) {
    this.setData({ reason: e.detail.value })
  },

  onSubmit() {
    const item = (this.data.item || '').trim()
    if (!item) {
      wx.showToast({
        title: '先说说你想买啥',
        icon: 'none'
      })
      return
    }

    // 无论理由多充分，结论只有一个
    const quips = [
      '理由很动听，钱包不同意。',
      '条件允许的话，条件就不允许。',
      '再想想，明天你可能就不想要了。',
      '这个东西，你已经有类似的了。',
      '省下这笔钱，离自由更近一步。'
    ]

    this.setData({
      showResult: true,
      result: '买个der',
      quip: quips[Math.floor(Math.random() * quips.length)]
    })

    if (wx.vibrateShort) {
      wx.vibrateShort({ type: 'light', fail() {} })
    }
  },

  onReset() {
    this.setData({
      item: '',
      reason: '',
      showResult: false,
      result: '',
      quip: ''
    })
  },

  onShareAppMessage() {
    return {
      title: '买个der —— 专治冲动消费',
      path: '/pages/index/index'
    }
  }
})
