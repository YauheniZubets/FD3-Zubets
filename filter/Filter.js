var Filter=React.createClass({

    propTypes: {
        arrStr: React.PropTypes.arrayOf(
            React.PropTypes.string
        ).isRequired
    },

    getInitialState: function(){
        return {
            viewArr: this.props.arrStr,
            sorted: false,
            inpValue: '',
            unsortedArr: null
        }
    },

    inpChanged: function(EO) {
        let strToFind=EO.target.value;
        this.setState({inpValue: strToFind}, this.filterData(strToFind));
    },

    cbSort: function () {
        this.setState({sorted: !this.state.sorted}, this.sortData);
    },

    filterData: function(stringToFind) {
        let copyArr;
        copyArr=this.props.arrStr.slice();
        if (this.state.sorted){
            copyArr.sort();
        }
        let filtered=copyArr.filter(item=>{
            if (item.indexOf(stringToFind) != -1){
                return item
            }
        });
        this.setState({viewArr: filtered});
    },

    sortData: function () {
        let copyArr=this.state.viewArr.slice();
        
        if (this.state.sorted){
            let unsortedArr=this.state.viewArr.slice();
            this.setState({viewArr: copyArr.sort(), unsortedArr: unsortedArr});
        } else {
            this.setState({viewArr: this.state.unsortedArr});
        }
    },

    cbDefault: function () {
        this.setState({inpValue: '', viewArr: this.props.arrStr, sorted: false});
    },

    render: function(){
        
        var resultLi=this.state.viewArr.map((item, index)=>{
            return React.DOM.li({key: index}, item);
        });
        
        return React.DOM.div({},
            React.DOM.div({className: 'Maininput'}, 
                React.DOM.input({type: 'checkbox', onChange: this.cbSort, checked: this.state.sorted}),
                React.DOM.input({type: 'text', onChange: this.inpChanged, value: this.state.inpValue}),
                React.DOM.input({type: 'button', value: 'сброс', onClick: this.cbDefault}),
            ),
            React.DOM.div({className: 'Mainlist'},
                React.DOM.ul({},
                    resultLi
                )
            )
        )
    }
})