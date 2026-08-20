## NativeIconTextBox
Native text box with mappable leading and trailing icons

## Features
A text input for native pages that can carry an icon before the text, after it, or both.
Mendix's own Text Box has no icon support — its styling exposes only text and container
properties — so this widget fills that gap.

The icons are mapped per instance, so the same widget covers a search field, a field with a
clear button, a validated field with a status glyph, a password field with a reveal toggle,
and so on.

* Leading and trailing icon slots, each optional
* Either icon can trigger an action, or stay purely decorative
* Icon size and colour tuned independently per side
* Binds to String, Decimal, Integer and Long attributes
* Selectable keyboard type, matching the options on the standard Text Box
* Full control of the input's type scale and spacing through styling
* Works offline, on both iOS and Android

## Requirements
Studio Pro **11.12** or higher. Built against Mendix Pluggable Widgets Tools 11.12
(React 19, React Native 0.84).

## Version history

**1.2.0** — added the `keyboardType`, `expandedIcons` and `expandedAttr` properties and the On enter event; `value` now accepts
Decimal, Integer and Long; renamed `onEnterAction` to `onSubmitAction`.

**1.1.0** — added the `multiline` property and the On leave event.

**1.0.0** — initial release.

## Usage
Download one of the [releases](https://github.com/Entidad/mendix-react-native-icontextbox/releases)
or build from source as follows

```
git clone https://github.com/Entidad/mendix-react-native-icontextbox.git
cd ./mendix-react-native-icontextbox
npm install
npm run build
```

Deploy `entidad.io.native.NativeIconTextBox.mpk` to `$PROJ/widgets`, then run
`Synchronize App Directory` in Studio Pro (`F4`, or `Menu / App / Synchronize App Directory`).

The widget needs an entity context, so place it inside a **Data view** or a **List view** row.

### Properties

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `value` | String, Decimal, Integer or Long attribute | yes | Holds the entered value. Written on every keystroke. |
| `placeholder` | Text template | no | Hint shown while the value is empty. Translatable. |
| `multiline` | Boolean | yes (default `false`) | Let the text wrap and the field grow. |
| `keyboardType` | Enumeration | yes (default `Default`) | Which on-screen keyboard to show. |
| `returnKeyType` | Enum or String attribute | no | Label on the keyboard's return key. Falls back to `Done` when empty or unrecognised. |
| `leftIcon` | Icon | no | Icon shown before the text. |
| `rightIcon` | Icon | no | Icon shown after the text. |
| `expandedAttr` | Boolean attribute | no | Kept in step with whether the field has grown past one line. |
| `expandedIcons` | Enumeration | yes (default `Keep both`) | What happens to the icons once a multiline field grows past one line. |
| `onFocusAction` | Action | no | Runs once when the field gains focus. |
| `onChangeAction` | Action | no | Runs on every keystroke. |
| `onLeaveAction` | Action | no | Runs once when the field loses focus. |
| `onSubmitAction` | Action | no | Runs when the keyboard return key is pressed. |
| `onLeftIconClick` | Action | no | Makes the leading icon tappable. |
| `onRightIconClick` | Action | no | Makes the trailing icon tappable. |

The standard **Editability** property is supported. A read-only attribute renders a
non-editable input.

### Behaviour

**The attribute is written before the action runs**, so a nanoflow triggered by
`onChangeAction` reads the text just typed rather than the previous value.

**Numeric attributes are formatted and parsed by the platform.** The widget hands the raw
text to the attribute's own formatter rather than converting anything itself, so a Decimal,
Integer or Long attribute can be bound directly. The formatter applies the user's locale,
which means the decimal separator is whatever that locale uses — a comma where a comma is
expected.

Pair a numeric attribute with a matching `keyboardType`: `Number pad` for Integer and Long,
`Decimal pad` for Decimal.

**Text that cannot be parsed is rejected silently.** Typing letters into a Decimal-bound
field leaves the attribute at its previous value and records a validation message, but this
widget does not render validation messages the way the standard Text Box does, so nothing
appears on screen. Where invalid input is likely, choose a keyboard type that cannot produce
it, or surface `validation` yourself elsewhere on the page.

**A focused field shows what you typed, not the formatted value.** Once you start typing, the
raw text stays exactly as entered; the formatted value reappears when the field loses focus.
Without this a Decimal would reformat between keystrokes — typing `1234` would become `1,234`
with the cursor thrown to the end.

Until the first keystroke the field still tracks the attribute, so an **On enter** action that
changes or clears the value takes effect on screen. Clearing a default `0` on focus, so the
user does not have to delete it first, works for exactly this reason. After typing begins the
entered text wins, and a value set by the model will not overwrite it mid-edit.

**An icon is only tappable when its action is configured.** Without one it is decorative and
taps fall through to the input, so tapping anywhere in the field still focuses it. Add an
action and that icon becomes its own touch target.

**`onChangeAction` fires on every keystroke.** Typing a six-letter word runs the nanoflow six
times, which suits live filtering of a list already in memory but is wasteful when the action
queries a database or a service.

For those, use one of the single-shot events instead. **`onLeaveAction` runs once when the
field loses focus** — the same moment Mendix's own Text Box fires its On change — and
**`onSubmitAction` runs when the return key is pressed**. Wiring both covers the user who
submits from the keyboard and the user who simply taps elsewhere.

**`returnKeyType` only labels the key, it does not change behaviour.** Whichever label you
pick, pressing the key fires `onSubmitAction`. Set it to `Search` for a search field and
`Next` where the user moves on to another field — the label is a cue about what will happen,
so it should match what your action actually does.

**The return key is set at runtime from an attribute.** Map either an enumeration attribute
or a plain String. Matching ignores casing and surrounding spaces, and Spanish names are
accepted alongside the English ones, so an enumeration modelled in either language maps
straight through:

| Return key | Accepted value names |
| --- | --- |
| Done | `Done`, `Listo` |
| Go | `Go`, `Ir` |
| Next | `Next`, `Siguiente` |
| Search | `Search`, `Buscar` |
| Send | `Send`, `Enviar` |

Prefer the English names where you have the choice. A Mendix enumeration's value **Name** is
a technical identifier and its **Caption** is the translated part, so `Name: Search` with
`Caption (es_ES): Buscar` keeps the model readable in any language. The Spanish aliases exist
for enumerations already modelled that way.

Anything else — an empty attribute, an unmapped property, a value such as `Yahoo` that only
one platform supports — falls back to `Done` rather than reaching the input, where an invalid
name would leave the key unlabelled.

**The caption is not what appears on the key.** The label is drawn by the operating system in
the *device's* language, from the value alone. A device set to Spanish shows `Buscar` for
`Search` whatever caption you gave the enumeration value; captions only matter where you
surface the choice to a user yourself.

**Multiline changes what the return key does.** With `multiline` on, pressing return inserts
a newline and `onSubmitAction` no longer fires — that is React Native behaviour, not a widget
limitation. Give the field a trailing icon wired to `onRightIconClick` so there is still a
way to submit.

A multiline field also needs different styling. Swap the fixed `height` on `container` for
`minHeight` so it can grow, set `alignItems` to `flex-end` so the icons stay pinned to the
bottom as it does, and cap the growth with `maxHeight` on `input`:

```
container:{
        minHeight:48,
        alignItems:"flex-end",
        paddingVertical:8,
},
input:{
        maxHeight:120,
},
```

**Icons can step out of the way once the field grows.** Set `expandedIcons` and, the moment a
multiline field wraps past one line, the icons give the message its full width:

| Value | Effect |
| --- | --- |
| Keep both | Icons stay put. The default. |
| Hide leading | The leading icon goes, the trailing one remains. |
| Hide both | Both go, and the text runs the full width of the field. |

Expansion is measured from the field, not guessed from the text, and it **latches**: once
expanded it stays expanded until the value is emptied or the field loses focus. Without that
it would flicker, because hiding an icon widens the input, the text may then fit on one line
again, and the icon would come back only to push it over once more.

**`expandedAttr` publishes the expanded state to the page.** Bind a Boolean attribute and the
widget keeps it in step, so conditional visibility elsewhere can react. That is what lets a
send control appear outside the widget at the moment the icons step aside:

- trailing icon visible, field on one line: the icon is the send control, via `onRightIconClick`
- field expanded, icons hidden: the outside control takes over, shown when the attribute is true

Binding it to visibility rather than to "the text is not empty" is what keeps the two from
appearing at once. The attribute is written only when the state actually changes, and is left
alone when it is read-only or not yet available.

**Hide both leaves nothing inside the widget to submit with.** A multiline field ignores the
return key for submitting — it inserts a newline — so with both icons gone there is no
affordance left. Put a send control beside the widget rather than inside it, the way iMessage
and Signal do, and wire it to your own action. The external button also keeps still while the
field grows, instead of sliding down with it.

**Icons render only when mapped.** An unmapped slot takes no space at all, so the same class
works whether or not an icon is present.

### Styling

The widget reads six style keys:

| Key | Applied to |
| --- | --- |
| `container` | the row wrapping the icons and the input |
| `containerExpanded` | layered over `container` while a multiline field is expanded |
| `input` | the text input |
| `leftIcon` | the leading icon |
| `rightIcon` | the trailing icon |
| `placeholderTextColor` | its `color` sets the placeholder colour |

**`containerExpanded` reshapes the field once it grows.** It is empty by default, so nothing
changes unless you set it. Pair it with `expandedIcons` to flatten the rounded ends when the
icons step aside and the text takes the full width:

```
container:{
        borderRadius:999,
},
containerExpanded:{
        borderRadius:8,
},
```

It follows the same latched expansion as the icons, so the shape settles once rather than
changing back and forth as words wrap.

**Icon size comes from `fontSize`,** matching how Mendix sizes icons elsewhere, so icons and
text scale on the same numbers. The two sides are separate keys, so a small leading search
glyph can sit beside a larger trailing clear button. If a key omits `fontSize` the icon falls
back to 20 rather than disappearing.

Any other property on `leftIcon`/`rightIcon` — `marginRight`, `padding` and so on — is applied
to the wrapper around the glyph, so spacing is set in the same place as size.

**Larger text and spacing** are controlled from `input` and `container`. Raise `input.fontSize`
for type scale, `input.paddingVertical` for field height, and `container.paddingHorizontal`
for the gap between the border and its contents.

Class names may contain only letters and numbers — following Mendix convention, a custom
class is lowerCamelCase.

Export the class from `theme/native/main.js`, then enter its name in the widget's
**Class** property in Studio Pro. **Styling has no effect until that property is set.**

```
export const customSearchBox={
        container:{
                flexDirection:"row",
                alignItems:"center",
                paddingHorizontal:16,
                borderRadius:8,
                borderWidth:1,
                borderColor:"#CCCCCC",
                backgroundColor:"#FCFCFC",
        },
        input:{
                flex:1,
                fontSize:16,
                paddingVertical:12,
                color:"#5F3A3A",
        },
        rightIcon:{
                fontSize:20,
                color:"#808080",
                marginLeft:16,
        },
        placeholderTextColor:{
                color:"#808080",
        },
};
```

Keep `flex:1` on `input`. It is what lets the text fill the space left over by the icons;
without it the input collapses.

Note that the typed text and the placeholder use different colours. Giving both the same
value makes an empty field indistinguishable from a filled one at a glance, which is
particularly confusing in a composer where a placeholder can read as a drafted message.

### A chat composer

A multiline field with a pill outline, an attachment icon leading and a send icon trailing.
This one has been checked on device.

```
export const customChatComposer={
        container:{
                flexDirection:"row",
                alignItems:"flex-end",
                minHeight:48,
                borderRadius:999,
                paddingHorizontal:20,
                paddingVertical:8,
                borderWidth:1,
                borderColor:"#CCCCCC",
                backgroundColor:"#FCFCFC",
        },
        input:{
                flex:1,
                fontSize:16,
                lineHeight:22,
                maxHeight:96,
                paddingVertical:4,
                includeFontPadding:false,
                color:"#5F3A3A",
        },
        leftIcon:{
                fontSize:22,
                color:"#808080",
                marginRight:16,
                marginBottom:4,
        },
        rightIcon:{
                fontSize:22,
                color:"#191919",
                marginLeft:16,
                marginBottom:4,
        },
        placeholderTextColor:{
                color:"#808080",
        },
};
```

Four details in there are worth understanding rather than copying blindly.

**`borderRadius:999` keeps the ends round at any height.** React Native clamps the radius to
half the rendered dimension, so a large number stays a true pill as a multiline field grows.
A fixed `24` looks right at 48pt tall and progressively less so at 70 or 90.

**`lineHeight` is set explicitly, and `maxHeight` is a multiple of it.** Without a line height
each platform derives one from font metrics, so the same message occupies different heights on
iOS and Android and wrapped lines sit unevenly. With `lineHeight:22` and `paddingVertical:4`,
`maxHeight:96` is exactly four lines plus padding, so the field clips on a line boundary
instead of part way through a line. Five lines is `118`, three is `74`.

**`alignItems:"flex-end"` pins the icons to the bottom** as the field grows, which is where a
send button belongs. The `marginBottom:4` on each icon is optical alignment against the last
line of text — worth adjusting to your font.

**`includeFontPadding:false`** removes the extra padding Android adds inside a text input,
which otherwise makes the field taller than iOS for the same content.

## Demo project
None at this time

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-react-native-icontextbox/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. Node 20.19.4 or higher is required.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions welcome

## References

* [https://docs.mendix.com/refguide/mobile/designing-mobile-user-interfaces/widget-styling-guide/#text-box](https://docs.mendix.com/refguide/mobile/designing-mobile-user-interfaces/widget-styling-guide/#text-box)
* [https://reactnative.dev/docs/textinput](https://reactnative.dev/docs/textinput)
* [https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/](https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)
