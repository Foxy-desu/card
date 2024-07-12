import { ComponentPropsWithoutRef, useState } from 'react';
import eyeIcon from '../../assets/icons/eye_white.png';
import trashIcon from '../../assets/icons/trash_white.png';
import cl from './icon_btn.module.scss';

interface IIconBtnProps extends ComponentPropsWithoutRef<'button'> {
    iconBtnType: 'eye'| 'trash';
    dynamicColor?: string;
}

const IconButton = ({iconBtnType, dynamicColor,...props}:IIconBtnProps): JSX.Element => {
    const [btnType] = useState(()=> getImageSource(iconBtnType));
    function getImageSource(type: string) {
        switch (type) {
            case 'eye':
                return {style: {WebkitMaskImage: `url(${eyeIcon})`, backgroundColor: dynamicColor}, desc: 'показать'};
            case 'trash':
                return {style: {WebkitMaskImage: `url(${trashIcon})`, backgroundColor: dynamicColor}, desc: 'удалить'};
            default:
                return {style: {}, desc: ''};
        }
    }
    return (
        <button className={cl.iconButton} type='button' {...props}>
            <span className={`${cl.icon} ${iconBtnType === 'trash' && cl.icon_delete}`} style={btnType.style}/>
            <span className={cl.visuallyHidden}>{btnType.desc}</span>
        </button>
    )
};

export default IconButton;