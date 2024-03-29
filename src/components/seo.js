import React from 'react';
import { useMetadata } from '../hooks';

const Seo = ({title}) => {
    const metadata = useMetadata()
    return (
        <title>{title} | {metadata.title}</title>
    )
}

export default Seo