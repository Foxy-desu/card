import { ComponentPropsWithoutRef, useState } from 'react';
import eyeIcon from '../../assets/icons/eye_white.png';
import trashIcon from '../../assets/icons/trash_white.png';
import cl from './icon_btn.module.scss';
import myColors from '../../styles/colors.module.scss';


interface IIconBtnProps extends ComponentPropsWithoutRef<'button'> {
    iconBtnType: 'eye'| 'trash';
    dynamicColor?: string;
}


const IconButton = ({iconBtnType, dynamicColor,...props}:IIconBtnProps): JSX.Element => {
    const [btnType] = useState(()=> getImageSource(iconBtnType));
    
    function getImageSource(type: string) {
        switch (type) {
            case 'eye':
                return {src:eyeIcon, desc: 'показать', defaultColor: myColors.bgInform};
            case 'trash':
                return {src:trashIcon, desc: 'удалить', defaultColor: myColors.bgCaution};
            default:
                return {src:'', desc: ''};
        }
    };
    return (
        <button className={cl.iconButton} type='button' {...props}>
            <span className={cl.icon} style={{WebkitMaskImage: `url(${btnType.src})`, backgroundColor: dynamicColor || btnType.defaultColor}}/>
            <span className={cl.visuallyHidden}>{btnType.desc}</span>
        </button>
    )
};

export default IconButton;