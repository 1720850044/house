import React from 'react'

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataList:[
                {id:1,name:'首页'},
                {id:2,name: '侧边'}
            ]
        }
    }
    handClick (elem) {
        this.props.handleVal(elem);
    }
    render () {
        return (
            <div>
                <div>{this.props.list}</div>
                {this.state.dataList.map((elem) => <p key={elem.id} onClick={this.handClick.bind(this,elem)}>{elem.name}</p>)}
            </div>
        );
    }
}

export default Nav;