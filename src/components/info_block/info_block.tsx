import cl from './info_block.module.scss';

interface IInfBlock {
    dynamicColor?: {title?: string, data?: string};
    data: string | number;
    title: string;
    type?: 'spacious' | 'narrow';
}

const InfoBlock = ({dynamicColor, data, title, type='narrow'}: IInfBlock) => {
    
    const titleInlineStyle = dynamicColor && Object.keys(dynamicColor).length > 0
        ? { color: dynamicColor.title}
        : {};
    const dataInlineStyle = dynamicColor && Object.keys(dynamicColor).length > 0
        ? { color: dynamicColor.data}
        : {};
    
    function getClass(type: IInfBlock['type']){
        return type === 'narrow'
            ? {block: cl.infoBlock_narrow, title: cl.title_narrow, data: cl.data_narrow}
            : {block: '', title: '', data: ''};
    }

    return (
        <section className={`${cl.infoBlock} ${getClass(type).block}`}>
            <h3 className={`${cl.title} ${getClass(type).title}`} style={titleInlineStyle}>{title}</h3>
            <p className={`${cl.data} ${getClass(type).data}`} style={dataInlineStyle}>{data}</p>
        </section>
    );
};

export default InfoBlock;