
import React, { PureComponent } from 'react'

export default LazyComponent =>
    class extends PureComponent {
        constructor() {
            super()
            this.state = {
                result: []
            }
        }
        componentDidMount() {
            this.props.import
                .then(res => this.setState({ result: res }))
        }

        render() {
            console.log(this.state)
            return (
                <LazyComponent {...this.props}
                               name={this.state.result} />
            )
        }
    }
