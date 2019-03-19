var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return <div className={'contactItem'}>
      <img className={'contactImage'} src={'http://icons.veryicon.com/256/System/Dynamic%20Yosemite/Contacts.png'}/>
      <div className={'label-wrapper'}>
        <p className={'contactLabel'}>
          Imię: {this.props.contact.firstName}
        </p>
        <p className={'contactLabel'}>
          Nazwisko: {this.props.contact.lastName}
        </p>
        <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </p>
      </div>
    </div>
  }
});
