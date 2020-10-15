const React = require('react');

class WordRelay extends React.Component {
    state={
        word :'해질녘',
        value:'',
        result:'',
    }
    onSubmitForm = (e)=>{
        e.preventDefault();

        if(this.state.word[this.state.word.length -1] === this.state.value[0]) {
            this.setState({
                result:'딩동댕',
                word: this.state.value,
                value:''
            });
        } else {
            this.setState({
                result:"땡",
                value:'',
            });
        }
        this.input.focus();
    };
    onChangeInput = (e)=> {
        this.setState({value:e.currentTarget.value});
    };

    input;
    onRefInput = (c) => {
        this.input=c;
    };
    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
                    <button>입력234</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay; // 컴포넌트를 쪼개면서 필요한 require부분과 exports