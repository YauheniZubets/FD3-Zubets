var Product=React.createClass({
    
    getInitialState: function(){
        return{
            selected: false
        }
    },

    prodImage: function(url, name){
        return React.DOM.img({src: `${url}`, alt: name, className: 'Image'})
    },

    cbDelete: function(){
        this.props.delete(this.props.code);
    },

    cbSelect: function(EO){
        if (EO.target.value!=='Удалить') {
            this.setState({selected: !this.state.selected});
        }
    },

    render: function() {
        return React.DOM.tr({
            className:`Product ${this.state.selected ? 'Selected' : null}` ,
            onClick: this.cbSelect},
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, `${this.props.price} BYN`),
            React.DOM.td(null, `${this.props.qual} шт.`),
            React.DOM.td(null, this.prodImage(this.props.image, this.props.name)),
            React.DOM.td(null, 
                React.DOM.button({
                    value: 'Удалить', 
                    onClick: this.cbDelete
                }, 'Удалить')
            )
        );
    }
})