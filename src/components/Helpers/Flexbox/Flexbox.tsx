import IFlexboxProps from "./IFlexboxProps";

const Flexbox = (props: IFlexboxProps) => {

    return <div
        className={props.className}
        style={{
            alignItems: props.alignItems || "stretch",
            border: props.withBorders ? "1px solid black" : "none",
            display: "flex",
            flex: props.flex || "0 1 auto",
            flexBasis: props.flexBasis || "auto",
            flexDirection: props.flexDirection || "row",
            flexGrow: props.flexGrow || 0,
            flexShrink: props.flexShrink || 1,
            flexWrap: props.flexWrap || "nowrap",
            gap: props.gap || "0px",
            height: props.verticalFill ? "100%" : props.height || "auto",
            justifyContent: props.justifyContent || "flex-start",
            margin: props.margin || "0",
            maxWidth: props.maxWidth || "none",
            padding: props.padding || props.withBorders ? "0.5rem" : "0",
            width: props.horizontalFill ? "100%" : props.width || "auto",
        }}
    >
        {props.children}
    </div>

};

export default Flexbox;