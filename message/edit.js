import {InspectorControls, useBlockProps} from '@wordpress/block-editor';
import {PanelBody, TextControl} from '@wordpress/components';

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
    const {text} = attributes;

    return (
        <div {...useBlockProps()}>
            <TextControl
                label="Text"
                value={text}
                onChange={(value) => setAttributes({text: value})}
            />
        </div>
    );
}
