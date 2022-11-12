import React, { Component } from 'react';
import "./styles.css";
import DownCarrot from './Drop-Carrot.webp';
class Dropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dropDownVisible: 'collapse',
      selected: [],
      quickSelectChecked: false
    }

    this.inputRefs = []
    this.items = []
    var count = 0
    this.props.items.forEach(element => {
      this.items.push([count, element])
      count += 1
    });
  }

  handleDropDownClicked() {
    if (this.state.dropDownVisible === 'collapse') {
      this.setState({dropDownVisible: 'visible'})
    } else {
      this.setState({dropDownVisible: 'collapse'})
    }
  }

  handleItemClicked(item) {
    console.log("item clicked")
    var found = false
    var count = 0
    this.state.selected.forEach(elem => {
      console.log(elem)
      console.log(item)
      if (elem[0] === item[0]){
        var tempSelected = this.state.selected
        tempSelected.splice(count, 1)
        this.setState({selected: tempSelected})
        found = true
      }
      count += 1
    })


    if (!found) {
      var tempSelected = this.state.selected
      tempSelected.push(item)
      this.setState({selected: tempSelected})
    }
  }

  handleDropDownItemClicked (item) {
    if (!this.props.multi) {
      this.setState({selected: [item]})
    }
  }

  renderDropdownItem (item) {
    
    return(
      <div style={{display:'flex', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, flexDirection:'row'}} onClick={()=> this.handleDropDownItemClicked(item)}  >
        {this.props.multi && <input style={{display:'flex', marginRight:15}} type = "checkbox" onChange={() => this.handleItemClicked(item)} ref={ref => this.inputRefs.push(ref)} />}
        <text style={{display:'flex', fontSize:16, fontFamily:'-moz-initial', color:'black'}}>{item[1]}</text>
      </div>
    )
  }

  selectedToText () {
    var text = ""
    this.state.selected.forEach(elem => {
      text += " " + elem[1]
    })
    return text
  }
  
  render() {
    return(
        <div style={{display:'flex', flexDirection: 'column', width: "20%"}} >
            <text style={{display:'flex', paddingLeft: '5%', fontSize:12, color:"#3774CC"}}>
              {this.props.title}
            </text>

            <button onClick={() => this.handleDropDownClicked()} style={{backgroundColor: 'white', display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'flex-center', paddingLeft:'7%', paddingRight:'7%', paddingTop:'5%', paddingBottom:'5%', borderRadius:5, borderWidth:1, borderColor: "#3774CC", outlineStyle:'none'}}>
              <text style={{display:'flex', flexDirection: 'column', fontSize:16, fontFamily:'-moz-initial', boxShadow:"initial"}}>
                {this.selectedToText()}
              </text>
              <img src={DownCarrot} style={{width: 12, height:12, display:'flex', alignSelf:'center'}}/>

            </button>

            <div style={{display: 'flex', height: 200, borderRadius:10, marginTop:10, overflow:'scroll', flexDirection:'column', visibility: this.state.dropDownVisible}}>
              {this.items.map((item) => this.renderDropdownItem(item))}
            </div>
        </div>
    )
  }


}

export default Dropdown