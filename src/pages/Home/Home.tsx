import { useState } from 'react';
import { FileUpload } from '../../components/FileUpload/FileUpload';
import styles from './Home.module.css';

export const Home = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileSelect = (file: File) => {
		setSelectedFile(file);
	};

	return (
		<div className={styles.container}>
			<div className={styles.descriptionSection}>
				<h1>Document Processing Application</h1>
				<div className={styles.content}>
					<h2>About the Application</h2>
					<p>
						Welcome to our advanced document processing system. This application
						allows you to:
					</p>
					<ul>
						<li>Upload ZIP files containing your documents</li>
						<li>Process and analyze document content</li>
						<li>Extract valuable insights from your documents</li>
						<li>Generate comprehensive reports</li>
					</ul>
					<p>
						Simply upload your ZIP file containing the documents you want to
						process using the upload section on the right. The system will
						handle the rest!
					</p>
				</div>
			</div>

			<div className={styles.uploadSection}>
				<FileUpload onFileSelect={handleFileSelect} />
				{selectedFile && (
					<div className={styles.selectedFile}>
						<p>Selected file: {selectedFile.name}</p>
					</div>
				)}
			</div>
		</div>
	);
};
