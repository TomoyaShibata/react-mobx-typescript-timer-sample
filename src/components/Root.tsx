import * as React from 'react'
import { TimerView } from './TimerView'
import { TimerStore } from '../stores/TimerStores'

const timerStore = new TimerStore()

export const Root = () =>
  <div>
    <h1>React Mobx TypeScript Timer Sample</h1>
    <TimerView timerStore={timerStore} />
  </div>
