import React from 'react'

const Hoc = (Component) => {
  return class extends React.Component{
    componentDidUpdate(oldProps){
      console.log(this.props);
      console.log('Новые',this.props);
      console.log('Старые',oldProps);
      console.log(oldProps);
    }
    render(){
      return <Component {...this.props}/>
    }
    }
}

export default Hoc