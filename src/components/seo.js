import React from 'react';
import { useMetadata } from '../api';

const Seo = ({title}) => {
    const metadata = useMetadata()
    return (
        <title>{title} | {metadata.title}</title>
    )
}

export default Seo