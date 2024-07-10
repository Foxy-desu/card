import cl from './info_block.module.scss';
import myColors from '../../styles/colors.module.scss';

interface IInfBlock {
    dynamicColor?: {title?: string, data?: string};
    data: string | number;
    title: string;
    type?: 'spacious' | 'narrow'
}

const InfoBlock = ({dynamicColor, data, title, type='narrow'}: IInfBlock) => {
    
    const defaultTitleColor = myColors.textSecondary;
    const defaultDataColor = myColors.textPrimary;
  
    return (
        <section className={`${cl.infoBlock} ${type==='narrow' ? cl.infoBlock_narrow : ''}`}>
            <h3 className={`${cl.title} ${type==='narrow' ? cl.title_narrow : ''}`} style={{color: dynamicColor?.title || defaultTitleColor}}>{title}</h3>
            <p className={`${cl.data} ${type==='narrow' ? cl.data_narrow : ''}`} style={{color: dynamicColor?.data || defaultDataColor}}>{data}</p>
        </section>
    )
};

export default InfoBlock;