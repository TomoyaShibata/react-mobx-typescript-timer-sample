import * as React from 'react'
import { observer } from 'mobx-react'
import { TimerStore } from '../stores/TimerStores'

@observer
export class TimerView extends React.Component<{ timerStore: TimerStore }, {}> {
  onReset = () => this.props.timerStore.resetTimer()

  render() {
    return (
      <div>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.timerStore.timer}
        </button>
      </div>
    )
  }
}