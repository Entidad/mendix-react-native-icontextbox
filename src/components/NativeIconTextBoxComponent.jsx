import{Component}from"react";
import{View,TextInput,Pressable,StyleSheet}from"react-native";
import{Icon}from"mendix/components/native/Icon";
import{mergeNativeStyles}from"@mendix/pluggable-widgets-tools";
//Icon size comes from fontSize so the icons scale with the same numbers as the text. Each
//side has its own key, so a leading and trailing icon can differ in size and colour.
const DEFAULT_ICON_SIZE=20;
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
	//Android centres multiline text vertically by default, which leaves the first line adrift
	//in a field that has room to grow. Anchoring to the top makes it fill downwards instead.
	inputStyle(){
		if(!this.props.multiline)return this.styles.input;
		return[this.styles.input,{textAlignVertical:"top"}];
	}
	render(){
		return(
			<View style={this.styles.container}>
				{this.renderIcon(this.props.leftIcon,this.styles.leftIcon,this.props.onLeftIconClick)}
				<TextInput
					style={this.inputStyle()}
					multiline={this.props.multiline}
					value={this.props.value}
					placeholder={this.props.placeholder}
					placeholderTextColor={this.styles.placeholderTextColor.color}
					editable={this.props.editable}
					onChangeText={this.props.onChangeText}
					onSubmitEditing={this.props.onSubmit}
					onBlur={this.props.onLeave}
					returnKeyType={this.props.returnKeyType||"done"}
				/>
				{this.renderIcon(this.props.rightIcon,this.styles.rightIcon,this.props.onRightIconClick)}
			</View>
		);
	}
}
