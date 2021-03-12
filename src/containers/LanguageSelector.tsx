import {ApplicationState} from '../types';
import * as actions from '../actions/';
import {connect} from 'react-redux';
import LanguageSelector from "../components/menu/LanguageSelector";
import {Dispatch} from "redux";


export function mapStateToProps(state: ApplicationState) {
    return {};
}

export function mapDispatchToProps(dispatch: Dispatch<actions.Action>) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
