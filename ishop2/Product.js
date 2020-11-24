var Product=React.createClass({

    prodImage: function(url, name){
        return React.DOM.img({src: `${url}`, alt: name, className: 'Image'})
    },

    cbDelete: function(){
        if (confirm('Действительно удалить?')){
            this.props.delete(this.props.code);
        }
    },

    cbSelect: function(EO){
        if (EO.target.value!=='Удалить') {
            this.props.select(this.props.code);
        }   
    },

    render: function() {
        console.log(this.props.code, this.props.selectedCode);
        return React.DOM.tr({
                className:`Product ${this.props.selectedCode==this.props.code ? 'Selected' : ''}` ,
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