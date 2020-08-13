import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <span>hello world</span>
                <span>{this.children}</span>
            </div>
        )
    }
}

let a = <MyComponent name="a" ><div>123</div></MyComponent>

ToyReact.render(a, document.body)