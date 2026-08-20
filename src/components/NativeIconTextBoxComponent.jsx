import{Component}from"react";
import{View,TextInput,Pressable,StyleSheet}from"react-native";
import{Icon}from"mendix/components/native/Icon";
import{mergeNativeStyles}from"@mendix/pluggable-widgets-tools";
//Icon size comes from fontSize so the icons scale with the same numbers as the text. Each
//side has its own key, so a leading and trailing icon can differ in size and colour.
const DEFAULT_ICON_SIZE=20;
//Slack for font metric rounding, so a single line never reads as grown.
const EXPAND_TOLERANCE=4;
const defaultStyle={
	container:{
		flexDirection:"row",
		alignItems:"center",
		borderWidth:1,
		borderColor:"#CED0D3",
		borderRadius:4,
		backgroundColor:"#FFFFFF",
		paddingHorizontal:12,
	},
	//Merged over container once a multiline field has expanded, so the field can change shape
	//when the icons step aside. Empty by default, which leaves the shape unchanged.
	containerExpanded:{
	},
	input:{
		flex:1,
		fontSize:16,
		color:"#0A1325",
		paddingVertical:12,
	},
	leftIcon:{
		fontSize:DEFAULT_ICON_SIZE,
		color:"#6C717C",
		marginRight:8,
	},
	rightIcon:{
		fontSize:DEFAULT_ICON_SIZE,
		color:"#6C717C",
		marginLeft:8,
	},
	placeholderTextColor:{
		color:"#9DA1A8",
	},
};
export class NativeIconTextBoxComponent extends Component{
	styles=mergeNativeStyles(defaultStyle,this.props.style);
	constructor(props){
		super(props);
		//text holds what the user has typed since focusing, or null when they have not typed
		//yet. Only once it is set does it take over the display, which keeps a numeric
		//attribute from reformatting mid-edit: typing "1234" into a Decimal would otherwise
		//come back as "1,234" with the cursor thrown to the end.
		//expanded latches once the content grows past one line and only resets when the field
		//empties or loses focus. Recomputing it from the measured height each time would
		//oscillate: hiding the icons widens the input, the text may then fit on one line
		//again, the icons return, and it wraps once more.
		this.state={editing:false,text:null,expanded:false,baseHeight:null};
		this.onFocus=this.onFocus.bind(this);
		this.onBlur=this.onBlur.bind(this);
		this.onChangeText=this.onChangeText.bind(this);
		this.onContentSizeChange=this.onContentSizeChange.bind(this);
	}
	//The first measurement is the height of a single line, so anything meaningfully taller
	//means the text has wrapped or a newline was entered.
	onContentSizeChange(event){
		if(!this.props.multiline)return;
		const height=event&&event.nativeEvent&&event.nativeEvent.contentSize?event.nativeEvent.contentSize.height:null;
		if(height==null)return;
		const base=this.state.baseHeight==null?height:Math.min(this.state.baseHeight,height);
		const grown=height>base+EXPAND_TOLERANCE;
		if(base!==this.state.baseHeight||(grown&&!this.state.expanded)){
			this.setState({baseHeight:base,expanded:this.state.expanded||grown});
		}
	}
	componentDidMount(){
		//A remount - a data view refreshed by the send action, for example - starts collapsed
		//with no transition for componentDidUpdate to report. Publishing here clears a stale
		//true that would otherwise leave an outside control on screen.
		if(this.props.onExpandedChange)this.props.onExpandedChange(this.state.expanded);
	}
	componentDidUpdate(prevProps,prevState){
		//Collapse when the model empties the value, which is what a send action does. Measured
		//against the attribute rather than what is on screen: the typed text is still held in
		//state at that moment, so the displayed value would not read as empty and the field
		//would stay expanded. Clearing text too lets the emptied attribute show through.
		if(this.state.expanded&&(this.props.value==null||this.props.value==="")){
			this.setState({expanded:false,text:null});
		}
		//Reported from here rather than from each setState, so every route into the state -
		//growing, emptying, blurring - publishes exactly once.
		if(prevState.expanded!==this.state.expanded&&this.props.onExpandedChange){
			this.props.onExpandedChange(this.state.expanded);
		}
	}
	//Which icons survive once the field has expanded.
	iconsHidden(){
		if(!this.props.multiline||!this.state.expanded)return{leading:false,trailing:false};
		const mode=this.props.expandedIcons;
		if(mode=="hideBoth")return{leading:true,trailing:true};
		if(mode=="hideLeading")return{leading:true,trailing:false};
		return{leading:false,trailing:false};
	}
	onFocus(){
		//Deliberately no snapshot of the current value. The field keeps rendering the
		//attribute until the user types, so an On enter action that changes or clears the
		//value is reflected. Capturing the value here would freeze whatever it was before
		//that action ran.
		this.setState({editing:true,text:null});
		if(this.props.onEnter)this.props.onEnter();
	}
	onBlur(){
		//Dropping back to displayValue lets the platform's formatting reappear.
		this.setState({editing:false,text:null,expanded:false});
		if(this.props.onLeave)this.props.onLeave();
	}
	onChangeText(text){
		this.setState({text:text});
		if(this.props.onChangeText)this.props.onChangeText(text);
	}
	displayed(){
		if(this.state.editing&&this.state.text!=null)return this.state.text;
		return this.props.value!=null?this.props.value:"";
	}
	//fontSize doubles as the icon size. A fallback keeps the icon visible if a style class
	//supplies the key without one, rather than collapsing it to nothing.
	iconSize(style){
		const size=style!=null?style.fontSize:undefined;
		return typeof size=="number"&&size>0?size:DEFAULT_ICON_SIZE;
	}
	//Spacing belongs on the wrapper, not on the glyph, so it is split off from the style.
	iconSpacing(style){
		const flat=StyleSheet.flatten(style)||{};
		const{fontSize,color,...rest}=flat;
		return rest;
	}
	renderIcon(icon,style,onClick){
		if(icon==null)return null;
		const glyph=(
			<View style={this.iconSpacing(style)}>
				<Icon icon={icon} size={this.iconSize(style)} color={style!=null?style.color:undefined}/>
			</View>
		);
		//Only tappable when an action is configured, so a decorative icon does not swallow
		//taps meant for the input.
		return onClick!=null?<Pressable onPress={onClick}>{glyph}</Pressable>:glyph;
	}
	//containerExpanded layers over container while the field is expanded, so a class can, for
	//example, flatten the rounded ends once the icons are out of the way and the text is
	//using the full width.
	containerStyle(){
		if(!this.props.multiline||!this.state.expanded)return this.styles.container;
		return[this.styles.container,this.styles.containerExpanded];
	}
	//Android centres multiline text vertically by default, which leaves the first line adrift
	//in a field that has room to grow. Anchoring to the top makes it fill downwards instead.
	inputStyle(){
		if(!this.props.multiline)return this.styles.input;
		return[this.styles.input,{textAlignVertical:"top"}];
	}
	render(){
		const hidden=this.iconsHidden();
		return(
			<View style={this.containerStyle()}>
				{hidden.leading?null:this.renderIcon(this.props.leftIcon,this.styles.leftIcon,this.props.onLeftIconClick)}
				<TextInput
					style={this.inputStyle()}
					multiline={this.props.multiline}
					keyboardType={this.props.keyboardType||"default"}
					value={this.displayed()}
					placeholder={this.props.placeholder}
					placeholderTextColor={this.styles.placeholderTextColor.color}
					editable={this.props.editable}
					onChangeText={this.onChangeText}
					onFocus={this.onFocus}
					onContentSizeChange={this.onContentSizeChange}
					onSubmitEditing={this.props.onSubmit}
					onBlur={this.onBlur}
					returnKeyType={this.props.returnKeyType||"done"}
				/>
				{hidden.trailing?null:this.renderIcon(this.props.rightIcon,this.styles.rightIcon,this.props.onRightIconClick)}
			</View>
		);
	}
}
