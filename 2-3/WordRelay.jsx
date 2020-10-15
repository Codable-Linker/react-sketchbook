const React = require('react');

class WordRelay extends React.Component {
    state={
        text :'Hello, Linker'
    }
    render() {
        return (
            <h1>{this.state.text}</h1>
        );
    }
}

module.exports = WordRelay; // 컴포넌트를 쪼개면서 필요한 require부분과 exports