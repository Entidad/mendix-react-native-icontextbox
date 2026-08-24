import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { PlaceholderProperty } from "mendix/PlaceholderProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import * as ComboboxWidgetModule from "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.get() || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.get();   
import "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.get() || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.get();   
import "C:/mx/widgets/mendix-react-native-icontextbox/test/NativeIconTextBoxTestApp/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { NavigationTree } from "mendix/widgets/web/NavigationTree";
import { Placeholder } from "mendix/widgets/web/Placeholder";
import { ScrollContainer } from "mendix/widgets/web/ScrollContainer";
import { SidebarToggle } from "mendix/widgets/web/SidebarToggle";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { OCH_UpdateUserLanguage } from "../nanoflows/Atlas_Core.OCH_UpdateUserLanguage.js";

const { $ScrollContainer, $Fragment, $Div, $Container, $SidebarToggle, $Image, $DataView, $FormGroup, $Combobox, $NavigationTree, $Placeholder } = asPluginWidgets({ ScrollContainer, Fragment, Div, Container, SidebarToggle, Image, DataView, FormGroup, Combobox, NavigationTree, Placeholder });

const region$Main = [
    <$ScrollContainer key={"l.Atlas_Core.Atlas_Default.layoutContainer"}
        $widgetId={"l.Atlas_Core.Atlas_Default.layoutContainer"}
        class={"mx-name-layoutContainer"}
        scrollPerRegion={true}
        layoutMode={"headline"}
        top={{
            "enabled": true,
            "content": [
                <$Fragment key={"l.Atlas_Core.Atlas_Default.snippetCall1"}
                    $widgetId={"l.Atlas_Core.Atlas_Default.snippetCall1"} />,
                <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid1"}
                    $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid1"}
                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                    content={[
                        <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid1$row0"}
                            $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid1$row0"}
                            class={"row"}
                            content={[
                                <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0"}
                                    $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid1$row0$column0"}
                                    class={"col-lg-12 col-md-12 col-12"}
                                    content={[
                                        <$Container key={"l.Atlas_Core.Atlas_Default.container1"}
                                            $widgetId={"l.Atlas_Core.Atlas_Default.container1"}
                                            class={"mx-name-container1 topbar-content"}
                                            renderMode={"div"}
                                            content={[
                                                <$SidebarToggle key={"l.Atlas_Core.Atlas_Default.sidebarToggle3"}
                                                    $widgetId={"l.Atlas_Core.Atlas_Default.sidebarToggle3"}
                                                    buttonId={"l.Atlas_Core.Atlas_Default.sidebarToggle3"}
                                                    renderType={"button"}
                                                    buttonClass={"btn-primary"}
                                                    caption={ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })}
                                                    tooltip={TextProperty({
                                                        "value": "Toggle Menu"
                                                    })}
                                                    icon={WebIconProperty({
                                                        "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-navigation-menu" }
                                                    })}
                                                    class={"mx-name-sidebarToggle3 toggle-btn"} />,
                                                <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid2"}
                                                    $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid2"}
                                                    class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid navbar-brand"}
                                                    content={[
                                                        <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid2$row0"}
                                                            $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid2$row0"}
                                                            class={"row align-children-center"}
                                                            content={[
                                                                <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0"}
                                                                    $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column0"}
                                                                    class={"col-lg col-md col"}
                                                                    content={[
                                                                        <$Image key={"l.Atlas_Core.Atlas_Default.staticImage1"}
                                                                            $widgetId={"l.Atlas_Core.Atlas_Default.staticImage1"}
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/Atlas_Core$Layout$logo.svg" }
                                                                            })}
                                                                            imageUrl={ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })}
                                                                            isBackgroundImage={false}
                                                                            onClickType={"action"}
                                                                            alternativeText={ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })}
                                                                            widthUnit={"auto"}
                                                                            width={100}
                                                                            heightUnit={"auto"}
                                                                            height={100}
                                                                            iconSize={14}
                                                                            displayAs={"fullImage"}
                                                                            responsive={false}
                                                                            class={"mx-name-staticImage1"} />
                                                                    ]} />,
                                                                <$Div key={"l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1"}
                                                                    $widgetId={"l.Atlas_Core.Atlas_Default.layoutGrid2$row0$column1"}
                                                                    class={"col-lg-auto col-md-auto col-auto align-self-center"}
                                                                    content={[
                                                                        <$Fragment key={"l.Atlas_Core.Atlas_Default.snippetCall2"}
                                                                            $widgetId={"l.Atlas_Core.Atlas_Default.snippetCall2"}
                                                                            content={[
                                                                                <$DataView key={"l.Atlas_Core.LanguageSelectorWidget.dataView1.Atlas_Core.Atlas_Default"}
                                                                                    $widgetId={"l.Atlas_Core.LanguageSelectorWidget.dataView1.Atlas_Core.Atlas_Default"}
                                                                                    class={"mx-name-dataView1 form-horizontal"}
                                                                                    object={MicroflowObjectProperty({
                                                                                        "dataSourceId": "l.29",
                                                                                        "editable": true,
                                                                                        "operationId": "agvutBxyEV6By+sxo2PGlg",
                                                                                        "argMap": {}
                                                                                    })}
                                                                                    emptyMessage={TextProperty({
                                                                                        "value": ""
                                                                                    })}
                                                                                    body={[
                                                                                        <$FormGroup key={"l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup.Atlas_Core.Atlas_Default"}
                                                                                            $widgetId={"l.Atlas_Core.LanguageSelectorWidget.comboBox1$formGroup.Atlas_Core.Atlas_Default"}
                                                                                            class={"mx-name-comboBox1 language-selector hide-bg"}
                                                                                            style={{
                                                                                                "--cb-text-color": "var(--font-color-contrast)"
                                                                                            }}
                                                                                            control={[
                                                                                                <$Combobox key={"l.Atlas_Core.LanguageSelectorWidget.comboBox1.Atlas_Core.Atlas_Default"}
                                                                                                    $widgetId={"l.Atlas_Core.LanguageSelectorWidget.comboBox1.Atlas_Core.Atlas_Default"}
                                                                                                    source={"context"}
                                                                                                    optionsSourceType={"association"}
                                                                                                    optionsSourceAssociationCaptionType={"attribute"}
                                                                                                    optionsSourceDatabaseCaptionType={"attribute"}
                                                                                                    optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                                                                        "path": "",
                                                                                                        "entity": "System.Language",
                                                                                                        "attribute": "Description",
                                                                                                        "attributeType": "String",
                                                                                                        "sortable": true,
                                                                                                        "filterable": true,
                                                                                                        "dataSourceId": "l.0",
                                                                                                        "isList": false
                                                                                                    })}
                                                                                                    attributeAssociation={AssociationProperty({
                                                                                                        "type": "Reference",
                                                                                                        "entity": "System.User",
                                                                                                        "path": "",
                                                                                                        "attribute": "System.User_Language",
                                                                                                        "endpointEntity": "System.Language",
                                                                                                        "selectableObjectsId": "l.0",
                                                                                                        "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1.Atlas_Core.Atlas_Default",
                                                                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                                    })}
                                                                                                    optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                                                                        "dataSourceId": "l.0",
                                                                                                        "entity": "System.Language",
                                                                                                        "scope": "l.Atlas_Core.LanguageSelectorWidget.dataView1.Atlas_Core.Atlas_Default",
                                                                                                        "operationId": "c+Nq7jWADVS0pNnefy2j1g",
                                                                                                        "sort": []
                                                                                                    })}
                                                                                                    optionsSourceStaticDataSource={[]}
                                                                                                    emptyOptionText={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                    })}
                                                                                                    noOptionsText={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                    })}
                                                                                                    clearable={false}
                                                                                                    optionsSourceAssociationCustomContentType={"no"}
                                                                                                    optionsSourceDatabaseCustomContentType={"no"}
                                                                                                    staticDataSourceCustomContentType={"no"}
                                                                                                    showFooter={false}
                                                                                                    selectionMethod={"checkbox"}
                                                                                                    selectedItemsStyle={"text"}
                                                                                                    selectAllButton={false}
                                                                                                    selectAllButtonCaption={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                                                    })}
                                                                                                    readOnlyStyle={"text"}
                                                                                                    onChangeEvent={ActionProperty({
                                                                                                        "action": { "type": "callNanoflow", "argMap": { "User": { "widget": "l.Atlas_Core.LanguageSelectorWidget.dataView1.Atlas_Core.Atlas_Default", "source": "object" } }, "config": { "nanoflow": () => OCH_UpdateUserLanguage }, "disabledDuringExecution": false },
                                                                                                        "argumentTypes": { }
                                                                                                    })}
                                                                                                    ariaRequired={false}
                                                                                                    clearButtonAriaLabel={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                                                    })}
                                                                                                    removeValueAriaLabel={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                                                                    })}
                                                                                                    a11ySelectedValue={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                                                                    })}
                                                                                                    a11yOptionsAvailable={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                                                                    })}
                                                                                                    a11yInstructions={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                                                                    })}
                                                                                                    lazyLoading={true}
                                                                                                    loadingType={"spinner"}
                                                                                                    filterType={"none"}
                                                                                                    id={DerivedUniqueIdProperty({
                                                                                                        "widgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1.Atlas_Core.Atlas_Default"
                                                                                                    })} />
                                                                                            ]}
                                                                                            width={3}
                                                                                            orientation={"vertical"}
                                                                                            hasError={ValidationProperty({
                                                                                                "inputWidgetId": "l.Atlas_Core.LanguageSelectorWidget.comboBox1.Atlas_Core.Atlas_Default"
                                                                                            })} />
                                                                                    ]}
                                                                                    hideFooter={false} />
                                                                            ]} />
                                                                    ]} />
                                                            ]} />
                                                    ]} />
                                            ]}
                                            ariaHidden={false} />
                                    ]} />
                            ]} />
                    ]} />
            ],
            "sizeMode": "auto",
            "class": "region-topbar"
        }}
        bottom={{
            "enabled": false
        }}
        left={{
            "enabled": true,
            "content": [
                <$NavigationTree key={"l.Atlas_Core.Atlas_Default.navigationTree3"}
                    $widgetId={"l.Atlas_Core.Atlas_Default.navigationTree3"}
                    class={"mx-name-navigationTree3"}
                    menu={[
                        {
                            "caption": TextProperty({
                                "value": "Home"
                            }),
                            "icon": WebIconProperty({
                                "icon": { "type": "glyph", "iconClass": "glyphicon-home" }
                            }),
                            "action": ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "NativeMobile/Home_Web.page.xml", "location": "content" }, "disabledDuringExecution": false },
                                "skipClientValidation": true
                            })
                        }
                    ]} />
            ],
            "sizeMode": "pixels",
            "sizeValue": 232,
            "class": "region-sidebar",
            "toggleMode": "shrink",
            "initiallyOpen": false
        }}
        right={{
            "enabled": false
        }}
        center={{
            "content": [
                <$Placeholder key={"l.Atlas_Core.Atlas_Default.Main"}
                    $widgetId={"l.Atlas_Core.Atlas_Default.Main"}
                    content={PlaceholderProperty({
                        "id": "Atlas_Core.Atlas_Default.Main"
                    })} />
            ],
            "class": "region-content"
        }} />
];

export const content = {
    "Main": region$Main,
};
