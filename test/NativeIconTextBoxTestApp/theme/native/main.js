export {};


export const Scrollview = {
    container: {
        flex: 1,
    }
}

export const customSearchBox = {
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FCFCFC",
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 12,
        color: "#0A1325",       // still a placeholder — needs your primary text token
    },
    rightIcon: {
        fontSize: 20,
        color: "#808080",       // icon
        marginLeft: 16,
    },
    placeholderTextColor: {
        color: "#5F3A3A",       // text/body/sub
    },
};

export const customChatComposer = {
    container: {
        flexDirection: "row",
        //alignItems: "flex-end",
        alignItems: "center",
        minHeight: 48,
        borderRadius: 999, // pill while collapsed
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FCFCFC",
    },
    containerExpanded: {
        borderRadius: 8,            // flattened once it grows
        paddingHorizontal: 16,      // optional: reclaim the space the curve was wasting
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 22,
        maxHeight: 96,              // 4 lines × 22 + 8 vertical padding
        paddingVertical: 4,
        includeFontPadding: false,
        color: "#5F3A3A",
    },
    leftIcon: {
        fontSize: 22,
        color: "#808080",
        marginRight: 16,
        marginBottom: 4,
    },
    rightIcon: {
        fontSize: 22,
        color: "#191919",
        marginLeft: 16,
        marginBottom: 4,
    },
    placeholderTextColor: {
        color: "#808080",
    },
};