import{Component}from"react";
import{NativeIconTextBoxComponent}from"./components/NativeIconTextBoxComponent";
//React Native accepts only five return key names on both platforms. Spanish names are
//accepted as aliases so an enumeration modelled in Spanish maps without a translation step.
const RETURN_KEYS={
	done:"done",		listo:"done",
	go:"go",		ir:"go",
	next:"next",		siguiente:"next",
	search:"search",	buscar:"search",
	send:"send",		enviar:"send",
};
const DEFAULT_RETURN_KEY="done";
export class NativeIconTextBox extends Component{
	constructor(props){
		super(props);
		this.onChangeText=this.onChangeText.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		this.onLeave=this.onLeave.bind(this);
		this.onLeftIconClick=this.onLeftIconClick.bind(this);
		this.onRightIconClick=this.onRightIconClick.bind(this);
	}
	//An action only runs when it is configured, permitted, and not already running.
	execute(action){
		if(!action)return;
		if(!action.canExecute||!action.isAuthorized)return;
		if(action.isExecuting&&action.disabledDuringExecution)return;
		action.execute();
	}
	onChangeText(text){
		const value=this.props.value;
		if(!value||value.status!="available"||value.readOnly)return;
		//The attribute is written before the action runs, so a nanoflow reads the new text.
		value.setValue(text);
		this.execute(this.props.onChangeAction);
	}
	onSubmit(){
		this.execute(this.props.onEnterAction);
	}
	onLeave(){
		this.execute(this.props.onLeaveAction);
	}
	onLeftIconClick(){
		this.execute(this.props.onLeftIconClick);
	}
	onRightIconClick(){
		this.execute(this.props.onRightIconClick);
	}
	//A DynamicValue only carries a value once it reports as available.
	resolve(dynamic){
		return dynamic!=null&&dynamic.status=="available"?dynamic.value:undefined;
	}
	//An Enum attribute arrives as its value name and a String as typed, so both are folded
	//to lower case before matching. Anything unrecognised falls back rather than being
	//handed to the input, which would leave the return key unlabelled. hasOwnProperty keeps
	//inherited names like "constructor" from matching.
	getReturnKeyType(){
		const value=this.resolve(this.props.returnKeyType);
		if(value==null)return DEFAULT_RETURN_KEY;
		const key=String(value).trim().toLowerCase();
		return Object.prototype.hasOwnProperty.call(RETURN_KEYS,key)?RETURN_KEYS[key]:DEFAULT_RETURN_KEY;
	}
	render(){
		const value=this.props.value;
		return(
			<NativeIconTextBoxComponent
				value={value&&value.status=="available"&&value.value!=null?value.value:""}
				placeholder={this.resolve(this.props.placeholder)}
				editable={!(value==null||value.readOnly)}
				returnKeyType={this.getReturnKeyType()}
				leftIcon={this.resolve(this.props.leftIcon)}
				rightIcon={this.resolve(this.props.rightIcon)}
				onChangeText={this.onChangeText}
				onSubmit={this.onSubmit}
				onLeave={this.onLeave}
				onLeftIconClick={this.props.onLeftIconClick?this.onLeftIconClick:null}
				onRightIconClick={this.props.onRightIconClick?this.onRightIconClick:null}
				style={this.props.style}
			/>
		);
	}
}
