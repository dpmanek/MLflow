import { ChangeEvent } from 'react';
import styles from './FileUpload.module.css';

interface FileUploadProps {
	onFileSelect: (file: File) => void;
}

export const FileUpload = ({ onFileSelect }: FileUploadProps) => {
	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file && file.type === 'application/zip') {
			onFileSelect(file);
		} else {
			alert('Please select a ZIP file');
			event.target.value = '';
		}
	};

	return (
		<div className={styles.container}>
			<h2>Upload Documents</h2>
			<div className={styles.uploadBox}>
				<input
					type="file"
					accept=".zip"
					onChange={handleFileChange}
					className={styles.fileInput}
				/>
			</div>
		</div>
	);
};
