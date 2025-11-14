// Firebase will be loaded via script tags in HTML

const Config = {
    firebase: typeof __firebase_config !== 'undefined' 
        ? JSON.parse(__firebase_config) 
        : {
            apiKey: "AIzaSyAr7WVWVQG8zHsexf53pycaOqZeJ8hj8fc",
            authDomain: "snapspot-59933.firebaseapp.com",
            projectId: "snapspot-59933",
            storageBucket: "snapspot-59933.firebasestorage.app",
            messagingSenderId: "369585987459",
            appId: "1:369585987459:web:a09abfb7bea875c5e4a0b6",
        },
    appId: typeof __app_id !== 'undefined' ? __app_id : 'snapshot-default',
    initialAuthToken: typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null,
    map: {
        initialCoords: [14.5995, 120.9842],
        initialZoom: 13,
        maxZoom: 19,
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        useImageAsMarker: true,
        maxClusterRadius: 20,
        viewportBuffer: 1000
    },
    api: {
        reverseGeocode: 'https://api.bigdatacloud.net/data/reverse-geocode-client'
    },
    imageProcessing: {
        maxDimension: 1024,
        jpegQuality: 0.9
    },
    icons: {
        cameraMarker: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd" /></svg>`,
        noteMarker: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" /><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" /></svg>`,
        location: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`,
        uploadCamera: `<svg class="h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd" /></svg>`,
        uploadPhoto: `<svg class="h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>`,
        search: `<svg class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`
    }
};

const Utils = {
    truncateText(str, n) {
        if (!str) return '';
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    },
    getRandomHexColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    getContrastColor(hex) {
        if (!hex) return '#000000';
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const brightness = Math.round(((r * 299) + (g * 587) + (b * 114)) / 1000);
        return (brightness > 125) ? '#000000' : '#FFFFFF';
    }
};

const FirebaseService = {
    app: null,
    auth: null,
    db: null,
    userId: null,
    currentUser: null,

    async init(onAuthStateChangeCallback) {
        try {
            this.app = firebase.initializeApp(Config.firebase);
            this.auth = firebase.auth();
            this.db = firebase.firestore();

            this.auth.onAuthStateChanged(async (user) => {
                if (user) {
                    this.userId = user.uid;
                    this.currentUser = user;
                    console.log("User authenticated:", this.userId);
                    onAuthStateChangeCallback(user);
                } else {
                    this.userId = null;
                    this.currentUser = null;
                    onAuthStateChangeCallback(null);
                }
            });
        } catch (error) {
            console.error("Firebase initialization failed:", error);
        }
    },

    async signUp(email, password, name) {
        const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.sendEmailVerification();
        await this.db.collection('users').doc(userCredential.user.uid).set({
            email,
            name,
            role: 'standard',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return userCredential;
    },

    async signIn(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    },

    async signOut() {
        return this.auth.signOut();
    },

    async getUserData(uid) {
        const doc = await this.db.collection('users').doc(uid).get();
        return doc.exists ? doc.data() : null;
    },

    async getUserSpots(uid) {
        const spotsCollection = this.db.collection('artifacts').doc(Config.appId).collection('public').doc('data').collection('spots');
        const snapshot = await spotsCollection.where('authorId', '==', uid).get();
        return snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    },

    async deleteSpot(spotId) {
        const spotRef = this.db.collection('artifacts').doc(Config.appId).collection('public').doc('data').collection('spots').doc(spotId);
        return spotRef.delete();
    },

    listenForSpots(callback) {
        const spotsCollection = this.db.collection('artifacts').doc(Config.appId).collection('public').doc('data').collection('spots');
        spotsCollection.onSnapshot(callback);
    },

    async saveSpot(spotData) {
        if (!this.userId) throw new Error("User not authenticated.");
        const spotsCollection = this.db.collection('artifacts').doc(Config.appId).collection('public').doc('data').collection('spots');
        return spotsCollection.add({
            ...spotData,
            authorId: this.userId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            reactions: { thumbsUp: 0, thumbsDown: 0, heart: 0, heartEyes: 0, laugh: 0, shocked: 0, sad: 0, angry: 0, evil: 0 },
            voters: {}
        });
    },

    async getSpot(spotId) {
         const spotRef = this.db.collection('artifacts').doc(Config.appId).collection('public').doc('data').collection('spots').doc(spotId);
         return spotRef.get();
    },

    async updateReaction(spotId, newReaction, previousReaction) {
         if (!this.userId) throw new Error("User not authenticated for voting.");
         const spotRef = this.db.collection('artifacts').doc(Config.appId).collection('public').doc('data').collection('spots').doc(spotId);
         const updatePayload = {};
         
         if (newReaction === previousReaction) {
             updatePayload[`reactions.${newReaction}`] = firebase.firestore.FieldValue.increment(-1);
             updatePayload[`voters.${this.userId}`] = firebase.firestore.FieldValue.delete();
         } 
         else if (previousReaction) {
             updatePayload[`reactions.${previousReaction}`] = firebase.firestore.FieldValue.increment(-1);
             updatePayload[`reactions.${newReaction}`] = firebase.firestore.FieldValue.increment(1);
             updatePayload[`voters.${this.userId}`] = newReaction;
         }
         else {
             updatePayload[`reactions.${newReaction}`] = firebase.firestore.FieldValue.increment(1);
             updatePayload[`voters.${this.userId}`] = newReaction;
         }
         
         return spotRef.update(updatePayload);
    }
};

const MapService = {
    map: null,
    markers: null,
    userLocationMarker: null,

    init(onMapClick, onClusterClick, onMapMove) {
        this.map = L.map('map', { zoomControl: false }).setView(Config.map.initialCoords, Config.map.initialZoom);
        L.control.zoom({ position: 'topleft' }).addTo(this.map);
        
        L.tileLayer(Config.map.tileLayer, {
            maxZoom: Config.map.maxZoom,
            attribution: Config.map.attribution
        }).addTo(this.map);
        
        this.markers = L.markerClusterGroup({
            zoomToBoundsOnClick: false,
            maxClusterRadius: Config.map.maxClusterRadius
        });
        this.map.addLayer(this.markers);

        this.map.on('click', onMapClick);
        this.map.on('moveend', onMapMove);
        this.markers.on('clusterclick', onClusterClick);
    },

    renderSpots(spots) {
        this.markers.clearLayers();
        const newMarkers = [];
        spots.forEach(spot => {
            if (spot.data.location && spot.data.location.latitude && spot.data.location.longitude) {
                let iconHtml;
                let iconClassName = '';
                let iconSize = [36, 36];
                let iconAnchor = [18, 18];

                if (Config.map.useImageAsMarker && spot.data.photoDataUrl) {
                    iconHtml = `<div class="image-marker-icon"><img src="${spot.data.photoDataUrl}" alt="Spot thumbnail"></div>`;
                    iconSize = [55, 55];
                    iconAnchor = [27, 27];
                } else if (spot.data.spotType === 'note') {
                    iconHtml = `<div class="custom-marker note-marker-icon">${Config.icons.noteMarker}</div>`;
                } else if (spot.data.spotType === 'audio') {
                    iconHtml = `<div class="custom-marker audio-marker-icon">🎵</div>`;
                } else {
                    iconHtml = `<div class="custom-marker camera-marker-icon">${Config.icons.cameraMarker}</div>`;
                }
                
                const customIcon = L.divIcon({
                    html: iconHtml,
                    className: iconClassName,
                    iconSize: iconSize,
                    iconAnchor: iconAnchor
                });

                const marker = L.marker([spot.data.location.latitude, spot.data.location.longitude], {
                    icon: customIcon,
                    spotId: spot.id,
                    spotData: spot.data
                });
                
                let popupContent = '';
                if (spot.data.spotType === 'note') {
                    popupContent = `
                        <div class="p-1 cursor-pointer popup-note" data-spot-id="${spot.id}">
                            <p class="font-semibold text-gray-800">${spot.data.uploaderName}</p>
                            <p class="text-gray-600">${Utils.truncateText(spot.data.description, 100)}</p>
                            <p class="text-xs text-blue-500 mt-1">Click to view full note</p>
                        </div>`;
                } else if (spot.data.spotType === 'youtube') {
                    popupContent = `
                        <div class="text-center">
                            <div class="relative cursor-pointer popup-media" data-spot-id="${spot.id}" style="max-width: 200px; height: 150px; margin: 0 auto;">
                                <img src="${spot.data.photoDataUrl}" alt="YouTube video" class="w-full h-full rounded-md object-cover">
                                <div class="absolute inset-0 flex items-center justify-center rounded-md">
                                    <div class="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">▶</div>
                                </div>
                                <a href="${spot.data.mediaUrl}" target="_blank" class="absolute top-2 right-2 bg-black/50 text-white p-1 rounded hover:bg-black/70" onclick="event.stopPropagation()">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            </div>
                            <p class="mt-2 text-sm text-gray-700">${Utils.truncateText(spot.data.description, 50) || 'Click to watch video.'}</p>
                        </div>`;
                } else if (spot.data.spotType === 'audio') {
                    if (spot.data.photoDataUrl) {
                        popupContent = `
                            <div class="text-center cursor-pointer popup-media" data-spot-id="${spot.id}">
                                <div class="relative" style="max-width: 200px; height: 150px; margin: 0 auto;">
                                    <img src="${spot.data.photoDataUrl}" alt="Audio cover" class="w-full h-full rounded-md object-cover">
                                    <div class="absolute inset-0 flex items-center justify-center rounded-md">
                                        <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg">▶</div>
                                    </div>
                                </div>
                                <p class="mt-2 text-sm text-gray-700">${Utils.truncateText(spot.data.description, 50) || 'Click to play audio.'}</p>
                            </div>`;
                    } else {
                        popupContent = `
                            <div class="text-center cursor-pointer popup-media" data-spot-id="${spot.id}">
                                <div class="bg-blue-500 text-white rounded-lg p-4 mb-2">
                                    <div class="text-2xl mb-2">🎵</div>
                                    <p class="text-sm">${Utils.truncateText(spot.data.description, 50) || 'Audio File'}</p>
                                </div>
                            </div>`;
                    }
                } else if (spot.data.spotType === 'video') {
                    popupContent = `
                        <div class="text-center cursor-pointer popup-media" data-spot-id="${spot.id}">
                            <div class="bg-purple-500 text-white rounded-lg p-4 mb-2 relative">
                                <div class="text-2xl mb-2">🎥</div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center">▶</div>
                                </div>
                            </div>
                            <a href="${spot.data.mediaUrl}" target="_blank" class="text-purple-500 text-xs">Open Video</a>
                            <p class="mt-2 text-sm text-gray-700">${Utils.truncateText(spot.data.description, 50) || 'Click to watch video.'}</p>
                        </div>`;
                } else if (spot.data.spotType === 'image' && spot.data.mediaUrl) {
                    popupContent = `
                        <div class="text-center">
                            <img src="${spot.data.mediaUrl}" alt="${spot.data.description || 'Linked image'}" class="w-full h-auto rounded-md cursor-pointer popup-image" style="max-width: 200px; max-height: 200px; object-fit: cover;" data-spot-id="${spot.id}">
                            <p class="mt-2 text-sm text-gray-700">${Utils.truncateText(spot.data.description, 50) || 'Click image to view full size.'}</p>
                        </div>`;
                } else {
                    popupContent = `
                        <div class="text-center">
                            <img src="${spot.data.photoDataUrl}" alt="${spot.data.description || 'Spot image'}" class="w-full h-auto rounded-md cursor-pointer popup-image" style="max-width: 200px; max-height: 200px; object-fit: cover;" data-spot-id="${spot.id}">
                            <p class="mt-2 text-sm text-gray-700">${Utils.truncateText(spot.data.description, 50) || 'Click image to view full size.'}</p>
                        </div>`;
                }

                marker.bindPopup(popupContent);

                marker.on('popupopen', (e) => {
                    const popup = e.popup;
                    const img = popup.getElement().querySelector('.popup-image, .popup-youtube img');
                    if (img && !img.complete) {
                        img.onload = () => {
                            popup.update();
                        }
                    }
                });

                newMarkers.push(marker);
            }
        });
        this.markers.addLayers(newMarkers);
    },

    panTo(location, zoom = 18) {
        this.map.flyTo([location.latitude, location.longitude], zoom);
    },
    
    showUserLocationMarker(location) {
        if (this.userLocationMarker) {
            this.map.removeLayer(this.userLocationMarker);
        }
        this.userLocationMarker = L.circleMarker([location.latitude, location.longitude], {
            radius: 8,
            fillColor: "#2563eb",
            color: "#fff",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);

        setTimeout(() => {
            if (this.userLocationMarker) {
                this.map.removeLayer(this.userLocationMarker);
                this.userLocationMarker = null;
            }
        }, 10000);
    }
};

const UIService = {
    uploadModal: null, closeModalButton: null, uploadForm: null, latInput: null, lonInput: null,
    imageViewer: null, closeViewerBtn: null, viewerImg: null, viewerInfo: null,
    galleryModal: null, closeGalleryBtn: null, galleryGrid: null,
    photoInput: null, filePreview: null,
    searchResultsContainer: null,
    bottomSheet: null, 
    bottomSheetContent: null,
    notificationBar: null, notificationMessage: null, closeNotificationBtn: null,
    authModal: null, authBtn: null, profileBtn: null,
    loginForm: null, signupForm: null, profileModal: null,
    
    init(onFormSubmit) {
        this.uploadModal = document.getElementById('upload-modal');
        this.closeModalButton = document.getElementById('close-modal-button');
        this.uploadForm = document.getElementById('upload-form');
        this.latInput = document.getElementById('latitude');
        this.lonInput = document.getElementById('longitude');
        this.photoInput = document.getElementById('photo');
        this.filePreview = document.getElementById('file-preview');
        const cameraBtn = document.getElementById('camera-upload-btn');
        const photoBtn = document.getElementById('photo-upload-btn');
        
        this.imageViewer = document.getElementById('image-viewer');
        this.closeViewerBtn = document.getElementById('close-viewer-btn');
        this.viewerImg = document.getElementById('viewer-img');
        this.viewerInfo = document.getElementById('viewer-info');
        
        this.galleryModal = document.getElementById('gallery-modal');
        this.closeGalleryBtn = document.getElementById('close-gallery-btn');
        this.galleryGrid = document.getElementById('gallery-grid');
        
        this.searchResultsContainer = document.getElementById('search-results');
        
        this.bottomSheet = document.getElementById('bottom-sheet');
        this.bottomSheetContent = document.getElementById('bottom-sheet-content');

        this.notificationBar = document.getElementById('notification-bar');
        this.notificationMessage = document.getElementById('notification-message');
        this.closeNotificationBtn = document.getElementById('close-notification-btn');
        
        this.authModal = document.getElementById('auth-modal');
        this.authBtn = document.getElementById('auth-btn');
        this.profileBtn = document.getElementById('profile-btn');
        this.loginForm = document.getElementById('login-form');
        this.signupForm = document.getElementById('signup-form');
        this.profileModal = document.getElementById('profile-modal');

        document.getElementById('camera-icon-container').innerHTML = Config.icons.uploadCamera;
        document.getElementById('photo-icon-container').innerHTML = Config.icons.uploadPhoto;
        document.getElementById('search-icon-container').innerHTML = Config.icons.search;
        document.getElementById('header-location-icon-container').innerHTML = Config.icons.location;

        this.closeModalButton.addEventListener('click', () => this.toggleUploadModal(false));
        this.closeModalButton.addEventListener('touchend', (e) => {
            e.preventDefault();
            this.toggleUploadModal(false);
        });
        this.uploadModal.addEventListener('click', (e) => {
            if (e.target === this.uploadModal) this.toggleUploadModal(false);
        });
        this.uploadForm.addEventListener('submit', onFormSubmit);

        this.closeViewerBtn.addEventListener('click', () => this.toggleImageViewer(false));
        this.imageViewer.addEventListener('click', (e) => {
            if (e.target === this.imageViewer) this.toggleImageViewer(false);
        });
        this.closeGalleryBtn.addEventListener('click', () => this.toggleGallery(false));
        
        cameraBtn.addEventListener('click', () => {
            this.photoInput.removeAttribute('capture');
            this.photoInput.setAttribute('capture', 'environment');
            this.photoInput.click();
        });

        photoBtn.addEventListener('click', () => {
            this.photoInput.removeAttribute('capture');
            this.photoInput.click();
        });

        this.photoInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                this.filePreview.textContent = `Selected: ${e.target.files[0].name}`;
            } else {
                this.filePreview.textContent = '';
            }
        });
        
        // Auth event listeners
        this.authBtn.addEventListener('click', () => this.toggleAuthModal(true));
        document.getElementById('close-auth-modal').addEventListener('click', () => this.toggleAuthModal(false));
        document.getElementById('close-profile-btn').addEventListener('click', () => this.toggleProfileModal(false));
        document.getElementById('show-signup').addEventListener('click', () => this.switchAuthForm('signup'));
        document.getElementById('show-login').addEventListener('click', () => this.switchAuthForm('login'));
        document.getElementById('login-form-element').addEventListener('submit', App.handleLogin.bind(App));
        document.getElementById('signup-form-element').addEventListener('submit', App.handleSignup.bind(App));
        document.getElementById('toggle-login-password').addEventListener('click', () => this.togglePasswordVisibility('login-password'));
        document.getElementById('toggle-signup-password').addEventListener('click', () => this.togglePasswordVisibility('signup-password'));
    },

    toggleUploadModal(show, latlng = null) {
        if (show && latlng) {
            this.latInput.value = latlng.lat;
            this.lonInput.value = latlng.lng;
            const savedName = localStorage.getItem('pictxel_uploader_name');
            if (savedName) this.uploadForm.uploaderName.value = savedName;
            document.getElementById('spotDate').value = new Date().toISOString().split('T')[0];
            this.uploadModal.classList.remove('modal-hidden');
            this.uploadModal.classList.add('modal-visible');
        } else {
            this.uploadModal.classList.add('modal-hidden');
            this.uploadModal.classList.remove('modal-visible');
            this.uploadForm.reset();
            this.filePreview.textContent = '';
        }
    },

    toggleImageViewer(show, spotId = null, spot = null, onShowOnMap = () => {}) {
         if (show && spot && spotId) {
            const locationHtml = (spot.city && spot.city !== 'Unknown') || (spot.country && spot.country !== 'Unknown')
                ? `<p class="text-xs text-gray-400 mt-1">${spot.city}, ${spot.country}</p>`
                : '';
            
            const showOnMapBtnId = `show-on-map-${spotId}`;
            this.viewerInfo.style.pointerEvents = 'auto';
            
            if (spot.spotType === 'note') {
                this.viewerImg.style.display = 'none';
            } else if (spot.spotType === 'youtube') {
                if (spot.photoDataUrl && !spot.photoDataUrl.includes('youtube.com')) {
                    this.viewerImg.style.display = 'block';
                    this.viewerImg.src = spot.photoDataUrl;
                } else {
                    this.viewerImg.style.display = 'none';
                }
                const youtubePlayer = document.createElement('iframe');
                youtubePlayer.src = `https://www.youtube.com/embed/${spot.mediaId}?autoplay=1`;
                youtubePlayer.className = 'max-h-[70%] max-w-[90vw] rounded-lg shadow-2xl pointer-events-auto mt-4';
                youtubePlayer.style.width = '800px';
                youtubePlayer.style.height = '450px';
                youtubePlayer.allow = 'autoplay; encrypted-media';
                youtubePlayer.allowFullscreen = true;
                this.viewerImg.parentNode.insertBefore(youtubePlayer, this.viewerImg);
            } else if (spot.spotType === 'audio') {
                if (spot.photoDataUrl) {
                    this.viewerImg.style.display = 'block';
                    this.viewerImg.src = spot.photoDataUrl;
                } else {
                    this.viewerImg.style.display = 'none';
                }
                const audioPlayer = document.createElement('audio');
                audioPlayer.src = spot.mediaUrl;
                audioPlayer.controls = true;
                audioPlayer.autoplay = true;
                audioPlayer.muted = false;
                audioPlayer.className = 'max-w-[90vw] rounded-lg shadow-2xl pointer-events-auto mt-4';
                audioPlayer.style.width = '400px';
                this.viewerImg.parentNode.insertBefore(audioPlayer, this.viewerInfo);
                audioPlayer.play().catch(() => console.log('Autoplay blocked'));
            } else if (spot.spotType === 'video') {
                if (spot.photoDataUrl) {
                    this.viewerImg.style.display = 'block';
                    this.viewerImg.src = spot.photoDataUrl;
                } else {
                    this.viewerImg.style.display = 'none';
                }
                const videoPlayer = document.createElement('video');
                videoPlayer.src = spot.mediaUrl;
                videoPlayer.controls = true;
                videoPlayer.autoplay = true;
                videoPlayer.className = 'max-h-[70%] max-w-[90vw] rounded-lg shadow-2xl pointer-events-auto mt-4';
                videoPlayer.style.width = '800px';
                videoPlayer.style.height = '450px';
                this.viewerImg.parentNode.insertBefore(videoPlayer, this.viewerImg);
            } else if (spot.spotType === 'image' && spot.mediaUrl) {
                this.viewerImg.style.display = 'block';
                this.viewerImg.src = spot.mediaUrl;
            } else {
                this.viewerImg.style.display = 'block';
                this.viewerImg.src = spot.photoDataUrl;
            }

            // Add description and reactions after media
            const linkifiedDescription = (spot.description || '').replace(
                /(https?:\/\/[^\s]+)/g, 
                '<a href="$1" target="_blank" class="text-blue-400 hover:text-blue-300 underline">$1</a>'
            );
            
            this.viewerInfo.innerHTML = `
                <h3 class="font-bold text-lg">${spot.uploaderName}</h3>
                <p class="text-gray-300 text-sm mt-1">${linkifiedDescription}</p>
                ${locationHtml}
                <div id="reaction-bar" class="mt-3 flex items-center justify-center text-lg space-x-2">
                   ${this.generateReactionsHtml(spotId, spot)}
                </div>
                <button id="${showOnMapBtnId}" class="text-blue-400 hover:text-blue-300 text-sm mt-3">Show on Map</button>
                `;

             setTimeout(() => {
                document.getElementById(showOnMapBtnId).addEventListener('click', () => {
                    this.toggleImageViewer(false);
                    onShowOnMap(spot.location);
                });
             }, 0);

            this.imageViewer.classList.remove('modal-hidden');
            this.imageViewer.classList.add('modal-visible');
        } else {
            this.imageViewer.classList.add('modal-hidden');
            this.imageViewer.classList.remove('modal-visible');
            this.viewerImg.src = "";
            this.viewerInfo.innerHTML = "";
            this.viewerInfo.style.pointerEvents = 'none';
            // Remove any media elements to stop playback
            const iframe = this.viewerImg.parentNode.querySelector('iframe');
            const audio = this.viewerImg.parentNode.querySelector('audio');
            const video = this.viewerImg.parentNode.querySelector('video');
            if (iframe) iframe.remove();
            if (audio) audio.remove();
            if (video) video.remove();
        }
    },

    generateReactionsHtml(spotId, spot) {
        const currentUserVote = spot.voters ? spot.voters[FirebaseService.userId] : null;
        return Object.entries(App.REACTIONS).map(([key, emoji]) => {
            const count = (spot.reactions && spot.reactions[key]) || 0;
            const selectedClass = currentUserVote === key ? 'selected' : '';
            return `
                <button data-spot-id="${spotId}" data-reaction="${key}" class="reaction-btn ${selectedClass}">
                    <span class="text-xl">${emoji}</span>
                    <span class="text-xs">${count}</span>
                </button>
            `;
        }).join('');
    },

    toggleGallery(show, spots = [], onSpotClick) {
         if (show) {
            this.galleryGrid.innerHTML = '';
            spots.forEach(spot => {
                let galleryItem;
                if (spot.data.photoDataUrl) {
                    galleryItem = document.createElement('img');
                    galleryItem.src = spot.data.photoDataUrl;
                    galleryItem.className = 'w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity';
                } else if (spot.data.spotType === 'note') {
                    galleryItem = document.createElement('div');
                    const bgColor = Utils.getRandomHexColor();
                    const textColor = Utils.getContrastColor(bgColor);
                    
                    galleryItem.className = 'gallery-note-item w-full h-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center p-2 text-center text-sm';
                    galleryItem.style.backgroundColor = bgColor;
                    galleryItem.style.color = textColor;
                    galleryItem.textContent = Utils.truncateText(spot.data.description, 50);
                } else if (spot.data.spotType === 'audio') {
                    galleryItem = document.createElement('div');
                    galleryItem.className = 'w-full h-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center bg-blue-500 text-white text-4xl';
                    galleryItem.textContent = '🎵';
                } else if (spot.data.spotType === 'video') {
                    galleryItem = document.createElement('div');
                    galleryItem.className = 'w-full h-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center bg-purple-500 text-white text-4xl';
                    galleryItem.textContent = '🎥';
                } else {
                    galleryItem = document.createElement('div');
                    galleryItem.className = 'w-full h-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center bg-gray-500 text-white text-4xl';
                    galleryItem.textContent = '📎';
                }
                
                galleryItem.addEventListener('click', () => {
                    this.toggleGallery(false);
                    onSpotClick(spot.id, spot.data);
                });
                this.galleryGrid.appendChild(galleryItem);
            });
            this.galleryModal.classList.remove('modal-hidden');
            this.galleryModal.classList.add('modal-visible');
        } else {
            this.galleryModal.classList.add('modal-hidden');
            this.galleryModal.classList.remove('modal-visible');
            this.galleryGrid.innerHTML = '';
        }
    },
    
    getFormData() {
        const formData = new FormData(this.uploadForm);
        return {
            uploaderName: formData.get('uploaderName'),
            description: formData.get('description'),
            photo: formData.get('photo'),
            latitude: parseFloat(formData.get('latitude')),
            longitude: parseFloat(formData.get('longitude')),
            spotDate: formData.get('spotDate'),
        };
    },

    setFormSubmitting(isSubmitting, message = 'Upload Spot') {
        const submitButton = this.uploadForm.querySelector('button[type="submit"]');
        submitButton.disabled = isSubmitting;
        submitButton.textContent = message;
    },

    displaySearchResults(results, onResultClick) {
        this.searchResultsContainer.innerHTML = '';
        this.searchResultsContainer.classList.remove('hidden');

        if (!results || results.length === 0) {
            this.searchResultsContainer.innerHTML = `<div class="p-4 text-sm text-gray-600">No results found.</div>`;
            return;
        }

        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'p-3 border-b border-white/20 cursor-pointer hover:bg-white/20 text-gray-800 text-sm';
            item.innerHTML = result.name;
            item.addEventListener('click', () => onResultClick(result));
            this.searchResultsContainer.appendChild(item);
        });
    },

    hideSearchResults() {
        this.searchResultsContainer.innerHTML = '';
        this.searchResultsContainer.classList.add('hidden');
    },

    updateBottomSheet(spots, onSpotClick) {
        const limitedSpots = spots.slice(0, 50);

        if (!this.bottomSheet || !this.bottomSheetContent) return;

        this.bottomSheetContent.innerHTML = ''; 

        if (limitedSpots.length === 0) {
            this.bottomSheet.classList.remove('visible');
            return;
        }

        this.bottomSheet.classList.add('visible');

        limitedSpots.forEach(spot => {
            let sheetItem;
            if (spot.data.photoDataUrl) {
                sheetItem = document.createElement('img');
                sheetItem.src = spot.data.photoDataUrl;
                sheetItem.className = 'flex-shrink-0 w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity';
            } else if (spot.data.spotType === 'note') {
                sheetItem = document.createElement('div');
                const bgColor = Utils.getRandomHexColor();
                const textColor = Utils.getContrastColor(bgColor);
                
                sheetItem.className = 'flex-shrink-0 w-24 h-24 rounded-lg cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center p-2 text-center text-xs';
                sheetItem.style.backgroundColor = bgColor;
                sheetItem.style.color = textColor;
                sheetItem.textContent = Utils.truncateText(spot.data.description, 40);
            } else if (spot.data.spotType === 'audio') {
                sheetItem = document.createElement('div');
                sheetItem.className = 'flex-shrink-0 w-24 h-24 rounded-lg cursor-pointer hover:opacity-80 transition-opacity bg-blue-500 text-white p-2 flex flex-col justify-between';
                sheetItem.innerHTML = `<div class="text-xs overflow-hidden">${Utils.truncateText(spot.data.description, 20)}</div><div class="text-lg text-center">🎵</div>`;
            } else if (spot.data.spotType === 'video') {
                sheetItem = document.createElement('div');
                sheetItem.className = 'flex-shrink-0 w-24 h-24 rounded-lg cursor-pointer hover:opacity-80 transition-opacity bg-purple-500 text-white p-2 flex flex-col justify-between';
                sheetItem.innerHTML = `<div class="text-xs overflow-hidden">${Utils.truncateText(spot.data.description, 20)}</div><div class="text-lg text-center">🎥</div>`;
            } else {
                sheetItem = document.createElement('div');
                sheetItem.className = 'flex-shrink-0 w-24 h-24 rounded-lg cursor-pointer hover:opacity-80 transition-opacity bg-gray-500 text-white p-2 flex flex-col justify-between';
                sheetItem.innerHTML = `<div class="text-xs overflow-hidden">${Utils.truncateText(spot.data.description, 20)}</div><div class="text-lg text-center">📎</div>`;
            }
            
            sheetItem.addEventListener('click', () => {
                onSpotClick(spot.id, spot.data);
            });
            this.bottomSheetContent.appendChild(sheetItem);
        });
    },

    toggleNotification(show, message) {
        if(show) {
            this.notificationMessage.textContent = message;
            this.notificationBar.classList.add('visible');
        } else {
            this.notificationBar.classList.remove('visible');
        }
    },
    
    toggleAuthModal(show) {
        if (show) {
            this.authModal.classList.remove('modal-hidden');
            this.authModal.classList.add('modal-visible');
        } else {
            this.authModal.classList.add('modal-hidden');
            this.authModal.classList.remove('modal-visible');
        }
    },
    
    switchAuthForm(form) {
        if (form === 'signup') {
            this.loginForm.classList.add('hidden');
            this.signupForm.classList.remove('hidden');
        } else {
            this.signupForm.classList.add('hidden');
            this.loginForm.classList.remove('hidden');
        }
    },
    
    updateAuthButton(user) {
        if (user && user.emailVerified) {
            this.authBtn.textContent = 'Logout';
            this.profileBtn.classList.remove('hidden');
        } else {
            this.authBtn.textContent = 'Login';
            this.profileBtn.classList.add('hidden');
        }
    },
    
    toggleProfileModal(show) {
        if (show) {
            this.profileModal.classList.remove('modal-hidden');
            this.profileModal.classList.add('modal-visible');
        } else {
            this.profileModal.classList.add('modal-hidden');
            this.profileModal.classList.remove('modal-visible');
        }
    },
    
    validatePassword(password) {
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasUpper && hasLower && hasNumber && hasSpecial;
    },
    
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    
    showLoading() {
        document.getElementById('loading-indicator').classList.remove('hidden');
    },
    
    hideLoading() {
        document.getElementById('loading-indicator').classList.add('hidden');
    },
    
    togglePasswordVisibility(inputId) {
        const input = document.getElementById(inputId);
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
    },
    
    displayUserProfile(userData, userSpots, onDeleteSpot) {
        const profileContent = document.getElementById('profile-content');
        const userSpotsGrid = document.getElementById('user-spots-grid');
        
        profileContent.innerHTML = `
            <div class="text-center mb-6">
                <h3 class="text-xl font-bold">${userData.name}</h3>
                <p class="text-gray-300">${userData.email}</p>
                <p class="text-sm text-gray-400">Total Spots: ${userSpots.length}</p>
            </div>
        `;
        
        userSpotsGrid.innerHTML = '';
        
        if (userSpots.length === 0) {
            userSpotsGrid.innerHTML = '<p class="text-center text-gray-400 col-span-full">No spots shared yet.</p>';
            return;
        }
        
        userSpots.forEach(spot => {
            const spotElement = document.createElement('div');
            spotElement.className = 'relative group cursor-pointer';
            
            if (spot.data.spotType === 'note') {
                const bgColor = Utils.getRandomHexColor();
                const textColor = Utils.getContrastColor(bgColor);
                spotElement.innerHTML = `
                    <div class="w-full h-24 rounded-lg flex items-center justify-center p-2 text-center text-xs" style="background-color: ${bgColor}; color: ${textColor};">
                        ${Utils.truncateText(spot.data.description, 40)}
                    </div>
                    <button class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                `;
            } else if (spot.data.spotType === 'audio') {
                spotElement.innerHTML = `
                    <div class="w-full h-24 rounded-lg bg-blue-500 text-white p-2 flex flex-col justify-between">
                        <div class="text-xs overflow-hidden">${Utils.truncateText(spot.data.description, 30)}</div>
                        <div class="text-lg text-center">🎵</div>
                    </div>
                    <button class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                `;
            } else if (spot.data.spotType === 'video' && !spot.data.photoDataUrl) {
                spotElement.innerHTML = `
                    <div class="w-full h-24 rounded-lg bg-purple-500 text-white p-2 flex flex-col justify-between">
                        <div class="text-xs overflow-hidden">${Utils.truncateText(spot.data.description, 30)}</div>
                        <div class="text-lg text-center">🎥</div>
                    </div>
                    <button class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                `;
            } else if (spot.data.photoDataUrl) {
                spotElement.innerHTML = `
                    <img src="${spot.data.photoDataUrl}" class="w-full h-24 object-cover rounded-lg">
                    <button class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                `;
            } else {
                spotElement.innerHTML = `
                    <div class="w-full h-24 rounded-lg bg-gray-500 text-white p-2 flex flex-col justify-between">
                        <div class="text-xs overflow-hidden">${Utils.truncateText(spot.data.description, 30)}</div>
                        <div class="text-lg text-center">📎</div>
                    </div>
                    <button class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                `;
            }
            
            const deleteBtn = spotElement.querySelector('button');
            if (deleteBtn) {
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    onDeleteSpot(spot.id);
                });
            }
            
            spotElement.addEventListener('click', () => {
                this.toggleProfileModal(false);
                MapService.panTo(spot.data.location);
            });
            
            userSpotsGrid.appendChild(spotElement);
        });
    }
};

const ImageProcessor = {
    process(file, watermarkText) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = this.createWatermarkedCanvas(img, watermarkText);
                    canvas.toBlob((blob) => {
                        if (blob) resolve(blob);
                        else reject(new Error('Canvas to Blob conversion failed'));
                    }, 'image/jpeg', Config.imageProcessing.jpegQuality);
                };
                img.onerror = () => reject(new Error('Image loading failed'));
                img.src = e.target.result;
            };
            reader.onerror = () => reject(new Error('File reading failed'));
            reader.readAsDataURL(file);
        });
    },

    createWatermarkedCanvas(img, watermarkText) {
        const { maxDimension } = Config.imageProcessing;
        let { width, height } = img;
        if (width > height) {
            if (width > maxDimension) {
                height *= maxDimension / width;
                width = maxDimension;
            }
        } else {
            if (height > maxDimension) {
                width *= maxDimension / height;
                height = maxDimension;
            }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        const fontSize = height * 0.04;
        ctx.font = `bold ${fontSize}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const textMetrics = ctx.measureText(watermarkText);
        const padding = fontSize * 0.5;
        const rectWidth = textMetrics.width + padding * 2;
        const rectHeight = fontSize + padding;
        const rectX = (width - rectWidth) / 2;
        const rectY = height - rectHeight - (height * 0.03);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.roundRect(rectX, rectY, rectWidth, rectHeight, [rectHeight / 2]);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(watermarkText, width / 2, rectY + rectHeight / 2);
        
        return canvas;
    },
    
    blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }
};

const APIService = {
    locationCache: new Map(),
    
    async getGeolocationData(lat, lon) {
        const cacheKey = `${lat.toFixed(3)},${lon.toFixed(3)}`;
        if (this.locationCache.has(cacheKey)) {
            return this.locationCache.get(cacheKey);
        }
        
        try {
            const response = await fetch(`${Config.api.reverseGeocode}?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
            
            const data = await response.json();
            const result = { country: (data.countryName || 'Unknown').replace(' (the)', ''), city: data.city || data.locality || 'Unknown' };
            this.locationCache.set(cacheKey, result);
            return result;
        } catch (error) {
            console.error("Geolocation lookup failed:", error);
            return { country: 'Unknown', city: 'Unknown' };
        }
    }
};

const App = {
    spotsData: new Map(),
    notificationTimeout: null,
    REACTIONS: {
        thumbsUp: '👍',
        thumbsDown: '👎',
        heart: '❤️',
        heartEyes: '😍',
        laugh: '😂',
        shocked: '😮',
        sad: '😢',
        angry: '😠',
        evil: '😈'
    },
    
    init() {
        FirebaseService.init(this.onAuthStateChange.bind(this));
        MapService.init(this.onMapClick.bind(this), this.onClusterClick.bind(this), this.updateBottomSheet.bind(this));
        UIService.init(this.handleUpload.bind(this));
        this.setupHeaderControls();
        this.setupReactionHandler();
        this.setupPopupImageClickHandler();
        this.setupPopupNoteClickHandler();
        this.setupPopupYouTubeClickHandler();
        this.setupPopupMediaClickHandler();
        UIService.closeNotificationBtn.addEventListener('click', () => this.hideNotification());
        UIService.authBtn.addEventListener('click', () => this.handleAuthButton());
        UIService.profileBtn.addEventListener('click', () => this.handleProfile());
        this.showCurrentUserLocation();
    },

    onAuthStateChange(user) {
        UIService.updateAuthButton(user);
        FirebaseService.listenForSpots(this.onSpotsUpdate.bind(this));
    },

    onSpotsUpdate(snapshot) {
        const spots = [];
        this.spotsData.clear();
        snapshot.forEach(doc => {
            const spot = { id: doc.id, data: doc.data() };
            spots.push(spot);
            this.spotsData.set(spot.id, spot.data);
        });
        MapService.renderSpots(spots);
        this.updateBottomSheet();
    },

    onMapClick(e) {
        const popupPane = MapService.map.getPane('popupPane');
        if (popupPane && popupPane.hasChildNodes()) {
            MapService.map.closePopup();
            return;
        }
        
        UIService.toggleUploadModal(true, e.latlng);
    },
    
    async handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        if (!UIService.validateEmail(email)) {
            this.showNotification('Please enter a valid email address.');
            return;
        }
        
        if (!UIService.validatePassword(password)) {
            this.showNotification('Password must contain uppercase, lowercase, number, and special character.');
            return;
        }
        
        UIService.showLoading();
        try {
            await FirebaseService.signIn(email, password);
            await FirebaseService.currentUser.reload();
            if (!FirebaseService.currentUser.emailVerified) {
                this.showNotification('Please verify your email before sharing spots.');
            } else {
                UIService.toggleAuthModal(false);
                UIService.updateAuthButton(FirebaseService.currentUser);
                this.showNotification('Successfully logged in!');
            }
        } catch (error) {
            let errorMessage = 'Login failed. Please try again.';
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                errorMessage = 'Invalid email or password. Please check your credentials and try again.';
            } else if (error.code === 'auth/user-disabled') {
                errorMessage = 'This account has been disabled. Please contact support.';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Too many failed attempts. Please try again later.';
            }
            this.showNotification(errorMessage);
        } finally {
            UIService.hideLoading();
        }
    },
    
    async handleSignup(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        if (!UIService.validateEmail(email)) {
            this.showNotification('Please enter a valid email address.');
            return;
        }
        
        if (!UIService.validatePassword(password)) {
            this.showNotification('Password must contain uppercase, lowercase, number, and special character.');
            return;
        }
        
        UIService.showLoading();
        try {
            await FirebaseService.signUp(email, password, name);
            UIService.switchAuthForm('login');
            this.showNotification('Account created! Please check your email (including spam folder) to verify your account. You can now login once verified.');
        } catch (error) {
            this.showNotification('Signup failed: ' + error.message);
        } finally {
            UIService.hideLoading();
        }
    },
    
    async handleAuthButton() {
        if (FirebaseService.currentUser) {
            await FirebaseService.signOut();
            this.showNotification('Logged out successfully.');
        } else {
            UIService.toggleAuthModal(true);
        }
    },
    
    async handleProfile() {
        if (!FirebaseService.currentUser) return;
        
        UIService.showLoading();
        try {
            const userData = await FirebaseService.getUserData(FirebaseService.userId);
            const userSpots = await FirebaseService.getUserSpots(FirebaseService.userId);
            
            UIService.displayUserProfile(userData, userSpots, this.onDeleteSpot.bind(this));
            UIService.toggleProfileModal(true);
        } catch (error) {
            console.error('Error loading profile:', error);
            this.showNotification('Error loading profile data.');
        } finally {
            UIService.hideLoading();
        }
    },
    
    async onDeleteSpot(spotId) {
        if (confirm('Are you sure you want to delete this spot?')) {
            UIService.showLoading();
            try {
                await FirebaseService.deleteSpot(spotId);
                this.showNotification('Spot deleted successfully.');
                this.handleProfile(); // Refresh profile
            } catch (error) {
                console.error('Error deleting spot:', error);
                this.showNotification('Error deleting spot.');
            } finally {
                UIService.hideLoading();
            }
        }
    },

    onMarkerClick(spotId, spotData) {
        UIService.toggleImageViewer(true, spotId, spotData, this.onShowOnMap.bind(this));
    },

    onClusterClick(e) {
        const markers = e.layer.getAllChildMarkers();
        const spots = markers
            .map(marker => ({ id: marker.options.spotId, data: marker.options.spotData }))
            .filter(spot => spot.data);
        
        if (spots.length > 0) {
            UIService.toggleGallery(true, spots, this.onMarkerClick.bind(this));
        }
    },
    
    onShowOnMap(location) {
        MapService.panTo(location);
    },
    
    showCurrentUserLocation() {
        if (!navigator.geolocation) {
            this.showNotification("Geolocation is not supported by your browser.", null);
            return;
        }

        this.showNotification("Zooming to your current location");

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                MapService.panTo({ latitude: lat, longitude: lng }, 19);
                MapService.showUserLocationMarker({ latitude: lat, longitude: lng });
            },
            () => {
                this.showNotification("Unable to retrieve your location.", null);
            }
        );
    },

    async handleUpload(e) {
        e.preventDefault();
        
        if (!navigator.onLine) {
            this.showNotification("You're offline. Please check your connection and try again.");
            return;
        }
        
        if (!FirebaseService.currentUser || !FirebaseService.currentUser.emailVerified) {
            this.showNotification("Please sign in or log in first to share spots.");
            UIService.toggleAuthModal(true);
            return;
        }
        
        try {
            const { uploaderName, description, photo, latitude, longitude, spotDate } = UIService.getFormData();
            
            if (!description.trim()) {
                this.showNotification("Please add a description or note.");
                return;
            }

            UIService.setFormSubmitting(true, 'Processing...');
            localStorage.setItem('pictxel_uploader_name', uploaderName);

            let photoDataUrl = null;
            let spotType = 'note';
            let mediaUrl = null;
            let mediaId = null;

            // Process uploaded image first (priority)
            if (photo && photo.size > 0) {
                console.log("Step 1a: Processing uploaded image...");
                const imageBlob = await ImageProcessor.process(photo, uploaderName);
                photoDataUrl = await ImageProcessor.blobToBase64(imageBlob);
                console.log("Step 2: Image processed and converted.");
            }

            // Smart link detection
            const linkData = await this.detectMediaLinks(description);
            if (linkData) {
                spotType = linkData.type;
                mediaUrl = linkData.url;
                mediaId = linkData.id;
                // Only use link thumbnail if no uploaded image
                if (!photoDataUrl && linkData.thumbnail) {
                    photoDataUrl = linkData.thumbnail;
                }
                console.log(`Step 1b: ${linkData.type} detected.`);
            } else if (photoDataUrl) {
                spotType = 'image';
            }
            
            console.log("Step 1b: Fetching location...");
            const locationData = await APIService.getGeolocationData(latitude, longitude);
            console.log("Step 3: Location data ready.");
            
            UIService.setFormSubmitting(true, 'Saving...');

            await FirebaseService.saveSpot({
                uploaderName,
                description,
                photoDataUrl,
                spotType,
                location: { latitude, longitude },
                country: locationData.country,
                city: locationData.city,
                spotDate,
                mediaUrl,
                mediaId,
                youtubeVideoId: spotType === 'youtube' ? mediaId : null,
                userUid: FirebaseService.userId,
            });
            
            console.log("Step 4: Spot saved to Firestore! All done.");
            UIService.toggleUploadModal(false);
            this.showNotification("Your spot has been saved successfully!");

        } catch (error) {
            console.error("Upload failed:", error);
            this.showNotification("Something went wrong while saving your spot. Please try again.");
        } finally {
            UIService.setFormSubmitting(false, 'Upload Spot');
        }
    },
    
    setupHeaderControls() {
        const searchInput = document.getElementById('location-search-input');
        const locationBtn = document.getElementById('header-location-btn');
        const searchContainer = document.getElementById('search-container').parentElement;

        locationBtn.addEventListener('click', () => {
            this.showCurrentUserLocation();
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value;
                if (query) {
                    this.handleLocationSearch(query);
                }
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                UIService.hideSearchResults();
            }
        });
    },

    async handleLocationSearch(query) {
        const url = new URL('https://nominatim.openstreetmap.org/search');
        url.searchParams.append('q', query);
        url.searchParams.append('format', 'json');
        url.searchParams.append('limit', 10);
        url.searchParams.append('polygon_geojson', 1);

        try {
            const response = await fetch(url);
            const data = await response.json();

            const results = data.map(item => {
                const [south, north, west, east] = item.boundingbox;
                return {
                    name: item.display_name,
                    bbox: L.latLngBounds(L.latLng(south, west), L.latLng(north, east)),
                    center: L.latLng(item.lat, item.lon)
                };
            });

            UIService.displaySearchResults(results, this.onSearchResultClick.bind(this));
        } catch (error) {
            console.error("Error fetching location data:", error);
            alert("Could not perform search. Please check your connection.");
        }
    },
    
    onSearchResultClick(result) {
        const bbox = result.bbox;
        const poly = L.polygon([
            bbox.getSouthEast(),
            bbox.getNorthEast(),
            bbox.getNorthWest(),
            bbox.getSouthWest()
        ]);
        MapService.map.fitBounds(poly.getBounds());
        UIService.hideSearchResults();
        document.getElementById('location-search-input').value = '';
    },

    updateBottomSheet() {
        const bounds = MapService.map.getBounds();
        const bufferedBounds = bounds.pad(Config.map.viewportBuffer / 111320);
        const visibleSpots = [];
        MapService.markers.eachLayer(layer => {
            if (layer instanceof L.Marker && bufferedBounds.contains(layer.getLatLng())) {
                 if(layer.options.spotData) {
                     visibleSpots.push({id: layer.options.spotId, data: layer.options.spotData});
                 }
            }
        });
        UIService.updateBottomSheet(visibleSpots, this.onMarkerClick.bind(this));
    },
    
    showNotification(message, duration = 5000) {
        if (this.notificationTimeout) {
            clearTimeout(this.notificationTimeout);
        }
        UIService.toggleNotification(true, message);
        if (duration) {
            this.notificationTimeout = setTimeout(() => {
                this.hideNotification();
            }, duration);
        }
    },

    hideNotification() {
        if (this.notificationTimeout) {
            clearTimeout(this.notificationTimeout);
            this.notificationTimeout = null;
        }
        UIService.toggleNotification(false);
    },

    setupPopupImageClickHandler() {
        document.addEventListener('click', (e) => {
            const popupImage = e.target.closest('.popup-image');
            if (!popupImage) return;

            const spotId = popupImage.dataset.spotId;
            if (spotId && this.spotsData.has(spotId)) {
                const spotData = this.spotsData.get(spotId);
                MapService.map.closePopup();
                this.onMarkerClick(spotId, spotData);
            }
        });
    },
    
    setupPopupNoteClickHandler() {
        document.addEventListener('click', (e) => {
            const popupNote = e.target.closest('.popup-note');
            if (!popupNote) return;

            const spotId = popupNote.dataset.spotId;
            if (spotId && this.spotsData.has(spotId)) {
                const spotData = this.spotsData.get(spotId);
                MapService.map.closePopup();
                this.onMarkerClick(spotId, spotData);
            }
        });
    },

    setupPopupYouTubeClickHandler() {
        document.addEventListener('click', (e) => {
            const popupYoutube = e.target.closest('.popup-youtube');
            if (!popupYoutube) return;

            const spotId = popupYoutube.dataset.spotId;
            if (spotId && this.spotsData.has(spotId)) {
                const spotData = this.spotsData.get(spotId);
                MapService.map.closePopup();
                this.onMarkerClick(spotId, spotData);
            }
        });
    },

    setupPopupMediaClickHandler() {
        document.addEventListener('click', (e) => {
            const popupMedia = e.target.closest('.popup-media');
            if (!popupMedia) return;

            const spotId = popupMedia.dataset.spotId;
            if (spotId && this.spotsData.has(spotId)) {
                const spotData = this.spotsData.get(spotId);
                MapService.map.closePopup();
                this.onMarkerClick(spotId, spotData);
            }
        });
    },

    async detectMediaLinks(text) {
        // Check YouTube first (no content-type needed)
        const youtubeMatch = text.match(/(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (youtubeMatch) {
            const id = youtubeMatch[2];
            return {
                type: 'youtube',
                id,
                url: `https://www.youtube.com/watch?v=${id}`,
                thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
            };
        }

        // Check extension-based patterns
        const extensionPatterns = {
            audio: /(https?:\/\/[^\s]+\.(?:mp3|wav|ogg|m4a|aac|flac)(?:\?[^\s]*)?)/i,
            image: /(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif|webp|bmp|svg)(?:\?[^\s]*)?)/i,
            video: /(https?:\/\/[^\s]+\.(?:mp4|webm|avi|mov|wmv|flv|mkv)(?:\?[^\s]*)?)/i
        };

        for (const [type, regex] of Object.entries(extensionPatterns)) {
            const match = text.match(regex);
            if (match) {
                const url = match[1];
                return {
                    type,
                    id: url,
                    url,
                    thumbnail: type === 'image' ? url : null
                };
            }
        }

        // Check URLs without extensions using content-type or patterns
        const urlMatch = text.match(/(https?:\/\/[^\s]+)/i);
        if (urlMatch) {
            const url = urlMatch[1];
            
            // Check for streaming patterns first
            if (url.includes('icecast') || url.includes('shoutcast') || url.includes(':8000') || url.includes(':8080') || url.includes(':8443')) {
                return { type: 'audio', id: url, url, thumbnail: null };
            }
            
            try {
                const response = await fetch(url, { method: 'HEAD', mode: 'cors' });
                const contentType = response.headers.get('content-type') || '';
                console.log('Content-type for', url, ':', contentType);
                
                if (contentType.startsWith('audio/')) {
                    return { type: 'audio', id: url, url, thumbnail: null };
                } else if (contentType.startsWith('video/')) {
                    return { type: 'video', id: url, url, thumbnail: null };
                } else if (contentType.startsWith('image/')) {
                    return { type: 'image', id: url, url, thumbnail: url };
                }
            } catch (error) {
                console.log('Content-type check failed:', error.message);
                // Fallback: assume audio for streaming-like URLs
                if (url.match(/:(8000|8080|8443|3000)\//)) {
                    return { type: 'audio', id: url, url, thumbnail: null };
                }
            }
        }
        return null;
    },

    setupReactionHandler() {
        document.addEventListener('click', async (e) => {
            const button = e.target.closest('.reaction-btn');
            if (!button) return;
            if (!FirebaseService.userId) {
                alert("You need to be signed in to react.");
                return;
            }

            const spotId = button.dataset.spotId;
            const newReaction = button.dataset.reaction;

            try {
                const spotDoc = await FirebaseService.getSpot(spotId);
                if (!spotDoc.exists) { return; }
                
                const spotData = spotDoc.data();
                const voters = spotData.voters || {};
                const previousReaction = voters[FirebaseService.userId];
                
                const reactionContainer = button.parentElement;
                const oldBtn = previousReaction ? reactionContainer.querySelector(`[data-reaction="${previousReaction}"]`) : null;
                const newBtn = button;

                if (newReaction === previousReaction) {
                    newBtn.classList.remove('selected');
                    const countSpan = newBtn.querySelector('span:last-child');
                    countSpan.textContent = parseInt(countSpan.textContent) - 1;
                } 
                else if (previousReaction) {
                    if (oldBtn) {
                        oldBtn.classList.remove('selected');
                        let countSpan = oldBtn.querySelector('span:last-child');
                        countSpan.textContent = parseInt(countSpan.textContent) - 1;
                    }

                    newBtn.classList.add('selected');
                    let countSpan = newBtn.querySelector('span:last-child');
                    countSpan.textContent = parseInt(countSpan.textContent) + 1;
                }
                else {
                     newBtn.classList.add('selected');
                     const countSpan = newBtn.querySelector('span:last-child');
                     countSpan.textContent = parseInt(countSpan.textContent) + 1;
                }
                
                await FirebaseService.updateReaction(spotId, newReaction, previousReaction);
                console.log(`Reaction updated from ${previousReaction} to ${newReaction === previousReaction ? null : newReaction}`);

            } catch (error) {
                console.error("Error updating reaction:", error);
            }
        });
    }
};

window.onload = () => {
    App.init();
};
