import {useBlockProps} from '@wordpress/block-editor';
import {TextControl} from '@wordpress/components';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const {text} = attributes;

    return (
        <TextControl
            {...useBlockProps()}
            label="Text"
            value={text}
            onChange={(value) => setAttributes({text: value})}
        />
    );
}
