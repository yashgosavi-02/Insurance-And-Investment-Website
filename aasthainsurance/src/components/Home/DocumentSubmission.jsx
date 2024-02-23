/*
import React, { useState } from 'react';
import axios from 'axios';

function DocumentUpload({ isLoggedIn }) {
    const [aadharCard, setAadharCard] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [incomeCertificate, setIncomeCertificate] = useState(null);
    const [passportPhoto, setPassportPhoto] = useState(null);

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('aadharCard', aadharCard);
            formData.append('panCard', panCard);
            formData.append('incomeCertificate', incomeCertificate);
            formData.append('passportPhoto', passportPhoto);

            // Send formData to backend
            const response = await axios.post('backend/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Documents uploaded:', response.data);
        } catch (error) {
            console.error('Error uploading documents:', error);
        }
    };

    const renderUploadForm = () => (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>
            <input type="file" onChange={(e) => setAadharCard(e.target.files[0])} accept="image/jpeg" />
            <input type="file" onChange={(e) => setPanCard(e.target.files[0])} accept="image/jpeg" />
            <input type="file" onChange={(e) => setIncomeCertificate(e.target.files[0])} accept="image/jpeg" />
            <input type="file" onChange={(e) => setPassportPhoto(e.target.files[0])} accept="image/jpeg" />
            <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">Upload</button>
        </div>
    );

    return (
        <div className="p-4">
            {isLoggedIn ? (
                renderUploadForm()
            ) : (
                <p className="text-lg">Please log in to upload documents.</p>
            )}
        </div>
    );
}

export default DocumentUpload;
*/


import React, { useState } from 'react';
import axios from 'axios';

function DocumentUpload() {
    const [aadharCard, setAadharCard] = useState(null);
    const [panCard, setPanCard] = useState(null);
    const [incomeCertificate, setIncomeCertificate] = useState(null);
    const [passportPhoto, setPassportPhoto] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('aadharCard', aadharCard);
            formData.append('panCard', panCard);
            formData.append('incomeCertificate', incomeCertificate);
            formData.append('passportPhoto', passportPhoto);

            // Send formData to backend
            const response = await axios.post('backend/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Documents uploaded:', response.data);
            setUploadedFiles(response.data); // Assuming backend returns uploaded file information
        } catch (error) {
            console.error('Error uploading documents:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Upload Documents</h2>
            <div className="mb-3">
                <label htmlFor="aadharCard" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Aadhar Card</label>
                <input type="file" id="aadharCard" onChange={(e) => setAadharCard(e.target.files[0])} className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" />
            </div>
            <div className="mb-3">
                <label htmlFor="panCard" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Pan Card</label>
                <input type="file" id="panCard" onChange={(e) => setPanCard(e.target.files[0])} className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" />
            </div>
            <div className="mb-3">
                <label htmlFor="incomeCertificate" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Income Certificate</label>
                <input type="file" id="incomeCertificate" onChange={(e) => setIncomeCertificate(e.target.files[0])} className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" />
            </div>
            <div className="mb-3">
                <label htmlFor="passportPhoto" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Passport Photo</label>
                <input type="file" id="passportPhoto" onChange={(e) => setPassportPhoto(e.target.files[0])} className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary" />
            </div>
            <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">Upload</button>


            {uploadedFiles.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Uploaded Files</h2>
                    <ul>
                        {uploadedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DocumentUpload;
