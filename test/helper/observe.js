import { runEffects, tap } from '@most/core'
import { newDefaultScheduler } from '@most/scheduler'

export const drain = s => {
  return runEffects(s, newDefaultScheduler())
}

export const observe = (f, s) => {
  return drain(tap(f, s))
}

export const collect = s => {
  const into = []
  return observe(x => into.push(x), s).then(() => into)
}

