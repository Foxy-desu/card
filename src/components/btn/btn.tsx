import { ComponentPropsWithoutRef } from "react";
import { CSSProperties } from "react";
import cl from './btn.module.scss';

interface IBtn extends ComponentPropsWithoutRef<'button'> {
    dynamicColor?: IBtnColors;
};
interface IBtnColors {
    text?: string;
    bg?: string;
};

const Btn = ({dynamicColor,...rest}:IBtn)=> {
    
    function getInlineStyle(colors: IBtnColors | undefined) {
        const inlineStyle: CSSProperties = {};
        if (colors) {
            if (colors.text) inlineStyle.color = colors.text;
            if (colors.bg) inlineStyle.backgroundColor = colors.bg;
        }
        return inlineStyle;
    };

    return (
        <button className={cl.button} type="button" {...rest} style={getInlineStyle(dynamicColor)}>
            Подробнее
        </button>
    )
};

export default Btn;