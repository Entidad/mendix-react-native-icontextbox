import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NativeIconProperty } from "mendix/NativeIconProperty";
import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { Button } from "mendix/widgets/native/Button";
import { Animation as com_mendix_widget_native_animation_Animation } from "../widgets/com/mendix/widget/native/animation/Animation";
import { IntroScreen as com_mendix_widget_native_introscreen_IntroScreen } from "../widgets/com/mendix/widget/native/introscreen/IntroScreen";
import { Container } from "mendix/widgets/native/Container";
import { Text } from "mendix/widgets/native/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/native/layouts/Atlas_Core.NativePhone_Default.js";

import * as styles from "../styles.js";

const { $com_mendix_widget_native_introscreen_IntroScreen, $Container, $com_mendix_widget_native_animation_Animation, $Text, $Button } = asPluginWidgets({ com_mendix_widget_native_introscreen_IntroScreen, Container, com_mendix_widget_native_animation_Animation, Text, Button });

const placeholder$Main = () => [
    <$com_mendix_widget_native_introscreen_IntroScreen key="p7.NativeMobile.Home_Native.introScreen1"
        $widgetId="p7.NativeMobile.Home_Native.introScreen1"
        slides={[
            {
                "name": "Start",
                "content": [
                    <$Container key="p7.NativeMobile.Home_Native.container4"
                        $widgetId="p7.NativeMobile.Home_Native.container4"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter ]
                        })}
                        content={[
                            <$Container key="p7.NativeMobile.Home_Native.container3"
                                $widgetId="p7.NativeMobile.Home_Native.container3"
                                style={NativeStyleProperty({
                                    "styles": [ styles.Container, styles.spacingOuterBottomSmaller ]
                                })}
                                content={[
                                    <$com_mendix_widget_native_animation_Animation key="p7.NativeMobile.Home_Native.animation1"
                                        $widgetId="p7.NativeMobile.Home_Native.animation1"
                                        content={[
                                            <$Text key="p7.NativeMobile.Home_Native.text1"
                                                $widgetId="p7.NativeMobile.Home_Native.text1"
                                                style={NativeStyleProperty({
                                                    "styles": [ styles.Text, styles.TextHeading1, styles.h1 ]
                                                })}
                                                text={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Welcome!" }, "args": {} }
                                                })}
                                                accessible={false} />
                                        ]}
                                        animationType={"in"}
                                        animationIn={"fadeInDownBig"}
                                        animationAttention={"none"}
                                        animationOut={"none"}
                                        duration={300}
                                        delay={0}
                                        easing={"ease_in_out"}
                                        count={1}
                                        direction={"normal"}
                                        style={NativeStyleProperty({
                                            "styles": [ styles.com_mendix_widget_native_animation_Animation ]
                                        })} />
                                ]}
                                accessible={false} />,
                            <$Container key="p7.NativeMobile.Home_Native.container2"
                                $widgetId="p7.NativeMobile.Home_Native.container2"
                                style={NativeStyleProperty({
                                    "styles": [ styles.Container, styles.flexRow ]
                                })}
                                content={[
                                    <$com_mendix_widget_native_animation_Animation key="p7.NativeMobile.Home_Native.animation2"
                                        $widgetId="p7.NativeMobile.Home_Native.animation2"
                                        content={[
                                            <$Text key="p7.NativeMobile.Home_Native.text3"
                                                $widgetId="p7.NativeMobile.Home_Native.text3"
                                                style={NativeStyleProperty({
                                                    "styles": [ styles.Text, styles.h1, styles.textLarge ]
                                                })}
                                                text={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "To your " }, "args": {} }
                                                })}
                                                accessible={false} />
                                        ]}
                                        animationType={"in"}
                                        animationIn={"fadeIn"}
                                        animationAttention={"none"}
                                        animationOut={"none"}
                                        duration={300}
                                        delay={300}
                                        easing={"ease_in_out"}
                                        count={1}
                                        direction={"normal"}
                                        style={NativeStyleProperty({
                                            "styles": [ styles.com_mendix_widget_native_animation_Animation ]
                                        })} />,
                                    <$com_mendix_widget_native_animation_Animation key="p7.NativeMobile.Home_Native.animation4"
                                        $widgetId="p7.NativeMobile.Home_Native.animation4"
                                        content={[
                                            <$com_mendix_widget_native_animation_Animation key="p7.NativeMobile.Home_Native.animation5"
                                                $widgetId="p7.NativeMobile.Home_Native.animation5"
                                                content={[
                                                    <$Text key="p7.NativeMobile.Home_Native.text6"
                                                        $widgetId="p7.NativeMobile.Home_Native.text6"
                                                        style={NativeStyleProperty({
                                                            "styles": [ styles.Text, styles.h1, styles.textLarge ]
                                                        })}
                                                        text={ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "native " }, "args": {} }
                                                        })}
                                                        accessible={false} />
                                                ]}
                                                animationType={"attention"}
                                                animationIn={"none"}
                                                animationAttention={"tada"}
                                                animationOut={"none"}
                                                duration={1000}
                                                delay={600}
                                                easing={"ease_in_out"}
                                                count={1}
                                                direction={"normal"}
                                                style={NativeStyleProperty({
                                                    "styles": [ styles.com_mendix_widget_native_animation_Animation ]
                                                })} />
                                        ]}
                                        animationType={"in"}
                                        animationIn={"fadeIn"}
                                        animationAttention={"none"}
                                        animationOut={"none"}
                                        duration={300}
                                        delay={300}
                                        easing={"ease_in_out"}
                                        count={1}
                                        direction={"normal"}
                                        style={NativeStyleProperty({
                                            "styles": [ styles.com_mendix_widget_native_animation_Animation ]
                                        })} />,
                                    <$com_mendix_widget_native_animation_Animation key="p7.NativeMobile.Home_Native.animation6"
                                        $widgetId="p7.NativeMobile.Home_Native.animation6"
                                        content={[
                                            <$Text key="p7.NativeMobile.Home_Native.text5"
                                                $widgetId="p7.NativeMobile.Home_Native.text5"
                                                style={NativeStyleProperty({
                                                    "styles": [ styles.Text, styles.h1, styles.textLarge ]
                                                })}
                                                text={ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "app" }, "args": {} }
                                                })}
                                                accessible={false} />
                                        ]}
                                        animationType={"in"}
                                        animationIn={"fadeIn"}
                                        animationAttention={"none"}
                                        animationOut={"none"}
                                        duration={300}
                                        delay={300}
                                        easing={"ease_in_out"}
                                        count={1}
                                        direction={"normal"}
                                        style={NativeStyleProperty({
                                            "styles": [ styles.com_mendix_widget_native_animation_Animation ]
                                        })} />
                                ]}
                                accessible={false} />
                        ]}
                        accessible={false} />
                ]
            }
        ]}
        showMode={"fullscreen"}
        buttonPattern={"nextDone"}
        slideIndicators={"between"}
        hideIndicatorLastSlide={true}
        identifier={"introScreenExampleIdentifier"}
        skipCaption={ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
        })}
        previousCaption={ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
        })}
        nextCaption={ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
        })}
        doneCaption={ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": "Lets go" }, "args": {} }
        })}
        doneIcon={NativeIconProperty({
            "icon": { "type": "glyph", "iconClass": "glyphicon-triangle-right" }
        })}
        style={NativeStyleProperty({
            "styles": [ styles.com_mendix_widget_native_introscreen_IntroScreen ]
        })} />,
    <$Container key="p7.NativeMobile.Home_Native.container5"
        $widgetId="p7.NativeMobile.Home_Native.container5"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.flexMain, styles.alignChildrenCenter, styles.justifyContentCenter, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.backgroundPrimary ]
        })}
        content={[
            <$Container key="p7.NativeMobile.Home_Native.container6"
                $widgetId="p7.NativeMobile.Home_Native.container6"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.spacingOuterBottomSmaller ]
                })}
                content={[
                    <$Text key="p7.NativeMobile.Home_Native.text7"
                        $widgetId="p7.NativeMobile.Home_Native.text7"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.TextHeading1, styles.h1 ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Go make it!" }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />,
            <$Container key="p7.NativeMobile.Home_Native.container7"
                $widgetId="p7.NativeMobile.Home_Native.container7"
                style={NativeStyleProperty({
                    "styles": [ styles.Container, styles.flexRow ]
                })}
                content={[
                    <$Text key="p7.NativeMobile.Home_Native.text11"
                        $widgetId="p7.NativeMobile.Home_Native.text11"
                        style={NativeStyleProperty({
                            "styles": [ styles.Text, styles.h1, styles.textLarge, styles.textCenter ]
                        })}
                        text={ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Make changes, run locally, preview." }, "args": {} }
                        })}
                        accessible={false} />
                ]}
                accessible={false} />
        ]}
        accessible={false} />,
    <$Container key="p7.NativeMobile.Home_Native.container1"
        $widgetId="p7.NativeMobile.Home_Native.container1"
        style={NativeStyleProperty({
            "styles": [ styles.Container, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]
        })}
        content={[
            <$Button key="p7.NativeMobile.Home_Native.actionButton1"
                $widgetId="p7.NativeMobile.Home_Native.actionButton1"
                style={NativeStyleProperty({
                    "styles": [ styles.ActionButton ]
                })}
                caption={ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Chat demo" }, "args": {} }
                })}
                onClick={ActionProperty({
                    "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/native/nanoflows/NativeMobile.NAV_Chat_demo").NAV_Chat_demo }, "disabledDuringExecution": true }
                })}
                screenReaderCaption={ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                })}
                screenReaderHint={ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                })}
                accessible={true} />
        ]}
        accessible={false} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = {};
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar();

