import { createElement } from "react";
const React = { createElement };

import { NativeStyleProperty } from "mendix/NativeStyleProperty";

import { SafeAreaView as com_mendix_widget_native_safeareaview_SafeAreaView } from "../widgets/com/mendix/widget/native/safeareaview/SafeAreaView";
import { Container } from "mendix/widgets/native/Container";
import { NativeKeyboardAvoiding as entidad_io_native_nativekeyboardavoiding_NativeKeyboardAvoiding } from "../widgets/entidad/io/native/nativekeyboardavoiding/NativeKeyboardAvoiding";
import { Scrollview as entidad_io_native_scrollview_Scrollview } from "../widgets/entidad/io/native/scrollview/Scrollview";
import { Placeholder } from "mendix/widgets/native/Placeholder";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import * as styles from "../styles.js";

const { $com_mendix_widget_native_safeareaview_SafeAreaView, $entidad_io_native_nativekeyboardavoiding_NativeKeyboardAvoiding, $Container, $Placeholder, $entidad_io_native_scrollview_Scrollview } = asPluginWidgets({ com_mendix_widget_native_safeareaview_SafeAreaView, entidad_io_native_nativekeyboardavoiding_NativeKeyboardAvoiding, Container, Placeholder, entidad_io_native_scrollview_Scrollview });

export const mainContent = (placeholder$Main, placeholder$Footer, placeholder$Header) => [
    <$com_mendix_widget_native_safeareaview_SafeAreaView key="l3.NativeMobile.Native_Chat.safeAreaView1"
        $widgetId="l3.NativeMobile.Native_Chat.safeAreaView1"
        content={[
            <$entidad_io_native_nativekeyboardavoiding_NativeKeyboardAvoiding key="l3.NativeMobile.Native_Chat.nativeKeyboardAvoiding1"
                $widgetId="l3.NativeMobile.Native_Chat.nativeKeyboardAvoiding1"
                content={[
                    <$Container key="l3.NativeMobile.Native_Chat.container2"
                        $widgetId="l3.NativeMobile.Native_Chat.container2"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.borderBottom, styles.backgroundPrimary ]
                        })}
                        content={[
                            <$Placeholder key="l3.NativeMobile.Native_Chat.Header"
                                $widgetId="l3.NativeMobile.Native_Chat.Header"
                                content={placeholder$Header()} />
                        ]}
                        accessible={false} />,
                    <$Container key="l3.NativeMobile.Native_Chat.container1"
                        $widgetId="l3.NativeMobile.Native_Chat.container1"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.flexMain, styles.backgroundSecondary ]
                        })}
                        content={[
                            <$entidad_io_native_scrollview_Scrollview key="l3.NativeMobile.Native_Chat.scrollview1"
                                $widgetId="l3.NativeMobile.Native_Chat.scrollview1"
                                basicContent={[
                                    <$Placeholder key="l3.NativeMobile.Native_Chat.Main"
                                        $widgetId="l3.NativeMobile.Native_Chat.Main"
                                        content={placeholder$Main()} />
                                ]}
                                scrollTimeout={0}
                                autoScroll={true}
                                scrollRegionThreshold={40}
                                debugon={true}
                                _={true}
                                style={NativeStyleProperty({
                                    "styles": [ styles.entidad_io_native_scrollview_Scrollview, styles.Scrollview ]
                                })} />
                        ]}
                        accessible={false} />,
                    <$Container key="l3.NativeMobile.Native_Chat.container3"
                        $widgetId="l3.NativeMobile.Native_Chat.container3"
                        style={NativeStyleProperty({
                            "styles": [ styles.Container, styles.borderTop, styles.backgroundPrimary ]
                        })}
                        content={[
                            <$Placeholder key="l3.NativeMobile.Native_Chat.Footer"
                                $widgetId="l3.NativeMobile.Native_Chat.Footer"
                                content={placeholder$Footer()} />
                        ]}
                        accessible={false} />
                ]}
                offset={0}
                behavior={"padding"}
                applyOnAndroid={false}
                style={NativeStyleProperty({
                    "styles": [ styles.entidad_io_native_nativekeyboardavoiding_NativeKeyboardAvoiding ]
                })} />
        ]}
        style={NativeStyleProperty({
            "styles": [ styles.com_mendix_widget_native_safeareaview_SafeAreaView ]
        })} />
];

export const sidebar = () => null;

