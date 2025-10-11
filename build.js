const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Path to the source and destination files
const sourcePath = path.join(__dirname, 'snapspot.html');
const destDir = path.join(__dirname, 'public');
const destPath = path.join(destDir, 'index.html');
const cssSourcePath = path.join(__dirname, 'css', 'styles.css');
const jsSourcePath = path.join(__dirname, 'js', 'app.js');
const cssDestPath = path.join(destDir, 'css', 'styles.css');
const jsDestPath = path.join(destDir, 'js', 'app.js');

// Create the destination directories if they don't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
    console.log('Created public directory.');
}
if (!fs.existsSync(path.join(destDir, 'css'))) {
    fs.mkdirSync(path.join(destDir, 'css'));
    console.log('Created public/css directory.');
}
if (!fs.existsSync(path.join(destDir, 'js'))) {
    fs.mkdirSync(path.join(destDir, 'js'));
    console.log('Created public/js directory.');
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

// Copy CSS and JS files
try {
    fs.copyFileSync(cssSourcePath, cssDestPath);
    console.log('Successfully copied CSS file.');
    fs.copyFileSync(jsSourcePath, jsDestPath);
    console.log('Successfully copied JS file.');
} catch (error) {
    console.error('Error copying CSS/JS files:', error);
    process.exit(1);
}

console.log('Build process completed successfully!');
