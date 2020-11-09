var Filter=React.createClass({

    propTypes: {
        arrStr: React.PropTypes.arrayOf(
            React.PropTypes.string
        ).isRequired
    },

    getInitialState: function(){
        return {
            defArrow: this.props.arrStr,
            filtered: false,
            sortMode: false,
            viewArr:[],
            unsortedArr:[],
            input: false
        }
    },

    sortData: function() {
        this.setState({sortMode: !this.state.sortMode}, this.processData);
    },

    textChanged: function(event) {
        this.setState({filtered: true, input:event.target.value}, this.filterData);
    },

    processData: function () {
        let unsortedArr=null;
        if (this.state.sortMode) {
            if (this.state.viewArr.length>0) {
                let unsorted=this.state.viewArr.slice();
                this.setState({ unsortedArr: unsorted, viewArr: this.state.viewArr.sort()});
            } else {
                let sorted=this.state.defArrow.slice().sort();
                this.setState({viewArr: sorted});
            }
        } else {
            if (this.state.viewArr.length>0) {
                console.log(this.state.unsortedArr);
                this.setState({viewArr: this.state.unsortedArr});
            } else {
                this.setState({viewArr: []})
            }
        }
    },

    filterData: function () {
        if (this.state.filtered) {
            if (this.state.viewArr.length>0) {
                let filteredArr=this.state.viewArr.filter(item=>{
                    return item.split('').includes(this.state.input);
                })
                this.setState({viewArr: filteredArr, filtered: false, unsortedArr: filteredArr});
            } else {
                let copyArr=this.state.defArrow.slice();
                let filteredArr=copyArr.filter(item=>{
                    return item.split('').includes(this.state.input);
                })
                this.setState({viewArr: filteredArr, filtered: false});
            }
        }
    },

    cbClicked: function () {
        this.setState({sortMode: false, input: false, viewArr:[], unsortedArr:[]});
    },

    render: function(){
        
        if (this.state.viewArr.length>0) {
            var resultLi=this.state.viewArr.map((item, index)=>{
                return React.DOM.li({key: index}, item);
            });
        } else {
            var resultLi=this.state.defArrow.map((item, index)=>{
                return React.DOM.li({key: index}, item);
            });
        }
        
        return React.DOM.div({},
            React.DOM.div({className: 'Maininput'}, 
                React.DOM.input({type: 'checkbox', onChange: this.sortData, checked: this.state.sortMode}),
                React.DOM.input({type: 'text', onChange: this.textChanged, value: !this.state.input ? '' : this.state.input}),
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