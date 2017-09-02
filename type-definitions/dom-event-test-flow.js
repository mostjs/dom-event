// @flow

import { domEvent, click } from '../src'

const el = document.createElement('div')

domEvent('any', el).observe((d: Event) => {})

domEvent('click', el).observe((d: MouseEvent) => {})
click(el).observe((d: MouseEvent) => {})
