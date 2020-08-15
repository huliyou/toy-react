import { ToyReact, Component, render } from './ToyReact';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2,
        }
    }
    render() {
        return (
            <div>
                <span>hello world</span>
                <button onclick={() => {
                    this.setState({
                        a: this.state.a + 1,
                    })
                }}>add</button>
                <span className="hello">{this.state.a.toString()}</span>
            </div>
        )
    }
}

let a = <MyComponent name="a" ><div>123</div></MyComponent>

render(a, document.body)