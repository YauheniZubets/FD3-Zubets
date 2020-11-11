var Filter=React.createClass({

    propTypes: {
        arrStr: React.PropTypes.arrayOf(
            React.PropTypes.string
        ).isRequired
    },

    getInitialState: function(){
        return {
            viewArr: null,
            sorted: false
        }
    },

    sortData: function() {
        
    },

    textChanged: function(EO) {
        let stringToFind=EO.target.value;
        let copyArr=this.props.arrStr.slice();
        let filtered=copyArr.filter(item=>{
            if (item.indexOf(stringToFind) != -1){
                return item
            }
        });
        this.setState({viewArr: filtered});
    },

    sortData: function () {
        let unsortedArr=this.state.viewArr.slice();
        if(!this.state.sorted){
            if(this.state.viewArr.length>0){
                let copySortedArr=this.state.viewArr.slice().sort();
                this.setState({viewArr: copySortedArr, sorted: true});
            } else {
                let copySortedArr=this.props.arrStr.slice().sort();
                this.setState({viewArr: copySortedArr, sorted: true});
            }
        } else {
            if (this.state.viewArr.length>0){
                console.log(unsortedArr);
                this.setState({viewArr: unsortedArr, sorted: false});
            } else {
                this.setState({viewArr: null, sorted: false})
            }
        }
    },

    filterData: function () {
        
    },

    cbClicked: function () {
        
    },

    render: function(){
        
        if(this.state.viewArr){
            var resultLi=this.state.viewArr.map((item, index)=>{
                return React.DOM.li({key: index}, item);
            });
        } else {
            var resultLi=this.props.arrStr.map((item, index)=>{
                return React.DOM.li({key: index}, item);
            });
        }
        
        return React.DOM.div({},
            React.DOM.div({className: 'Maininput'}, 
                React.DOM.input({type: 'checkbox', onChange: this.sortData}),
                React.DOM.input({type: 'text', onChange: this.textChanged}),
                React.DOM.input({type: 'button', value: 'сброс', onClick: this.cbClicked}),
            ),
            React.DOM.div({className: 'Mainlist'},
                React.DOM.ul({},
                    resultLi
                )
            )
        )
    }
})