const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Path to the source and destination files
const sourcePath = path.join(__dirname, 'snapspot.html');
const destDir = path.join(__dirname, 'public');
const destPath = path.join(destDir, 'index.html');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
    console.log('Created public directory.');
}

// Read the original HTML file
let htmlContent;
try {
    htmlContent = fs.readFileSync(sourcePath, 'utf8');
    console.log('Successfully read source HTML file.');
} catch (error) {
    console.error('Error reading source HTML file:', error);
    process.exit(1); // Exit with an error code
}

// Replace placeholders with environment variables from Vercel
htmlContent = htmlContent.replace(/%VITE_FIREBASE_API_KEY%/g, process.env.VITE_FIREBASE_API_KEY);
htmlContent = htmlContent.replace(/%VITE_FIREBASE_AUTH_DOMAIN%/g, process.env.VITE_FIREBASE_AUTH_DOMAIN);
htmlContent = htmlContent.replace(/%VITE_FIREBASE_PROJECT_ID%/g, process.env.VITE_FIREBASE_PROJECT_ID);
htmlContent = htmlContent.replace(/%VITE_FIREBASE_STORAGE_BUCKET%/g, process.env.VITE_FIREBASE_STORAGE_BUCKET);
htmlContent = htmlContent.replace(/%VITE_FIREBASE_MESSAGING_SENDER_ID%/g, process.env.VITE_FIREBASE_MESSAGING_SENDER_ID);
htmlContent = htmlContent.replace(/%VITE_FIREBASE_APP_ID%/g, process.env.VITE_FIREBASE_APP_ID);
htmlContent = htmlContent.replace(/%VITE_FIREBASE_MEASUREMENT_ID%/g, process.env.VITE_FIREBASE_MEASUREMENT_ID);

console.log('Replaced Firebase config placeholders.');

// Write the modified content to the new file in the public directory
try {
    fs.writeFileSync(destPath, htmlContent, 'utf8');
    console.log('Successfully wrote final index.html to public directory.');
} catch (error) {
    console.error('Error writing final HTML file:', error);
    process.exit(1); // Exit with an error code
}

console.log('Build process completed successfully!');
