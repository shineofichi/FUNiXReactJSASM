import { Component } from "react";

function showColumms(scale) {
    let classStr = "";
        switch(scale){
            default:
            case 7:
                classStr = "col-12 col-md-6 col-lg-4 p-1";
                return classStr;
            case 1:
                classStr = "col-12 col-md-12 col-lg-12 p-1";
                return classStr;
            case 2:
                classStr = "col-6 col-md-6 col-lg-6 p-1";
                return classStr;
            case 3:
                classStr = "col-4 col-md-4 col-lg-4 p-1";
                return classStr;
            case 4:
                classStr = "col-3 col-md-3 col-lg-3 p-1";
                return classStr;
            case 6:
                classStr = "col-2 col-md-2 col-lg-2 p-1";
                return classStr;
        }
    }
class ColumForm extends Component{
    render(){
        return(
            <form onSubmit={this.preventDefault}>
                <label>
                    <input 
                        type="radio" 
                        checked = {this.props === "7"}
                        value="7"
                        onChange={this.props.onHandleScale}
                        /> Tự động
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        checked = {this.scale === "1"}
                        value="1"
                        onChange={this.props.onHandleScale}
                        /> 1 cột
                    </label>
                    <label>
                    <input
                        type="radio" 
                        checked = {this.scale === "2"}
                        value="2"
                        onChange={this.props.onHandleScale}
                        /> 2 cột
                    </label>
                    <label>
                    <input
                        type="radio"
                        checked = {this.scale === "3"}
                        value="3"
                        onChange={this.props.onHandleScale}
                        /> 3 cột
                    </label>
                    <label>
                    <input
                        type="radio"
                        checked = {this.props.scaleCols === "4"}
                        value="4"
                        onChange={this.props.onHandleScale}
                        /> 4 cột
                    </label>
                    <label>
                    <input
                        type="radio"
                        checked = {this.props.scaleCols === "6"}
                        value="6"
                        onChange={this.props.onHandleScale}
                        /> 6 cột
                    </label>
                </form>
        )
    }
}
export default ColumForm