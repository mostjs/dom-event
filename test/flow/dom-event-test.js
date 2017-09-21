// @flow

import { domEvent, click } from '../../src'
import { observe } from '../helper/observe'

const el = document.createElement('div')

observe((d: Event) => {}, domEvent('any', el))

observe((d: MouseEvent) => {}, domEvent('click', el))
observe((d: MouseEvent) => {}, click(el))
