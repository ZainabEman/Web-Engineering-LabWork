import React from 'react';
import Map from '../components/Map';
import Alert from '../components/Alert';

export default function Dashboard() {
  const handleDownload = async () => {
    const res = await fetch('http://localhost:5000/api/download-pdf');
    const blob = await res.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'report.pdf';
    link.click();
  };

  return (
    <div>
      <Alert message="Welcome to Dashboard!" />
      <Map />
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}