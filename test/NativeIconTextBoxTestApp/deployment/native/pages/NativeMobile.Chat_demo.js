import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NativeIconProperty } from "mendix/NativeIconProperty";
import { NativeStaticImageProperty } from "mendix/NativeStaticImageProperty";
import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { Image as com_mendix_widget_native_image_Image } from "../widgets/com/mendix/widget/native/image/Image";
import { ListViewSwipe as com_mendix_widget_native_listviewswipe_ListViewSwipe } from "../widgets/com/mendix/widget/native/listviewswipe/ListViewSwipe";
import { ConditionalVisibilityWrapper } from "mendix/widgets/native/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/native/Container";
import { NativeIconTextBox as entidad_io_native_nativeicontextbox_NativeIconTextBox } from "../widgets/entidad/io/native/nativeicontextbox/NativeIconTextBox";
import { Image } from "mendix/widgets/native/Image";
import { NativeBackButton as itvisors_nativebackbutton_NativeBackButton } from "../widgets/itvisors/nativebackbutton/NativeBackButton";
import { Text } from "mendix/widgets/native/Text";
import { View } from "mendix/widgets/native/View";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/native/layouts/NativeMobile.Native_Chat.js";

import * as styles from "../styles.js";

import Atlas_NativeMobile_Content$Native_Content$Avatar$png from "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/native/img/Atlas_NativeMobile_Content$Native_Content$Avatar.png";

const { $Container, $View, $itvisors_nativebackbutton_NativeBackButton, $Text, $com_mendix_widget_native_listviewswipe_ListViewSwipe, $Image, $entidad_io_native_nativeicontextbox_NativeIconTextBox, $ConditionalVisibilityWrapper, $com_mendix_widget_native_image_Image } = asPluginWidgets({ Container, View, itvisors_nativebackbutton_NativeBackButton, Text, com_mendix_widget_native_listviewswipe_ListViewSwipe, Image, entidad_io_native_nativeicontextbox_NativeIconTextBox, ConditionalVisibilityWrapper, com_mendix_widget_native_image_Image });

const placeholder$Main = () => [
    <$com_mendix_widget_native_listviewswipe_ListViewSwipe key="p1.NativeMobile.Chat_demo.listViewSwipe1"
        $widgetId="p1.NativeMobile.Chat_demo.listViewSwipe1"
        content={[
            <$View key="p1.NativeMobile.Chat_demo.layoutGrid9"
                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid9"
                style={NativeStyleProperty({
                    "styles": [ styles.LayoutGrid, styles.borderBottom, styles.borderTop, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
                })}
                content={[
                    <$View key="p1.NativeMobile.Chat_demo.layoutGrid9$row0"
                        $widgetId="p1.NativeMobile.Chat_demo.layoutGrid9$row0"
                        style={NativeStyleProperty({
                            "styles": [ styles.row, styles.noGuttersRow ]
                        })}
                        content={[
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid9$row0$column0"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid9$row0$column0"
                                style={NativeStyleProperty({
                                    "styles": [ styles.colFitToContent, styles.noGutters ]
                                })}
                                content={[
                                    <$Image key="p1.NativeMobile.Chat_demo.image10"
                                        $widgetId="p1.NativeMobile.Chat_demo.image10"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Image, styles.imageCircleMedium, styles.spacingOuterRightMedium, styles.spacingOuterTopSmall ]
                                        })}
                                        source={NativeStaticImageProperty({
                                            "image": Atlas_NativeMobile_Content$Native_Content$Avatar$png
                                        })}
                                        accessible={false} />
                                ]} />,
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid9$row0$column1"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid9$row0$column1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.col, styles.noGutters ]
                                })}
                                content={[
                                    <$Text key="p1.NativeMobile.Chat_demo.text27"
                                        $widgetId="p1.NativeMobile.Chat_demo.text27"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textLarge ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Let's get a coffee!" }, "args": {} }
                                        })}
                                        accessible={false} />,
                                    <$Text key="p1.NativeMobile.Chat_demo.text28"
                                        $widgetId="p1.NativeMobile.Chat_demo.text28"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textParagraph ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Karen Narish" }, "args": {} }
                                        })}
                                        accessible={false} />
                                ]} />
                        ]} />
                ]} />
        ]}
        left={[
            <$Container key="p1.NativeMobile.Chat_demo.container25"
                $widgetId="p1.NativeMobile.Chat_demo.container25"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandPrimary, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text29"
                        $widgetId="p1.NativeMobile.Chat_demo.text29"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Forward" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container26"
                $widgetId="p1.NativeMobile.Chat_demo.container26"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandSuccess, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text31"
                        $widgetId="p1.NativeMobile.Chat_demo.text31"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Reply" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        leftRenderMode={"buttons"}
        right={[
            <$Container key="p1.NativeMobile.Chat_demo.container30"
                $widgetId="p1.NativeMobile.Chat_demo.container30"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandWarning, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text32"
                        $widgetId="p1.NativeMobile.Chat_demo.text32"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Flag" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container31"
                $widgetId="p1.NativeMobile.Chat_demo.container31"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandDanger, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text33"
                        $widgetId="p1.NativeMobile.Chat_demo.text33"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        rightRenderMode={"buttons"}
        style={NativeStyleProperty({
            "styles": [ styles.com_mendix_widget_native_listviewswipe_ListViewSwipe ]
        })} />,
    <$com_mendix_widget_native_listviewswipe_ListViewSwipe key="p1.NativeMobile.Chat_demo.listViewSwipe2"
        $widgetId="p1.NativeMobile.Chat_demo.listViewSwipe2"
        content={[
            <$View key="p1.NativeMobile.Chat_demo.layoutGrid10"
                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid10"
                style={NativeStyleProperty({
                    "styles": [ styles.LayoutGrid, styles.borderBottom, styles.borderTop, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
                })}
                content={[
                    <$View key="p1.NativeMobile.Chat_demo.layoutGrid10$row0"
                        $widgetId="p1.NativeMobile.Chat_demo.layoutGrid10$row0"
                        style={NativeStyleProperty({
                            "styles": [ styles.row, styles.noGuttersRow ]
                        })}
                        content={[
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid10$row0$column0"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid10$row0$column0"
                                style={NativeStyleProperty({
                                    "styles": [ styles.colFitToContent, styles.noGutters ]
                                })}
                                content={[
                                    <$Image key="p1.NativeMobile.Chat_demo.image11"
                                        $widgetId="p1.NativeMobile.Chat_demo.image11"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Image, styles.imageCircleMedium, styles.spacingOuterRightMedium, styles.spacingOuterTopSmall ]
                                        })}
                                        source={NativeStaticImageProperty({
                                            "image": Atlas_NativeMobile_Content$Native_Content$Avatar$png
                                        })}
                                        accessible={false} />
                                ]} />,
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid10$row0$column1"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid10$row0$column1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.col, styles.noGutters ]
                                })}
                                content={[
                                    <$Text key="p1.NativeMobile.Chat_demo.text30"
                                        $widgetId="p1.NativeMobile.Chat_demo.text30"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textLarge ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "I'm running late!" }, "args": {} }
                                        })}
                                        accessible={false} />,
                                    <$Text key="p1.NativeMobile.Chat_demo.text34"
                                        $widgetId="p1.NativeMobile.Chat_demo.text34"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textParagraph ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Karen Narish" }, "args": {} }
                                        })}
                                        accessible={false} />
                                ]} />
                        ]} />
                ]} />
        ]}
        left={[
            <$Container key="p1.NativeMobile.Chat_demo.container27"
                $widgetId="p1.NativeMobile.Chat_demo.container27"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandPrimary, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text35"
                        $widgetId="p1.NativeMobile.Chat_demo.text35"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Forward" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container28"
                $widgetId="p1.NativeMobile.Chat_demo.container28"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandSuccess, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text36"
                        $widgetId="p1.NativeMobile.Chat_demo.text36"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Reply" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        leftRenderMode={"buttons"}
        right={[
            <$Container key="p1.NativeMobile.Chat_demo.container32"
                $widgetId="p1.NativeMobile.Chat_demo.container32"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandWarning, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text37"
                        $widgetId="p1.NativeMobile.Chat_demo.text37"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Flag" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container33"
                $widgetId="p1.NativeMobile.Chat_demo.container33"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandDanger, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text38"
                        $widgetId="p1.NativeMobile.Chat_demo.text38"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        rightRenderMode={"buttons"}
        style={NativeStyleProperty({
            "styles": [ styles.com_mendix_widget_native_listviewswipe_ListViewSwipe ]
        })} />,
    <$com_mendix_widget_native_listviewswipe_ListViewSwipe key="p1.NativeMobile.Chat_demo.listViewSwipe3"
        $widgetId="p1.NativeMobile.Chat_demo.listViewSwipe3"
        content={[
            <$View key="p1.NativeMobile.Chat_demo.layoutGrid11"
                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid11"
                style={NativeStyleProperty({
                    "styles": [ styles.LayoutGrid, styles.borderBottom, styles.borderTop, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
                })}
                content={[
                    <$View key="p1.NativeMobile.Chat_demo.layoutGrid11$row0"
                        $widgetId="p1.NativeMobile.Chat_demo.layoutGrid11$row0"
                        style={NativeStyleProperty({
                            "styles": [ styles.row, styles.noGuttersRow ]
                        })}
                        content={[
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid11$row0$column0"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid11$row0$column0"
                                style={NativeStyleProperty({
                                    "styles": [ styles.colFitToContent, styles.noGutters ]
                                })}
                                content={[
                                    <$Image key="p1.NativeMobile.Chat_demo.image12"
                                        $widgetId="p1.NativeMobile.Chat_demo.image12"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Image, styles.imageCircleMedium, styles.spacingOuterRightMedium, styles.spacingOuterTopSmall ]
                                        })}
                                        source={NativeStaticImageProperty({
                                            "image": Atlas_NativeMobile_Content$Native_Content$Avatar$png
                                        })}
                                        accessible={false} />
                                ]} />,
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid11$row0$column1"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid11$row0$column1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.col, styles.noGutters ]
                                })}
                                content={[
                                    <$Text key="p1.NativeMobile.Chat_demo.text39"
                                        $widgetId="p1.NativeMobile.Chat_demo.text39"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textLarge ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Parking!" }, "args": {} }
                                        })}
                                        accessible={false} />,
                                    <$Text key="p1.NativeMobile.Chat_demo.text40"
                                        $widgetId="p1.NativeMobile.Chat_demo.text40"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textParagraph ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Karen Narish" }, "args": {} }
                                        })}
                                        accessible={false} />
                                ]} />
                        ]} />
                ]} />
        ]}
        left={[
            <$Container key="p1.NativeMobile.Chat_demo.container29"
                $widgetId="p1.NativeMobile.Chat_demo.container29"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandPrimary, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text41"
                        $widgetId="p1.NativeMobile.Chat_demo.text41"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Forward" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container34"
                $widgetId="p1.NativeMobile.Chat_demo.container34"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandSuccess, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text42"
                        $widgetId="p1.NativeMobile.Chat_demo.text42"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Reply" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        leftRenderMode={"buttons"}
        right={[
            <$Container key="p1.NativeMobile.Chat_demo.container35"
                $widgetId="p1.NativeMobile.Chat_demo.container35"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandWarning, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text43"
                        $widgetId="p1.NativeMobile.Chat_demo.text43"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Flag" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container36"
                $widgetId="p1.NativeMobile.Chat_demo.container36"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandDanger, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text44"
                        $widgetId="p1.NativeMobile.Chat_demo.text44"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        rightRenderMode={"buttons"}
        style={NativeStyleProperty({
            "styles": [ styles.com_mendix_widget_native_listviewswipe_ListViewSwipe ]
        })} />,
    <$com_mendix_widget_native_listviewswipe_ListViewSwipe key="p1.NativeMobile.Chat_demo.listViewSwipe4"
        $widgetId="p1.NativeMobile.Chat_demo.listViewSwipe4"
        content={[
            <$View key="p1.NativeMobile.Chat_demo.layoutGrid12"
                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid12"
                style={NativeStyleProperty({
                    "styles": [ styles.LayoutGrid, styles.borderBottom, styles.borderTop, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
                })}
                content={[
                    <$View key="p1.NativeMobile.Chat_demo.layoutGrid12$row0"
                        $widgetId="p1.NativeMobile.Chat_demo.layoutGrid12$row0"
                        style={NativeStyleProperty({
                            "styles": [ styles.row, styles.noGuttersRow ]
                        })}
                        content={[
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid12$row0$column0"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid12$row0$column0"
                                style={NativeStyleProperty({
                                    "styles": [ styles.colFitToContent, styles.noGutters ]
                                })}
                                content={[
                                    <$Image key="p1.NativeMobile.Chat_demo.image13"
                                        $widgetId="p1.NativeMobile.Chat_demo.image13"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Image, styles.imageCircleMedium, styles.spacingOuterRightMedium, styles.spacingOuterTopSmall ]
                                        })}
                                        source={NativeStaticImageProperty({
                                            "image": Atlas_NativeMobile_Content$Native_Content$Avatar$png
                                        })}
                                        accessible={false} />
                                ]} />,
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid12$row0$column1"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid12$row0$column1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.col, styles.noGutters ]
                                })}
                                content={[
                                    <$Text key="p1.NativeMobile.Chat_demo.text45"
                                        $widgetId="p1.NativeMobile.Chat_demo.text45"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textLarge ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "I'm sitting in the outside patio!" }, "args": {} }
                                        })}
                                        accessible={false} />,
                                    <$Text key="p1.NativeMobile.Chat_demo.text46"
                                        $widgetId="p1.NativeMobile.Chat_demo.text46"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.textParagraph ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Karen Narish" }, "args": {} }
                                        })}
                                        accessible={false} />
                                ]} />
                        ]} />
                ]} />
        ]}
        left={[
            <$Container key="p1.NativeMobile.Chat_demo.container37"
                $widgetId="p1.NativeMobile.Chat_demo.container37"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandPrimary, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text47"
                        $widgetId="p1.NativeMobile.Chat_demo.text47"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Forward" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container38"
                $widgetId="p1.NativeMobile.Chat_demo.container38"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandSuccess, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text48"
                        $widgetId="p1.NativeMobile.Chat_demo.text48"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Reply" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        leftRenderMode={"buttons"}
        right={[
            <$Container key="p1.NativeMobile.Chat_demo.container39"
                $widgetId="p1.NativeMobile.Chat_demo.container39"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandWarning, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text49"
                        $widgetId="p1.NativeMobile.Chat_demo.text49"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Flag" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p1.NativeMobile.Chat_demo.container40"
                $widgetId="p1.NativeMobile.Chat_demo.container40"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.backgroundBrandDanger, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                })}
                content={[
                    <$Text key="p1.NativeMobile.Chat_demo.text50"
                        $widgetId="p1.NativeMobile.Chat_demo.text50"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.textWhite, styles.textSmall ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        rightRenderMode={"buttons"}
        style={NativeStyleProperty({
            "styles": [ styles.com_mendix_widget_native_listviewswipe_ListViewSwipe ]
        })} />
];

const placeholder$Footer = () => [
    <$Container key="p1.NativeMobile.Chat_demo.container2"
        $widgetId="p1.NativeMobile.Chat_demo.container2"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.spacingInnerTopLarger, styles.spacingInnerBottomLarger, styles.spacingInnerLeftLarger, styles.spacingInnerRightLarger ]
        })}
        content={[
            <$View key="p1.NativeMobile.Chat_demo.layoutGrid2"
                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid2"
                style={NativeStyleProperty({
                    "styles": [ styles.LayoutGrid ]
                })}
                content={[
                    <$View key="p1.NativeMobile.Chat_demo.layoutGrid2$row0"
                        $widgetId="p1.NativeMobile.Chat_demo.layoutGrid2$row0"
                        style={NativeStyleProperty({
                            "styles": [ styles.row, styles.noGuttersRow ]
                        })}
                        content={[
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid2$row0$column0"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid2$row0$column0"
                                style={NativeStyleProperty({
                                    "styles": [ styles.col, styles.alignSelfCenter, styles.noGutters ]
                                })}
                                content={[
                                    <$entidad_io_native_nativeicontextbox_NativeIconTextBox key="p1.NativeMobile.Chat_demo.nativeIconTextBox1"
                                        $widgetId="p1.NativeMobile.Chat_demo.nativeIconTextBox1"
                                        value={AttributeProperty({
                                            "scope": "$MessagesHelper",
                                            "path": "",
                                            "entity": "NativeMobile.MessagesHelper",
                                            "attribute": "Search",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                        })}
                                        placeholder={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Send message" }, "args": {} }
                                        })}
                                        multiline={true}
                                        keyboardType={"default"}
                                        returnKeyType={AttributeProperty({
                                            "scope": "$MessagesHelper",
                                            "path": "",
                                            "entity": "NativeMobile.MessagesHelper",
                                            "attribute": "MessageBoxReturnKey",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                        })}
                                        leftIcon={NativeIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-paperclip" }
                                        })}
                                        rightIcon={NativeIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                        })}
                                        expandedAttr={AttributeProperty({
                                            "scope": "$MessagesHelper",
                                            "path": "",
                                            "entity": "NativeMobile.MessagesHelper",
                                            "attribute": "MessageBoxExpanded",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                        })}
                                        expandedIcons={"hideBoth"}
                                        onRightIconClick={ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "MessagesHelper": { "widget": "$MessagesHelper", "source": "object" } }, "config": { "nanoflow": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/native/nanoflows/NativeMobile.ACT_Chat_sendMessage").ACT_Chat_sendMessage }, "disabledDuringExecution": false },
                                            "argumentTypes": { }
                                        })}
                                        style={NativeStyleProperty({
                                            "styles": [ styles.entidad_io_native_nativeicontextbox_NativeIconTextBox, styles.customChatComposer ]
                                        })} />
                                ]} />,
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid2$row0$column1"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid2$row0$column1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.colFitToContent, styles.alignSelfCenter, styles.noGutters ]
                                })}
                                content={[
                                    <$ConditionalVisibilityWrapper key="p1.NativeMobile.Chat_demo.container3$visibility"
                                        $widgetId="p1.NativeMobile.Chat_demo.container3$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "MessagesHelper", "path": "MessageBoxExpanded" }, "args": { "MessagesHelper": { "widget": "$MessagesHelper", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p1.NativeMobile.Chat_demo.container3"
                                                $widgetId="p1.NativeMobile.Chat_demo.container3"
                                                style={NativeStyleProperty({
                                                    "styles": [ styles.Container, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
                                                })}
                                                onClick={ActionProperty({
                                                    "action": { "type": "callNanoflow", "argMap": { "MessagesHelper": { "widget": "$MessagesHelper", "source": "object" } }, "config": { "nanoflow": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/native/nanoflows/NativeMobile.ACT_Chat_sendMessage").ACT_Chat_sendMessage }, "disabledDuringExecution": true }
                                                })}
                                                content={[
                                                    <$com_mendix_widget_native_image_Image key="p1.NativeMobile.Chat_demo.image1"
                                                        $widgetId="p1.NativeMobile.Chat_demo.image1"
                                                        datasource={"icon"}
                                                        imageUrl={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        imageIcon={NativeIconProperty({
                                                            "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                        })}
                                                        isBackgroundImage={false}
                                                        resizeMode={"contain"}
                                                        opacity={100}
                                                        widthUnit={"auto"}
                                                        customWidth={100}
                                                        heightUnit={"auto"}
                                                        customHeight={100}
                                                        iconSize={24}
                                                        accessible={"no"}
                                                        screenReaderCaption={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        screenReaderHint={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })}
                                                        onClickType={"action"}
                                                        style={NativeStyleProperty({
                                                            "styles": [ styles.com_mendix_widget_native_image_Image ]
                                                        })} />
                                                ]}
                                                accessible={false} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]}
        accessible={false} />
];

const placeholder$Header = () => [
    <$Container key="p1.NativeMobile.Chat_demo.container1"
        $widgetId="p1.NativeMobile.Chat_demo.container1"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
        })}
        content={[
            <$View key="p1.NativeMobile.Chat_demo.layoutGrid1"
                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid1"
                style={NativeStyleProperty({
                    "styles": [ styles.LayoutGrid ]
                })}
                content={[
                    <$View key="p1.NativeMobile.Chat_demo.layoutGrid1$row0"
                        $widgetId="p1.NativeMobile.Chat_demo.layoutGrid1$row0"
                        style={NativeStyleProperty({
                            "styles": [ styles.row ]
                        })}
                        content={[
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid1$row0$column0"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid1$row0$column0"
                                style={NativeStyleProperty({
                                    "styles": [ styles.colFitToContent, styles.alignSelfCenter ]
                                })}
                                content={[
                                    <$itvisors_nativebackbutton_NativeBackButton key="p1.NativeMobile.Chat_demo.nativeBackButton1"
                                        $widgetId="p1.NativeMobile.Chat_demo.nativeBackButton1"
                                        caption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })}
                                        darkMode={"device"}
                                        onClickAction={ActionProperty({
                                            "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "argumentTypes": { }
                                        })}
                                        a11yEnabled={false}
                                        a11yLabel={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })}
                                        a11yHint={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })}
                                        style={NativeStyleProperty({
                                            "styles": [ styles.itvisors_nativebackbutton_NativeBackButton ]
                                        })} />
                                ]} />,
                            <$View key="p1.NativeMobile.Chat_demo.layoutGrid1$row0$column1"
                                $widgetId="p1.NativeMobile.Chat_demo.layoutGrid1$row0$column1"
                                style={NativeStyleProperty({
                                    "styles": [ styles.col ]
                                })}
                                content={[
                                    <$Text key="p1.NativeMobile.Chat_demo.text1"
                                        $widgetId="p1.NativeMobile.Chat_demo.text1"
                                        style={NativeStyleProperty({
                                            "styles": [ styles.Text, styles.TextHeading4 ]
                                        })}
                                        text={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Chat demo" }, "args": {} }
                                        })}
                                        screenReaderCaption={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })}
                                        screenReaderHint={ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })}
                                        accessible={true} />
                                ]} />
                        ]} />
                ]} />
        ]}
        accessible={false} />
];

export const $$title = t([
    "Chat demo"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = {
  "$MessagesHelper": {
    "kind": "object"
  }
};
export const $$page = () => mainContent(placeholder$Main, placeholder$Footer, placeholder$Header);

export const $$sidebar = () => sidebar(placeholder$Footer, placeholder$Header);

