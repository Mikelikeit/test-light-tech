import React from "react";
import {connect} from "react-redux";
import Giraffes from "./Giraffes";
import { addNewGiraffe, deleteGiraffe, } from "../../redux/giraffesReducer";


class GiraffesContainer extends React.Component{


    render() {
        return(
            <div>
                <Giraffes giraffes={ this.props.giraffes }
                          addNewGiraffe={ this.props.addNewGiraffe }
                          newgiraffes={ this.props.newgiraffes }
                          deleteGiraffe={ this.props.deleteGiraffe }

                />
            </div>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        giraffes: state.giraffes.giraffes,
        newgiraffes: state.giraffes.newgiraffes,
    }
};




export default connect (mapStateToProps,
    {addNewGiraffe,
        deleteGiraffe,
    })(GiraffesContainer)