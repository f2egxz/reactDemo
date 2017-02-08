//-*- mode: react -*-
//-*- coding: utf-8 -*-

/**
 * button.js
 *
 * 按钮 Action
 *
 * @component
 * @author fe.yf <631190613@qq.com>
 */


const CLICK_BUTTON = ID => `CLICK_BUTTON_${ID}`

export const ActionType = ID => {
  CLICK_BUTTON(ID)
}

export const clickButton = ID => handle => {
  handle && handle()
  return {
    type: CLICK_BUTTON(ID)
  }
}
