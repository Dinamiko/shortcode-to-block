import { useBlockProps } from '@wordpress/block-editor';

export default function save({attributes}) {
	const { text } = attributes;

	return (
		<p { ...useBlockProps.save() }>
			{ text }
		</p>
	);
}
